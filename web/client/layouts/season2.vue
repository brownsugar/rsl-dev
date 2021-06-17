<template>
  <v-app class="season-2">
    <v-app-bar
      :class="{ transparent: appBarTransparent }"
      color="white"
      height="80"
      elevate-on-scroll
      fixed
    >
      <v-toolbar-title class="main-logo">
        <n-link to="/season2">
          <v-img
            src="~/assets/images/rsl/rsl-color-full.svg"
            width="95"
            :aspect-ratio="194 / 150"
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
            transition="slide-y-transition"
            open-on-hover
            offset-y
          >
            <template #activator="{ on, attrs }">
              <v-btn
                active-class="primary"
                :color="navChildIsActive(nav) ? 'primary' : ''"
                :to="nav.to"
                :exact="nav.to === '/season2' && $route.path !== '/season2'"
                :target="nav.blank ? '_blank' : ''"
                text
                nuxt
                v-bind="nav.children ? attrs : {}"
                v-on="nav.children ? on : {}"
              >
                {{ nav.label }}
                <fa
                  v-if="nav.blank"
                  class="ml-1"
                  :icon="['far', 'up-right-from-square']"
                  size="sm"
                />
                <fa
                  v-else-if="nav.children"
                  class="ml-1"
                  size="sm"
                  :icon="['fal', 'chevron-down']"
                />
              </v-btn>
            </template>
            <v-list v-if="nav.children">
              <v-list-item
                v-for="(item, j) in nav.children"
                :key="j"
                active-class="primary--text"
                :to="item.to"
                :target="item.blank ? '_blank' : ''"
                :disabled="item.disabled"
                nuxt
              >
                <v-list-item-content>
                  <v-list-item-title>
                    {{ item.label }}
                    <fa
                      v-if="item.blank"
                      class="ml-2"
                      :icon="['far', 'up-right-from-square']"
                      size="sm"
                    />
                  </v-list-item-title>
                  <v-list-item-subtitle
                    v-if="item.note"
                  >
                    {{ item.note }}
                  </v-list-item-subtitle>
                </v-list-item-content>
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
        <fa
          :icon="['far', 'bars']"
          size="lg"
        />
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
                active-class="primary--text"
                :to="item.to"
                :target="item.blank ? '_blank' : ''"
                :disabled="item.disabled"
                nuxt
              >
                <v-list-item-content>
                  <v-list-item-title>
                    {{ item.label }}
                    <fa
                      v-if="item.blank"
                      class="ml-2"
                      :icon="['far', 'up-right-from-square']"
                      size="sm"
                    />
                  </v-list-item-title>
                  <v-list-item-subtitle
                    v-if="item.note"
                  >
                    {{ item.note }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
            <v-list-item
              v-else
              :key="i"
              active-class="primary white--text"
              :to="nav.to"
              :target="nav.blank ? '_blank' : ''"
              :exact="nav.to === '/season2' && $route.path !== '/season2'"
              nuxt
            >
              <v-list-item-content>
                <v-list-item-title>
                  {{ nav.label }}
                  <fa
                    v-if="nav.blank"
                    class="ml-1"
                    :icon="['far', 'up-right-from-square']"
                    size="sm"
                  />
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-main
      :class="{
        'mt-app-bar': !isHome,
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
import LayoutFooter from '~/components/season2/footer'
import genarateMetaInfo from '~/assets/utils/meta'

export default {
  components: {
    LayoutFooter
  },
  data: () => ({
    scrollTop: 0,
    navs: [
      {
        label: '首頁',
        to: '/season2'
      },
      {
        label: 'S2 聯賽資訊',
        children: [
          { label: 'S2 聯賽規章', to: '/season2/rules' },
          { label: 'S2 聯賽懶人包', to: '/season2/summary', note: 'Coming soon!', disabled: true },
          { label: 'S2 賽道記錄榜', note: 'Coming soon!', to: '/season2/track-records', disabled: true },
          { label: '特別活動：台韓交流賽', note: 'Taiwan vs. Korea', to: '/season2/friendly-match', disabled: true }
        ]
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
      },
      {
        label: '往期聯賽',
        children: [
          { label: 'Season 1', to: '/season1', blank: true }
        ]
      }
    ],
    drawer: {
      visible: false
    }
  }),
  head () {
    const staticPages = ['season2', 'season2-summary', 'season2-news', 'season2-about']
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
    },
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
.transparent {
  background-color: rgba(#FFF, 0) !important;
  transition: background-color .2s linear;

  .main-logo {
    opacity: 0;
  }
}
.main-logo {
  transition: opacity .2s linear;
}
.mt-app-bar {
  margin-top: 80px;
}
</style>
