<template>
  <div class="max-w-2xl">
    <!-- Loading State -->
    <div v-if="loading" class="text-gray-600">
      Loading project...
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="text-red-600">
      {{ error }}
    </div>

    <!-- Project Content -->
    <div v-else class="space-y-6">
      <h1 class="text-3xl font-bold mb-4">{{ project.title }}</h1>
      
      <div class="flex items-center text-sm text-gray-500 mb-6">
        <span>{{ project.category }}</span>
        <span class="mx-2">•</span>
        <span>{{ formatDate(project.date) }}</span>
      </div>

      <!-- Project Content -->
      <div class="prose prose-lg max-w-none">
        <p v-for="(block, index) in project.content" 
           :key="index"
           class="mb-4">
          {{ block }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      project: null,
      loading: true,
      error: null
    }
  },
  async created() {
    try {
      const response = await fetch(`http://localhost:3000/api/projects/${this.$route.params.id}`);
      if (!response.ok) throw new Error('Failed to fetch project');
      
      const data = await response.json();
      this.project = {
        title: data.properties.Title.title[0].plain_text,
        category: data.properties.Category.select.name,
        date: data.properties.Date.date.start,
        content: data.content
      };
      this.loading = false;
    } catch (error) {
      console.error('Error:', error);
      this.error = 'Failed to load project';
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