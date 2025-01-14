// src/utils/notion.js
export const getProjects = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/projects');
      if (!response.ok) {
        throw new Error('Failed to fetch projects');
      }
      const data = await response.json();
      console.log('Fetched projects:', data); // Add this for debugging
      return data;
    } catch (error) {
      console.error('Error fetching projects:', error);
      throw error;
    }
  };