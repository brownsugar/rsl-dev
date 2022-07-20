<template>
  <v-app class="season-2">
    <app-bar
      :items="navItems"
      color="rgba(255, 255, 255, .7)"
      root-path="/season2"
      height="80"
      use-transparent
      use-blur
    />

    <nav-drawer
      :items="navItems"
      root-path="/season2"
    />

    <v-main
      :class="{
        'pt-0': isHome,
        'grey lighten-4': !isHome
      }"
    >
      <nuxt />
    </v-main>

    <page-footer
      root-path="/season2"
    />
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import AppBar from '~/components/layout/app-bar'
import NavDrawer from '~/components/layout/nav-drawer'
import PageFooter from '~/components/layout/footer'
import createMeta from '~/assets/utils/create-meta'

export default {
  components: {
    AppBar,
    NavDrawer,
    PageFooter
  },
  data: () => ({
    navItems: [
      {
        label: '首頁',
        to: '/season2'
      },
      {
        label: 'S2 聯賽資訊',
        children: [
          { label: '聯賽懶人包', to: '/season2/summary', note: '福利、賽程完全掌握！' },
          { label: '聯賽數據記錄', to: '/season2/stats' },
          { label: '聯賽規章', to: '/season2/rules' }
        ]
      },
      {
        label: '人氣王票選',
        to: '/season2/vote'
      },
      {
        label: '台韓服交流賽',
        to: '/season2/vs-korea'
      },
      {
        label: '最新消息',
        to: '/season2/news'
      },
      {
        label: '媒體報導',
        to: '/season2/press'
      },
      {
        label: '認識 RSL',
        children: [
          { label: '關於我們', to: '/season2/about' },
          { label: '聯絡我們', to: '/season2/contact' }
        ]
      }
    ]
  }),
  head () {
    const staticPages = [
      'season2',
      'season2-summary',
      'season2-stats',
      'season2-stats-tracks',
      'season2-stats-teams',
      'season2-stats-players',
      'season2-vote',
      'season2-vs-korea',
      'season2-news',
      'season2-about'
    ]
    const themeColor = '#272727'
    const ogImage = this.$config.rsl.cover.season2
    const defaultTitle = '夢想盃跑跑聯賽 Season 2'

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
      return this.$route.path === '/season2'
    }
  }
}
</script>

<style lang="scss">
.nuxt-progress {
  background-color: $s2-tertiary;
}
</style>
