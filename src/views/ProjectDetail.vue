<template>
  <div class="project-detail">
    <div v-if="loading">Loading...</div>
    <div v-else-if="error" class="text-red-500">{{ error }}</div>
    <div v-else class="markdown-content">
      <div class="mb-8">
        <h1 class="text-4xl font-bold mb-4">{{ title }}</h1>
        <div class="text-gray-600 mb-2">Published on {{ date }}</div>
        <div class="text-gray-600 mb-4">Written by {{ author }}</div>
        <div class="flex gap-2">
          <span v-for="tag in tags" 
                :key="tag" 
                class="bg-gray-100 px-3 py-1 rounded-full text-sm">
            {{ tag }}
          </span>
        </div>
      </div>
      <div v-html="renderedContent" class="prose prose-lg max-w-none"></div>
    </div>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt();

export default {
  data() {
    return {
      loading: true,
      error: null,
      title: '',
      date: '',
      author: '',
      tags: [],
      renderedContent: ''
    }
  },
  async mounted() {
    try {
      const response = await fetch(`/content/projects/${this.$route.params.id}.md`);
      
      if (!response.ok) {
        throw new Error(`Failed to load project: ${response.statusText}`);
      }
      
      const text = await response.text();
      
      // Basic frontmatter parsing
      const frontMatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
      const matches = text.match(frontMatterRegex);
      
      if (matches) {
        const [, frontMatter, content] = matches;
        
        // Parse front matter
        const frontMatterLines = frontMatter.split('\n');
        frontMatterLines.forEach(line => {
          const [key, ...valueParts] = line.split(':');
          const value = valueParts.join(':').trim();
          if (key === 'title') this.title = value;
          if (key === 'date') this.date = value;
          if (key === 'author') this.author = value;
          if (key === 'tags') {
            this.tags = value
              .replace('[', '')
              .replace(']', '')
              .split(',')
              .map(tag => tag.trim());
          }
        });
        
        // Render markdown content
        this.renderedContent = md.render(content);
      } else {
        // If no frontmatter, render everything as content
        this.renderedContent = md.render(text);
      }
      
      this.loading = false;
    } catch (error) {
      console.error('Error loading project:', error);
      this.error = 'Failed to load project. Please try again later.';
      this.loading = false;
    }
  }
}
</script>

<style>
.markdown-content {
  width: 100%;
}

.prose {
  max-width: none;
}

.prose img {
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  margin: 2rem 0;
}

.prose h1 {
  font-size: 2.5rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.prose h2 {
  font-size: 2rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.prose p {
  margin-bottom: 1.5rem;
  line-height: 1.8;
}
</style>