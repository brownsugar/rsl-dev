export default function ({ route, redirect }) {
  const oldPaths = ['/news', '/contact', '/about']
  const matched = oldPaths.find(path => route.path.startsWith(path))
  if (matched) {
    redirect('/season2' + route.path)
  }
}
