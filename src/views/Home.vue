<template>
  <section class="home-content">
    <!-- Wrap content in transition group -->
    <TransitionGroup 
      appear
      @before-enter="beforeEnter"
      @enter="enter"
    >
      <!-- Introduction -->
      <h1 
        key="heading"
        class="text-4xl font-bitter text-black mb-8 leading-relaxed transition-item"
      >
        Hi👋 I'm Gopika, a Product Manager based in San Francisco.
      </h1>
      
      <h4 
        key="subheading"
        class="text-xl text-gray-600 italic mb-12 font-proxima transition-item"
      >
        I am passionate about exploring human-technology relationship and
        its impact on the way we live, work, and connect.
      </h4>

      <!-- Professional Background -->
      <div key="background" class="space-y-4 text-lg mb-12 transition-item">
        <p class="flex items-start">
          <span class="mr-2">•</span>
         Currently, I am working on creating driver safety solution at SiriusXM Connect 🚙. 
         Previously, I was at HPE as a Software Engineer - building Network Monitoring tools.
        
        </p>
        <p class="flex items-start">
          <span class="mr-2">•</span>
          I graduated from UC Berkeley where I studied Information Systems, AI & Entrepreneurship 🐻. 
          <span class="ml-2"</span>
        </p>
      </div>

      <!-- More About Me Section -->
      <div key="about" class="transition-item">
      <h3 class="text-2xl font-bitter text-black mb-6">More about me</h3>
      <div class="space-y-4 text-lg">
        <p class="flex items-start">
          <span class="mr-2">•</span>
          <span>
            I enjoy building 0-to-1 products — taking abstract ideas to prototypes. Here are some
            <router-link to="/work" class="text-blue-600 hover:underline inline-flex">
             side projects 
            </router-link> 
            I have been working on.
          </span>
        </p>
        <p class="flex items-start">
          <span class="mr-2">•</span>
          <span>
            Along the way, I write my thoughts and everything I learn  
            <router-link to="/writing" class="text-blue-600 hover:underline inline-flex">
               here.
            </router-link>
          </span>
        </p>
         <p class="flex items-start">
          <span class="mr-2">•</span>
          <span>When not working, I box 🥊, play badminton, workout 🤸‍♀️, hike 🏔.</span>
        </p>
      </div>
    </div>
      <!-- Social Links with added bottom margin -->
    <div class="flex space-x-6 mt-12 mb-16"> <!-- Added margin bottom -->
      <a href="#" class="text-gray-600 hover:text-gray-900 transition-colors">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      </a>
      <a href="#" class="text-gray-600 hover:text-gray-900 transition-colors">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      </a>
    </div>
    </TransitionGroup>
  </section>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    beforeEnter(el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
    },
    enter(el, done) {
      // Get all transition items
      const items = document.querySelectorAll('.transition-item');
      
      // Animate each item with a delay
      items.forEach((item, index) => {
        setTimeout(() => {
          item.style.transition = 'all 0.8s ease';
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, index * 200); // 200ms delay between each item
      });
    }
  }
}
</script>

<style scoped>
.home-content {
  max-width: 800px;
}

.transition-item {
  opacity: 0;
  transform: translateY(30px);
}

a {
  text-decoration: none;
}
</style>