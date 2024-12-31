<template>
  <div class="post-content">
    <div class="metadata mb-8">
      <h1 class="text-4xl font-proxima mb-4">{{ title }}</h1>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <span class="text-gray-500">Published on</span>
          <div class="text-lg">{{ date }}</div>
        </div>
        <div>
          <span class="text-gray-500">Written by</span>
          <div class="text-lg">{{ author }}</div>
        </div>
      </div>
    </div>
    <div 
      class="prose prose-lg max-w-none"
      v-html="content"
    ></div>
  </div>
</template>

<script>
import { parseMarkdown, loadMarkdownFile } from '../utils/markdown'

export default {
  props: {
    markdownPath: {
      type: String,
      required: false
    },
    markdownContent: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      title: '',
      date: '',
      author: '',
      content: ''
    }
  },
  async mounted() {
    if (this.markdownPath) {
      const content = await loadMarkdownFile(this.markdownPath)
      this.content = content
    } else if (this.markdownContent) {
      this.content = parseMarkdown(this.markdownContent)
    }
  }
}
</script>