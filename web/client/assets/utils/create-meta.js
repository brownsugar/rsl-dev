export default ({
  // config, site, route need to defined in head() to trigger changes
  // TODO: Fetch from Nuxt context
  config,
  site,
  route,
  staticPages,
  themeColor,
  ogImage,
  defaultTitle
} = {}) => {
  // Content is not pulled from server
  const isSingle = !staticPages.includes(route.name)

  const title = site.name
  const url = site.url + route.path
  const ogType = isSingle ? 'article' : 'website'
  const titleWithChunk = (chunk = defaultTitle) => chunk ? `${chunk} - ${title}` : title

  const metaInfo = {
    title: defaultTitle,
    titleTemplate: titleWithChunk,
    link: [
      { rel: 'alternate', type: 'application/rss+xml', title: config.rsl.name, href: site.rss2_url }
    ],
    meta: [
      { name: 'theme-color', content: themeColor },
      { name: 'apple-mobile-web-app-status-bar-style', content: themeColor },
      { name: 'author', content: config.rsl.name },
      { name: 'description', content: site.description, hid: 'description' },
      { property: 'publisher', content: config.rsl.facebook.url },
      { property: 'og:site_name', content: title },
      { property: 'og:title', template: titleWithChunk, hid: 'og:title' },
      { property: 'og:type', content: ogType, hid: 'og:type' },
      { property: 'og:url', content: url, hid: 'og:url' },
      { property: 'og:description', content: site.description, hid: 'og:description' },
      { property: 'og:image', content: ogImage, hid: 'og:image' }
    ]
  }
  if (isSingle) {
    metaInfo.meta.push({ property: 'article:author', content: config.rsl.facebook.url })
    metaInfo.meta.push({ property: 'article:publisher', content: config.rsl.facebook.url })
  }

  return metaInfo
}
