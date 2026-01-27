import { visit } from 'unist-util-visit'
import type { Plugin } from 'unified'

const tokenRegex = /!\[\[([^\]]+)\]\]|==([^=]+)==/g

const remarkObsidian: Plugin = () => (tree) => {
  visit(tree, 'text', (node: any, index: number | null, parent: any) => {
    if (!parent || typeof index !== 'number') {
      return
    }

    const value = node.value as string
    if (!value || (!value.includes('==') && !value.includes('![['))) {
      return
    }

    const parts = []
    let lastIndex = 0
    let match: RegExpExecArray | null = null
    const matcher = new RegExp(tokenRegex)

    while ((match = matcher.exec(value)) !== null) {
      if (match.index > lastIndex) {
        parts.push({ type: 'text', value: value.slice(lastIndex, match.index) })
      }

      if (match[1]) {
        const raw = match[1].trim()
        const url =
          /^https?:/i.test(raw) || raw.includes('/') ? raw : `attachments/${raw}`
        parts.push({ type: 'image', url, alt: raw })
      } else if (match[2]) {
        parts.push({ type: 'html', value: `<mark>${match[2]}</mark>` })
      }

      lastIndex = match.index + match[0].length
    }

    if (lastIndex < value.length) {
      parts.push({ type: 'text', value: value.slice(lastIndex) })
    }

    if (parts.length > 0) {
      parent.children.splice(index, 1, ...parts)
      return index + parts.length
    }
  })

  visit(tree, 'blockquote', (node: any) => {
    const firstParagraph = node.children?.[0]
    const firstChild = firstParagraph?.children?.[0]

    if (!firstParagraph || firstParagraph.type !== 'paragraph' || !firstChild) {
      return
    }

    if (firstChild.type !== 'text') {
      return
    }

    const match = (firstChild.value as string).match(/^\[!(\w+)\]\s*/i)
    if (!match) {
      return
    }

    const type = match[1].toLowerCase()
    const label = `${type.charAt(0).toUpperCase()}${type.slice(1)}: `

    firstChild.value = (firstChild.value as string).replace(/^\[!(\w+)\]\s*/i, '')
    firstParagraph.children.unshift({
      type: 'strong',
      children: [{ type: 'text', value: label }],
    })

    node.data = node.data ?? {}
    node.data.hProperties = {
      ...(node.data.hProperties ?? {}),
      className: ['note-callout', `note-callout-${type}`],
    }
  })
}

export default remarkObsidian
