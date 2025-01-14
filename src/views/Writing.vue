<template>
  <section id="writing" class="mb-16">
    <h2 class="text-2xl font-bold mb-4 font-proxima">Latest Writing</h2>
    <p class="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl">
      A collection of my thoughts, learnings, and insights about product management, 
      technology, and the intersection of AI and UX.
    </p>

    <!-- Loading State -->
    <div v-if="loading" class="text-gray-600">
      Loading posts...
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="text-red-600">
      {{ error }}
    </div>

    <!-- Posts List -->
    <div class="space-y-12 max-w-2xl">
      <article 
        v-for="post in posts" 
        :key="post.id" 
        class="border-b border-gray-200 pb-8"
      >
       <h3 class="text-xl font-medium mb-2">{{ post.title }}</h3>

        <div class="flex items-center text-sm text-gray-500 mb-2">
          <span>{{ post.category }}</span>
          <span class="mx-2">|</span>
          <span>{{ formatDate(post.date) }}</span>
        </div>

       
        
        <p class="text-gray-600 dark:text-gray-400 mb-4">
          {{ post.description }}
        </p>

        <a 
          :href="post.url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-600 hover:text-blue-800 inline-flex items-center"
        >
          Read on {{ post.platform }}
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
          </svg>
        </a>
      </article>
    </div>
  </section>
</template>

<script>
import { getPosts } from '../utils/writing';

export default {
  data() {
    return {
      posts: [],
      loading: true,
      error: null
    }
  },
  async created() {
    try {
      this.posts = await getPosts();
      this.loading = false;
    } catch (error) {
      console.error('Error:', error);
      this.error = 'Failed to load posts';
      this.loading = false;
    }
  },
  methods: {
    formatDate(dateString) {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
  }
}
</script>