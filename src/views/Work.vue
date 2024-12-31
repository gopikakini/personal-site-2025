<template>
  <section id="work" class="mb-16">
    <h2 class="text-2xl font-bold mb-8 font-proxima">Featured Projects</h2>
    <div class="space-y-16">
      <div 
        v-for="project in projects" 
        :key="project.id" 
        class="group cursor-pointer max-w-2xl"
        @click="goToProject(project.slug)"
      >
        <div class="relative overflow-hidden">
          <img 
            :src="project.image" 
            :alt="project.title"
            class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div class="mt-4">
          <span class="text-sm text-gray-500">{{ project.category }}</span>
          <h3 class="text-xl font-medium mt-1">{{ project.title }}</h3>
          <span class="text-sm text-gray-500">{{ project.date }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          slug: 'japandi',  // This should match your markdown filename
          title: "Japandi interior design",
          category: "Spaces",
          image: "https://placehold.co/800x400",
          date: "February 2, 2023"
        }
      ]
    }
  },
  methods: {
    goToProject(slug) {
      this.$router.push(`/work/${slug}`)
    }
  }
}
</script>