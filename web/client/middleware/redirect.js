import overallSeasons from '~/data/overall-seasons'

const redirects = [
  (route) => {
    // Old page paths
    const oldPaths = ['/news', '/contact', '/about']
    const matched = oldPaths.find(path => route.path.startsWith(path))
    if (matched) {
      return '/' + overallSeasons[0].code + route.path
    }
    return null
  },
  (route) => {
    // Slugs for WP pages
    const wpSlugPattern = /season\d-(.+)/
    const matched = wpSlugPattern.test(route.path)
    if (matched) {
      return route.path.replace(/-/g, '/')
    }
    return null
  }
]

export default function ({ route, redirect }) {
  redirects.some((redirect) => {
    const path = redirect(route)
    if (path) {
      return redirect({
        path,
        query: route.query
      })
    }
    return false
  })
}
