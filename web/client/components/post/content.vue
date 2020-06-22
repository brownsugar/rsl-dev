<script>
import { config } from 'nuxt-config'
import { VImg } from 'vuetify/lib'

export default {
  functional: true,
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  render (h, ctx) {
    const render = {
      components: {
        VImg
      },
      template: `
        <div class="${ctx.data.class}">
          ${parse(ctx.props.content)}
        </div>
      `
    }
    return h(render)
  }
}
function parse (content) {
  const linkTagRegex = /<a(.*)href="([^"]+)"([^>]*)>(.+)<\/a>/ig
  const targetAttrRegex = /\s(?:target|rel)="[^"]+"/ig
  content = content.replace(
    linkTagRegex,
    (string, before, url, after, linkText) => {
      const site = config.rsl.url
      if (url.startsWith(site)) {
        // replace in-site link to nuxt link
        const path = url.replace(site, '')
        return '<n-link to="' + path + '">' + linkText + '</n-link>'
      } else {
        // replace external link's target
        after = after.replace(targetAttrRegex, '')
        return `<a${before}href="${url}"${after} target="_blank" rel="noopener noreferrer">${linkText}</a>`
      }
    }
  )
  // Fix: Mismatching childNodes vs. VNodes
  const imageTagRegex = /<p>(<a[^>]+>)?<img([^>]+)>(<\/a>)?<\/p>/ig
  content = content.replace(
    imageTagRegex,
    (string, linkTagStart = '', attrs, linkTagEnd = '') => {
      return `${linkTagStart}<v-img ${attrs.trim()}>${linkTagEnd}`
    }
  )
  return content
}
</script>
