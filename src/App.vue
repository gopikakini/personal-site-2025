<template>
  <div :class="['min-h-screen flex justify-center', isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900']">
    <div class="flex relative w-[70%] mt-32">
      <!-- Sidebar -->
      <nav class="w-48 fixed">
        <img 
          src="/public/images/profile/avatar.jpg" 
          alt="Profile" 
          class="w-24 h-24 rounded-full mb-6 object-cover"
        />
        
        <div class="mb-8">
          <router-link to="/" class="text-2xl font-bold font-proxima">Gopika</router-link>
        </div>
        
        <ul class="space-y-4 mb-8 font-proxima">
          <li><router-link to="/work" class="hover:text-gray-600">Work</router-link></li>
          <li><router-link to="/about" class="hover:text-gray-600">About</router-link></li>
          <li><router-link to="/writing" class="hover:text-gray-600">Writing</router-link></li>
        </ul>

        <!-- Updated Toggle Button -->
        <button 
          @click="toggleDarkMode"
          class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <span class="text-xl">
            {{ isDarkMode ? '☀️' : '🌙' }}
          </span>
        </button>
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