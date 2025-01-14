export const getPosts = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/writing');
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }
  };