import { defu } from 'defu'
import zhHant from 'vuetify/lib/locale/zh-Hant'
import fontawesome from '~/data/fontawesome'
import overallSeasons from '~/data/overall-seasons'
import common from '~/assets/theme/common'
import season1 from '~/assets/theme/season1'
import season2 from '~/assets/theme/season2'
import kart15th from '~/assets/theme/kart15th'
import season3 from '~/assets/theme/season3'

export default function ({ route }) {
  const component = route.matched && route.matched.length ? route.matched[0].components : null
  const layout = component ? component.default.extendOptions.layout : null
  const themes = {
    season1,
    season2,
    kart15th,
    season3
  }
  const preferedTheme = layout ? themes[layout] : null
  const latestLayout = overallSeasons[0].code
  const theme = preferedTheme || themes[latestLayout]

  return {
    icons: fontawesome,
    lang: {
      locales: { zhHant },
      current: 'zhHant'
    },
    theme: {
      dark: false,
      options: {
        customProperties: true
      },
      ...defu(common, theme)
    }
  }
}
