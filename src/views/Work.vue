<template>
  <section id="work" class="mb-16">
    <h2 class="text-2xl font-bold mb-4 font-proxima">Featured Projects</h2>
    <p class="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl">
      Here are some projects I've worked on. From product prototypes to design explorations, 
      each project represents a unique challenge and learning opportunity in my journey as a product person.
    </p>

    <!-- Loading State -->
    <div v-if="loading" class="text-gray-600">
      <div class="animate-pulse flex space-x-4">
        <div class="flex-1 space-y-4">
          <div class="h-4 bg-gray-200 rounded w-3/4"></div>
          <div class="h-4 bg-gray-200 rounded"></div>
          <div class="h-4 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="text-red-600 bg-red-50 p-4 rounded-lg">
      {{ error }}
    </div>

    <!-- Projects Grid -->
    <div v-else class="grid grid-cols-2 gap-12">
      <div 
        v-for="project in projects" 
        :key="project.id" 
        class="group"
      >
        <!-- Title -->
        <h3 class="text-xl font-medium mb-4">{{ project.title }}</h3>

        <!-- Image -->
        <div class="mb-4 overflow-hidden rounded-lg">
          <img 
            :src="project.thumbnail || getPlaceholderImage(project.title)"
            :alt="project.title"
            class="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
            @error="(e) => handleImageError(e, project.title)"
          />
        </div>

        <!-- Tags -->
        <div class="flex items-center gap-2 mb-4">
          <span class="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600">
            {{ project.category }}
          </span>
          <span class="text-sm text-gray-500">
            {{ formatDate(project.date) }}
          </span>
        </div>

        <!-- Description -->
        <p class="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-3">
          {{ project.description }}
        </p>

        <!-- Link -->
        <a 
          :href="project.contentSource === 'External' ? project.externalLink : `#/work/${project.id}`"
          :target="project.contentSource === 'External' ? '_blank' : '_self'"
          class="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm group"
        >
          View Project
          <svg 
            class="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { getProjects } from '../utils/notion';

export default {
  name: 'Work',
  data() {
    return {
      projects: [],
      loading: true,
      error: null
    }
  },
  async created() {
    try {
      this.projects = await getProjects();
      this.loading = false;
    } catch (error) {
      console.error('Error:', error);
      this.error = 'Failed to load projects. Please try again later.';
      this.loading = false;
    }
  },
  methods: {
    formatDate(dateString) {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long'
      });
    },
    getPlaceholderImage(title) {
      return `https://placehold.co/400x400/f4f4f5/71717a?text=${encodeURIComponent(title || 'Project')}`;
    },
    handleImageError(e, title) {
      e.target.src = this.getPlaceholderImage(title);
    }
  }
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>