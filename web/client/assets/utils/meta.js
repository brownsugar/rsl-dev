const genarateMetaInfo = ({ vm, staticPages, themeColor, ogImage, defaultTitle }) => {
  // Content is not pulled from server
  const isSingle = !staticPages.includes(vm.$route.name)

  const title = vm.site.name
  const url = vm.site.url + vm.$route.path
  const ogType = isSingle ? 'article' : 'website'
  const titleWithChunk = (chunk = defaultTitle) => chunk ? `${chunk} - ${title}` : title

  const metaInfo = {
    title: defaultTitle,
    titleTemplate: titleWithChunk,
    link: [
      { rel: 'alternate', type: 'application/rss+xml', title: vm.$config.rsl.name, href: vm.site.rss2_url }
    ],
    meta: [
      { name: 'theme-color', content: themeColor },
      { name: 'apple-mobile-web-app-status-bar-style', content: themeColor },
      { property: 'publisher', content: vm.$config.rsl.facebook.url },
      { name: 'author', content: vm.$config.rsl.name },
      { property: 'og:site_name', content: title },
      { property: 'og:title', template: titleWithChunk, hid: 'og:title' },
      { property: 'og:type', content: ogType, hid: 'og:type' },
      { property: 'og:url', content: url, hid: 'og:url' },
      { property: 'og:description', content: vm.site.description, hid: 'og:description' },
      { property: 'description', content: vm.site.description, hid: 'description' },
      { property: 'og:image', content: ogImage, hid: 'og:image' }
    ]
  }
  if (isSingle) {
    metaInfo.meta.push({ property: 'article:author', content: vm.$config.rsl.facebook.url })
    metaInfo.meta.push({ property: 'article:publisher', content: vm.$config.rsl.facebook.url })
  }

  return metaInfo
}

export default genarateMetaInfo
