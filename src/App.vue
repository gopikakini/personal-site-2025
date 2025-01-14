<template>
  <div :class="['min-h-screen flex justify-center', isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900']">
    <div class="flex relative w-[70%] mt-32">
   
    <!-- Top Navigation -->
    <nav class="fixed top-0 right-0 py-6 px-8">
      <ul class="flex space-x-8">
        <li><router-link to="/" class="font-lato text-gray-800 hover:text-blue-600">Home</router-link></li>
        <li><router-link to="/work" class="font-lato text-gray-800 hover:text-blue-600">Work</router-link></li>
        <li><router-link to="/writing" class="font-lato text-gray-800 hover:text-blue-600">Writing</router-link></li>
      </ul>
    </nav>


       
      <!-- Main Content -->
      <main class="ml-56 flex-1">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false
    }
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      // Also update the class on the document root for dark mode
      document.documentElement.classList.toggle('dark', this.isDarkMode);
    }
  },
  mounted() {
    // Initialize dark mode based on system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.isDarkMode = prefersDark;
    document.documentElement.classList.toggle('dark', prefersDark);
  }
}
</script>