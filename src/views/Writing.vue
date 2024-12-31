<template>
  <section id="writing" class="mb-16">
    <h2 class="text-2xl font-bold mb-8 font-proxima">Latest Writing</h2>
    <div class="space-y-8 max-w-2xl">
      <article 
        v-for="post in posts" 
        :key="post.id" 
        class="border-b border-gray-200 pb-8 cursor-pointer"
        @click="openPost(post)"
      >
        <h3 class="text-xl font-medium mb-2">{{ post.title }}</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-4">
          {{ post.excerpt }}
        </p>
        <div class="flex items-center justify-between">
          <span class="text-sm text-gray-500">{{ post.date }}</span>
          <span class="text-sm text-gray-500 flex items-center">
            {{ post.platform }}
            <svg v-if="post.externalLink" class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </span>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "Understanding Design Systems",
          excerpt: "An exploration of how design systems can streamline the development process...",
          date: "March 1, 2024",
          platform: "Medium",
          externalLink: "https://medium.com/your-article",
          isExternal: true
        },
        {
          id: 2,
          title: "Local Markdown Post",
          excerpt: "This post is written in markdown and hosted locally...",
          date: "March 2, 2024",
          content: "path-to-markdown-file.md",
          isExternal: false
        }
      ]
    }
  },
  methods: {
    openPost(post) {
      if (post.isExternal) {
        window.open(post.externalLink, '_blank')
      } else {
        this.$router.push(`/writing/${post.id}`)
      }
    }
  }
}
</script>