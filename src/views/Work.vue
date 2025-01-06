<template>
  <section id="work" class="mb-16">
    <h2 class="text-2xl font-bold mb-4 font-proxima">Featured Projects</h2>
    <p class="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl">
      Here are some projects I've worked on. From product prototypes to design explorations, 
      each project represents a unique challenge and learning opportunity in my journey as a product person.
    </p>
    
    <div class="space-y-12">
      <div 
        v-for="project in projects" 
        :key="project.id" 
        class="max-w-2xl"
      >
        <!-- Title Section -->
        <h3 class="text-2xl font-medium mb-3">{{ project.title }}</h3>

        <!-- Centered Image -->
        <div class="flex justify-center mb-6">
          <img 
            :src="project.image" 
            :alt="project.title"
            class="w-[200px] h-[200px] object-cover rounded-lg"
          />
        </div>

        <!-- Category and Date -->
        <div class="flex items-center text-gray-500 text-sm mb-4">
          <span>{{ project.category }}</span>
          <span class="mx-2">•</span>
          <span>{{ project.date }}</span>
        </div>

        <!-- Description -->
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          {{ project.description }}
        </p>

        

        <!-- Links -->
        <div class="flex items-center space-x-6 mb-12">
          <router-link 
            v-if="!project.externalLink"
            :to="`/work/${project.slug}`"
            class="text-blue-600 hover:text-blue-800 flex items-center"
          >
            Read More
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </router-link>
          <a 
            v-if="project.externalLink"
            :href="project.externalLink"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-600 hover:text-blue-800 flex items-center"
          >
            View Project
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
          </a>
        </div>

        <!-- Divider -->
        <hr class="border-gray-200 mb-12"/>
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
          slug: 'playingforchange',
          title: "Playing For Change",
          category: "Video Game",
          image: "/public/images/projects/playingforchange-main.png",
          date: "August 2023",
          description: "A video-game based digital intervention to redcue aggression among the youth",
          externalLink: "https://risk-resilience.berkeley.edu/designing-a-game-to-prevent-aggression-and-promote-choice%e2%80%8b/"
        }
      ]
    }
  }
}
</script>