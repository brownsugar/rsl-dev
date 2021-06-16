export default function ({ route, redirect }) {
  const oldPaths = ['/news', '/contact', '/about']
  if (oldPaths.includes(route.path)) {
    redirect('/season2' + route.path)
  }
}
