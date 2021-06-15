<template>
  <v-app class="season-1">
    <v-app-bar
      dark
      fixed
      app
    >
      <v-toolbar-title>
        <n-link to="/">
          <v-img
            src="~/assets/images/rsl/rsl-color-dark.svg"
            width="100"
            :title="site.name"
          />
        </n-link>
      </v-toolbar-title>
      <v-spacer />
      <div class="d-none d-md-flex">
        <template v-for="(nav, i) in navs">
          <v-menu
            v-if="nav.hidden !== true"
            :key="i"
          >
            <template #activator="{ on, attrs }">
              <v-btn
                :color="navChildIsActive(nav) ? 'primary' : ''"
                active-class="primary"
                :to="nav.to"
                :exact="nav.to === '/season1' && $route.path !== '/season1'"
                depressed
                nuxt
                v-bind="attrs"
                v-on="on"
              >
                {{ nav.label }}
              </v-btn>
            </template>
            <v-list v-if="nav.children">
              <v-list-item
                v-for="(item, j) in nav.children"
                :key="j"
                :to="item.to"
                nuxt
              >
                <v-list-item-title>{{ item.label }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </div>
      <v-btn
        class="d-inline-flex d-md-none"
        depressed
        icon
        @click="drawer.visible = true"
      >
        <fa :icon="['far', 'bars']" />
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer.visible"
      temporary
      app
    >
      <v-list dense>
        <template v-for="(nav, i) in navs">
          <template v-if="nav.hidden !== true">
            <v-list-group
              v-if="nav.children"
              :key="i"
              :value="navChildIsActive(nav)"
            >
              <template #activator>
                <v-list-item-content>
                  <v-list-item-title>{{ nav.label }}</v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item
                v-for="(item, j) in nav.children"
                :key="j"
                :to="item.to"
                nuxt
              >
                <v-list-item-title>{{ item.label }}</v-list-item-title>
              </v-list-item>
            </v-list-group>
            <v-list-item
              v-else
              :key="i"
              active-class="primary"
              :to="nav.to"
              :exact="nav.to === '/season1' && $route.path !== '/season1'"
              nuxt
            >
              <v-list-item-content>
                <v-list-item-title>{{ nav.label }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-main class="grey lighten-4">
      <nuxt />
    </v-main>

    <v-footer padless>
      <v-card
        class="grey darken-4 fill-width text-center"
        flat
        dark
      >
        <v-card-title class="justify-center d-block d-md-flex">
          <div class="text-body-1 mb-1 mb-md-0 mr-md-6">
            現在就追蹤 RSL 賽事聯盟！
          </div>
          <v-tooltip
            v-for="(social, i) in socials"
            :key="i"
            top
          >
            <template #activator="{ on, attrs }">
              <v-btn
                class="mx-2"
                :color="social.brand"
                :href="social.to"
                target="_blank"
                large
                icon
                v-bind="attrs"
                v-on="on"
              >
                <fa
                  :icon="['fab', social.brand]"
                  size="lg"
                />
              </v-btn>
            </template>
            <span>{{ social.tooltip }}</span>
          </v-tooltip>
        </v-card-title>
        <v-divider />
        <v-card-text>
          &copy; 2020 <strong>RE:START League</strong>
          <span class="divider">|</span>
          Design by <a class="white--text" href="https://brownsugar.tw" target="_blank">Brownsugar</a>
          <v-btn
            href="https://github.com/brownsugar/rsl-dev"
            target="_blank"
            x-small
            icon
          >
            <fa
              :icon="['fab', 'github']"
              size="lg"
            />
          </v-btn>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import genarateMetaInfo from '~/assets/utils/meta'

export default {
  data () {
    return {
      navs: [
        {
          label: '首頁',
          to: '/season1'
        },
        {
          label: '最新消息',
          to: '/season1/news'
        },
        {
          label: 'S1 賽季規章',
          to: '/season1/rules'
        },
        {
          label: '隊伍列表',
          to: '/season1/teams',
          hidden: true
        },
        {
          label: '媒體報導',
          to: '/season1/press',
          hidden: true
        },
        {
          label: '認識 RSL',
          children: [
            { label: '關於我們', to: '/season1/about' },
            { label: '聯絡我們', to: '/season1/contact' }
          ]
        }
      ],
      drawer: {
        visible: false
      },
      socials: [
        {
          brand: 'facebook',
          to: this.$config.rsl.facebook.url,
          tooltip: '@' + this.$config.rsl.facebook.username
        },
        {
          brand: 'youtube',
          to: this.$config.rsl.youtube.url,
          tooltip: '@' + this.$config.rsl.youtube.username
        },
        {
          brand: 'twitch',
          to: this.$config.rsl.twitch.url,
          tooltip: '@' + this.$config.rsl.twitch.username
        }
      ]
    }
  },
  head () {
    const staticPages = ['season1', 'season1-news', 'season1-about']
    const themeColor = '#272727'
    const ogImage = this.$config.rsl.cover.season1
    const defaultTitle = '夢想盃跑跑聯賽 Season 1'

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
    ])
  },
  methods: {
    navChildIsActive (nav) {
      if (nav.children && Array.isArray(nav.children)) {
        return nav.children.some(item => item.to === this.$route.path)
      }
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
.v-app-bar {

  .v-btn--active::before {
    opacity: 0 !important;
  }
}
</style>
