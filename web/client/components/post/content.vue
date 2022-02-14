<script>
import { config } from 'nuxt-config'
import { VImg, VSimpleTable, VLazy } from 'vuetify/lib'

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
        VImg,
        VSimpleTable,
        VLazy
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
  // Replace links with nuxt link / external link
  const linkTagRegex = /<a(.*)href="([^"]+)"([^>]*)>(.+)<\/a>/ig
  const targetAttrRegex = /\s(?:target|rel)="[^"]+"/ig
  content = content.replace(
    linkTagRegex,
    (string, before, url, after, linkText) => {
      const site = config.rsl.url
      if (url.startsWith(site)) {
        // replace in-site link with nuxt link
        const path = url.replace(site, '')
        return '<n-link to="' + path + '">' + linkText + '</n-link>'
      } else {
        // replace external link's target
        after = after.replace(targetAttrRegex, '')
        return `<a${before}href="${url}"${after} target="_blank" rel="noopener noreferrer">${linkText}</a>`
      }
    }
  )

  // Replace <img> tag with <v-img>
  // <p> = Fix "Mismatching childNodes vs. VNodes"
  const imageTagRegex = /<p>(<a[^>]*>)?<img([^>]+)>(<\/a>)?<\/p>/ig
  content = content.replace(
    imageTagRegex,
    (string, linkTagStart = '', attrs, linkTagEnd = '') => {
      attrs = attrs.trim().endsWith('/') ? attrs : attrs + ' /'
      return `${linkTagStart}<v-img ${attrs}>${linkTagEnd}`
    }
  )

  // Replace <table> tag with <v-simple-table>
  const tableTagStartRegex = /<table[^>]*>/ig
  const tableTagEndRegex = /<\/table>/ig
  content = content.replace(tableTagStartRegex, '<v-simple-table>')
  content = content.replace(tableTagEndRegex, '</v-simple-table>')

  // Wrap <iframe> width <v-lazy>
  // <p> = Fix "Mismatching childNodes vs. VNodes"
  const iframeTagRegex = /(?:<p>\s*)?(<iframe[^>]*><\/iframe>)(?:\s*<\/p>)?/ig
  content = content.replace(
    iframeTagRegex,
    (string, iframe) => `<v-lazy>${iframe}</v-lazy>`
  )

  // Replace <hr> tag with <v-divider>
  const hrTagRegex = /<hr[^>]*>/ig
  content = content.replace(hrTagRegex, '<v-divider />')

  return content
}
</script>
