import MarkdownIt from 'markdown-it'

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
})

export const parseMarkdown = (content) => {
  return md.render(content)
}

export const loadMarkdownFile = async (path) => {
  try {
    const response = await window.fs.readFile(path, { encoding: 'utf8' })
    return parseMarkdown(response)
  } catch (error) {
    console.error('Error loading markdown:', error)
    return ''
  }
}