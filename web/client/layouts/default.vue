<template>
  <v-app>
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
      <template v-for="(nav, i) in navs">
        <v-btn
          v-if="nav.hidden !== true"
          :key="i"
          active-class="primary"
          :to="nav.to"
          depressed
          :exact="nav.to === '/'"
          nuxt
        >
          {{ nav.label }}
        </v-btn>
      </template>
    </v-app-bar>

    <v-content class="grey lighten-4">
      <nuxt />
    </v-content>

    <v-footer padless>
      <v-card
        class="grey darken-4 fill-width text-center"
        flat
        dark
      >
        <v-card-title class="justify-center">
          <strong class="body-1 mr-6">現在就追蹤 RSL 賽事聯盟！</strong>
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

export default {
  data () {
    return {
      navs: [
        {
          label: '首頁',
          to: '/'
        },
        {
          label: '最新消息',
          to: '/news'
        },
        {
          label: 'S1 賽季資訊',
          to: '/season1'
        },
        {
          label: '隊伍列表',
          to: '/teams',
          hidden: true
        },
        {
          label: '媒體報導',
          to: '/press',
          hidden: true
        },
        {
          label: '關於 RSL',
          to: '/about'
        }
      ],
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
  computed: {
    ...mapState([
      'site'
    ])
  },
  head () {
    return {
      titleTemplate: (titleChunk) => {
        const title = this.site.name
        return titleChunk ? `${titleChunk} - ${title}` : title
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.v-app-bar {
  .v-btn--active:before {
    opacity: 0 !important;
  }
}
</style>
