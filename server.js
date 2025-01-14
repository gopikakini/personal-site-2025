import express from 'express';
import cors from 'cors';
import { Client } from '@notionhq/client';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

// Add new database ID for writing
const projectsDatabaseId = process.env.NOTION_DATABASE_ID;
const writingDatabaseId = process.env.NOTION_WRITING_DATABASE_ID;


app.get('/api/projects', async (req, res) => {
    try {
      if (!process.env.NOTION_API_KEY || !process.env.NOTION_DATABASE_ID) {
        throw new Error('Missing required environment variables');
      }
  
      const response = await notion.databases.query({
        database_id: projectsDatabaseId,
        sorts: [
          {
            property: 'Date',
            direction: 'descending',
          },
        ],
      });
  
      const projects = response.results.map(page => {
        const properties = page.properties;
        return {
          id: page.id,
          title: properties.Title.title[0].plain_text,
          description: properties.Description.rich_text[0].plain_text,
          category: properties.Category.select.name,
          date: properties.Date.date.start,
          thumbnail: properties.Image.url || '/default-thumbnail.jpg',
          contentSource: properties.ContentSource.select.name,
          externalLink: properties.Link?.url || null,
        };
      });
  
      res.json(projects);
    } catch (error) {
      console.error('Detailed error:', error);
      res.status(500).json({ 
        error: 'Failed to fetch projects',
        details: error.message 
      });
    }
  });


  app.get('/api/writing', async (req, res) => {
    try {
      if (!process.env.NOTION_API_KEY || !process.env.NOTION_WRITING_DATABASE_ID) {
        throw new Error('Missing required environment variables');
      }
  
      const response = await notion.databases.query({
        database_id: writingDatabaseId,
        sorts: [
          {
            property: 'Date',
            direction: 'descending',
          },
        ],
      });

      const posts = response.results.map(page => {
        const properties = page.properties;
        return {
          id: page.id,
          title: properties.Title.title[0].plain_text,
          description: properties.Description.rich_text[0].plain_text,
          date: properties.Date.date.start,
          category: properties.Category.select.name,
          platform: properties.Platform.select.name,
          url: properties.URL.url,
        };
      });

      res.json(posts);
    } catch (error) {
      console.error('Detailed error:', error);
      res.status(500).json({ 
        error: 'Failed to fetch writing posts',
        details: error.message 
      });
    }
  });

  // Add this new endpoint in server.js
app.get('/api/projects/:id', async (req, res) => {
    try {
      const pageId = req.params.id;
      
      // Fetch the page content
      const page = await notion.pages.retrieve({ page_id: pageId });
      
      // Fetch the page blocks (actual content)
      const blocks = await notion.blocks.children.list({ block_id: pageId });
  
      // Convert blocks to readable content
      const content = blocks.results.map(block => {
        if (block.type === 'paragraph') {
          return block.paragraph.rich_text.map(text => text.plain_text).join('');
        }
        if (block.type === 'heading_1') {
          return `# ${block.heading_1.rich_text.map(text => text.plain_text).join('')}`;
        }
        if (block.type === 'heading_2') {
          return `## ${block.heading_2.rich_text.map(text => text.plain_text).join('')}`;
        }
        // Add more block types as needed
        return '';
      }).filter(text => text !== '');
  
      res.json({
        id: page.id,
        properties: page.properties,
        content: content
      });
    } catch (error) {
      console.error('Detailed error:', error);
      res.status(500).json({ 
        error: 'Failed to fetch project details',
        details: error.message 
      });
    }
  });
  
const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });