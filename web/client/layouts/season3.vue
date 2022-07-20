<template>
  <v-app class="season-3">
    <app-bar
      :items="navItems"
      color="rgba(255, 255, 255, .7)"
      root-path="/season3"
      height="80"
      use-transparent
      use-dark
      use-blur
    />

    <nav-drawer
      :items="navItems"
      root-path="/season3"
    />

    <v-main
      :class="{
        'pt-0': isHome,
        'grey lighten-4': !isHome
      }"
    >
      <nuxt />
    </v-main>

    <layout-footer
      root-path="/season3"
    />
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import AppBar from '~/components/layout/app-bar'
import NavDrawer from '~/components/layout/nav-drawer'
import LayoutFooter from '~/components/common/footer'
import createMeta from '~/assets/utils/create-meta'

export default {
  components: {
    AppBar,
    NavDrawer,
    LayoutFooter
  },
  data: () => ({
    navItems: [
      {
        label: '首頁',
        to: '/season3'
      },
      {
        label: 'S3 聯賽資訊',
        badge: 'primary',
        children: [
          {
            label: '聯賽福利',
            to: '/season3/benefits',
            badge: 'primary'
          },
          {
            label: '聯賽數據記錄',
            to: '/season3/stats',
            note: 'Coming soon...',
            disabled: true
          },
          {
            label: '聯賽規章',
            to: '/season3/rules'
          }
        ]
      },
      {
        label: '人氣王票選',
        to: '/season3/vote'
      },
      {
        label: '最新消息',
        to: '/season3/news'
      },
      {
        label: '媒體報導',
        to: '/season3/press'
      },
      {
        label: '認識 RSL',
        children: [
          { label: '關於我們', to: '/season3/about' },
          { label: '聯絡我們', to: '/season3/contact' }
        ]
      }
    ]
  }),
  head () {
    const staticPages = [
      'season3',
      'season3-news',
      'season3-about'
    ]
    const themeColor = '#A0C6EF'
    const ogImage = this.$config.rsl.cover.season3
    const defaultTitle = '夢想盃跑跑聯賽 Season 3'

    return createMeta({
      config: this.$config,
      site: this.site,
      route: this.$route,
      staticPages,
      themeColor,
      ogImage,
      defaultTitle
    })
  },
  computed: {
    ...mapState([
      'site'
    ]),
    isHome () {
      return this.$route.path === '/season3'
    }
  }
}
</script>

<style lang="scss">
.nuxt-progress {
  background-color: var(--v-tertiary-base);
}
</style>
