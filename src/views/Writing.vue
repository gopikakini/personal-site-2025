<template>
  <section id="writing" class="mb-16">
    <h2 class="text-2xl font-bold mb-8 font-proxima">Writing</h2>
   <p class="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl">
     Lately, I've been pushing myself to write — my opinions, lessons from school and work (and life?),
      and takes on the internet's curiosities. Here’s my attempt to make sense of the 
      million thoughts swirling in my head.
    </p>
   
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
          title: "Product Teardown | Yoodli",
          excerpt: "An AI communication coach",
          date: "June 12, 2024",
          platform: "Substack",
          externalLink: "https://gopikak.substack.com/p/can-ai-help-you-improve-your-next?r=3z51pd",
          isExternal: true
        },
        {
          id: 2,
          title: "Who owns AI-generated creativity",
          excerpt: "Gen AI has enabled more and more people to create, but what is the deal with ownership of AI generated content",
          date: "Feb 21, 2024",
          platform: "Medium",
          externalLink: "https://medium.com/@gopika1697/gen-ai-who-is-the-rightful-owner-pt-1-58dec12be52d",
          isExternal: true
        },
        {
          id: 3,
          title: "Network Effects : Explosive growth of social platforms",
          excerpt: "The value of a social media platform comes from its network, and this can be explained by Network Effects",
          date: "Feb 5, 2024",
          platform: "Medium",
          externalLink: "https://medium.com/@gopika1697/network-effects-explosive-growth-of-platforms-829b2490c2c7",
          isExternal: true
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