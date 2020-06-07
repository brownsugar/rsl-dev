<template>
  <v-app>
    <v-app-bar
      clipped-left
      fixed
      app
    >
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <template v-for="(nav, i) in navs">
        <v-btn
          v-if="nav.hidden !== true"
          :key="i"
          active-class="primary"
          :to="nav.to"
          depressed
          exact
        >
          {{ nav.label }}
        </v-btn>
      </template>
    </v-app-bar>

    <v-content>
      <nuxt />
    </v-content>

    <v-footer
      padless
    >
      <v-row align="center" no-gutters>
        <v-col class="grow">
          &copy; 2020 <strong>RSL 賽事聯盟</strong><br>
          Design by <a href="https://brownsugar.tw">Brownsugar</a>.
        </v-col>
        <v-col>
          <strong class="subheading">現在就追蹤 RSL 賽事聯盟！</strong><br>
          <v-btn
            v-for="(social, i) in socials"
            :key="i"
            class="mx-3"
            :href="social.to"
            target="_blank"
            dark
            icon
          >
            <fa :icon="social.icon" />
          </v-btn>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'RSL 夢想盃跑跑聯賽',
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
          to: '/press'
        },
        {
          label: '關於 RSL',
          to: '/about'
        }
      ],
      socials: [
        {
          icon: ['fab', 'facebook'],
          to: 'https://www.facebook.com/RSLeagueTW'
        },
        {
          icon: ['fab', 'youtube'],
          to: 'https://www.youtube.com/channel/UCSXjGuAfR7XSVkPo7mvGacQ?sub_confirmation=1'
        },
        {
          icon: ['fab', 'twitch'],
          to: 'https://www.twitch.tv/rsleague'
        }
      ]
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
