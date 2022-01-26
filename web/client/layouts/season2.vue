<template>
  <v-app class="season-2">
    <app-bar
      :class="{ transparent: appBarTransparent }"
      :items="navItems"
      color="white"
      root-path="/season2"
      height="80"
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

    <layout-footer />
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import AppBar from '~/components/layout/app-bar'
import NavDrawer from '~/components/layout/nav-drawer'
import LayoutFooter from '~/components/season2/footer'
import genarateMetaInfo from '~/assets/utils/meta'

export default {
  components: {
    AppBar,
    NavDrawer,
    LayoutFooter
  },
  data: () => ({
    scrollTop: 0,
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
      'season2-stats-tracks',
      'season2-stats-teams',
      'season2-stats-players',
      'season2-vs-korea',
      'season2-news',
      'season2-about'
    ]
    const themeColor = '#272727'
    const ogImage = this.$config.rsl.cover.season2
    const defaultTitle = '夢想盃跑跑聯賽 Season 2'

    return genarateMetaInfo({
      vm: this,
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
    appBarTransparent () {
      return this.isHome && this.scrollTop === 0
    },
    isHome () {
      return this.$route.path === '/season2'
    }
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.scrollHandler)
  },
  mounted () {
    window.addEventListener('scroll', this.scrollHandler)
    this.scrollHandler()
  },
  methods: {
    scrollHandler () {
      this.scrollTop = window.scrollY
    }
  }
}
</script>

<style lang="scss">
.nuxt-progress {
  background-color: $s2-tertiary;
}
</style>
<style lang="scss" scoped>
.v-app-bar.app-bar {
  background-color: rgba(#FFF, .7) !important;
  backdrop-filter: blur(20px);
  transition: background-color .2s, backdrop-filter .2s;

  &.transparent {
    background-color: rgba(#FFF, 0) !important;
    backdrop-filter: blur(0);

    .main-logo {
      visibility: hidden;
      opacity: 0;
    }
  }
}
.main-logo {
  visibility: visible;
  transition: opacity .2s;
}
</style>
