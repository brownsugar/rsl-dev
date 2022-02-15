<template>
  <v-app class="kart-15th">
    <app-bar
      :class="{ transparent: appBarTransparent }"
      :items="navItems"
      color="rgba(10, 0, 38, .85)"
      root-path="/kart15th"
      height="60"
      use-transparent
      use-blur
    />

    <nav-drawer
      :items="navItems"
      root-path="/kart15th"
    />

    <v-main
      :class="{
        'pt-0': isHome
      }"
    >
      <nuxt />
    </v-main>

    <layout-footer />
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import AppBar from '~/components/layout/app-bar'
import NavDrawer from '~/components/layout/nav-drawer'
import LayoutFooter from '~/components/kart15th/footer'
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
        to: '/kart15th'
      },
      {
        label: '賽事規章',
        to: '/kart15th/rules'
      },
      {
        label: '賽事數據記錄',
        to: '/kart15th/stats'
      },
      {
        label: '最新消息',
        to: '/kart15th/news'
      },
      {
        label: '認識 RSL',
        children: [
          { label: '關於我們', to: '/kart15th/about' },
          { label: '聯絡我們', to: '/kart15th/contact' }
        ]
      }
    ]
  }),
  head () {
    const staticPages = [
      'kart15th',
      'kart15th-stats-tracks',
      'kart15th-stats-players',
      'kart15th-news',
      'kart15th-about'
    ]
    const themeColor = '#0A0026'
    const ogImage = this.$config.rsl.cover.kart15th
    const defaultTitle = '跑跑 15 周年經典個人賽'

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
      return this.$route.path === '/kart15th'
    }
  }
}
</script>

<style lang="scss">
.nuxt-progress {
  background-color: var(--v-secondary-base);
}
</style>
