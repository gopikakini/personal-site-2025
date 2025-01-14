<template>
  <div class="min-h-screen flex items-center justify-center p-8">
    <div class="relative">
      <!-- Profile Image -->
      <div class="absolute -left-32 top-0">
        <img 
          src="/public/images/profile/avatar.jpg" 
          alt="Profile" 
          class="w-24 h-24 rounded-full object-cover"
        />
      </div>

      <!-- Text Content -->
      <div>
        <!-- Header -->
        <h1 class="text-4xl font-playfair font-bold mb-4">
          Hey, I'm Gopika 👋
        </h1>
        <p class="text-xl text-gray-700 leading-relaxed font-lato italic mb-6">
          I am a Product Manager based in San Francisco, curious about exploring how technology shapes and impacts the way we live, work, and connect.
        </p>

        <!-- Main Content -->
        <div class="space-y-6 mb-6">
          <p class="text-lg text-gray-700 leading-relaxed font-lato">
            I've held Product and Engineering roles across B2B and B2C, currently building driver safety solutions at SiriusXM Connect. Previously, I was a Software Engineer at MicroFocus/OpenText, developing enterprise monitoring tools.
          </p>

          <p class="text-lg text-gray-700 leading-relaxed font-lato">
            I enjoy building side projects from concept to completion. Here's what I've 
            <router-link to="/work" class="text-blue-600 hover:text-blue-800 border-b border-transparent hover:border-blue-800 transition-colors">
              created
            </router-link>.
          </p>

          <p class="text-lg text-gray-700 leading-relaxed font-lato">
            Interested in discussing AI agents, Developer tools, EdTech, Automotive, or tech for non-profits? Let's connect.
          </p>
        </div>

        <!-- Social Links -->
        <div class="flex items-center space-x-6">
          <a 
            href="https://linkedin.com/in/your-profile" 
            target="_blank"
            rel="noopener noreferrer" 
            class="text-blue-600 hover:text-blue-800 border-b border-transparent hover:border-blue-800 transition-colors"
          >
            LinkedIn
          </a>
          <router-link 
            to="/writing" 
            class="text-blue-600 hover:text-blue-800 border-b border-transparent hover:border-blue-800 transition-colors"
          >
            Writing
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&display=swap');

.font-playfair {
  font-family: 'Playfair Display', serif;
}

.font-lato {
  font-family: 'Lato', sans-serif;
}
</style>
