import season1 from '~/assets/theme/season1'
import season2 from '~/assets/theme/season2'

export default function ({ route }) {
  const component = route.matched && route.matched.length ? route.matched[0].components : null
  const layout = component ? component.default.extendOptions.layout : null
  const themes = {
    season1,
    season2
  }
  const preferTheme = layout ? themes[layout] : null
  const theme = preferTheme || season1

  return {
    theme: {
      dark: false,
      options: {
        customProperties: true
      },
      ...theme
    }
  }
}
