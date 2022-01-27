<template>
  <v-footer
    color="grey darken-4"
    padless
  >
    <v-container>
      <v-row class="px-4 px-md-0 py-12">
        <v-col
          offset-lg="1"
          offset-xl="2"
          cols="12"
          md="6"
          lg="5"
          xl="4"
        >
          <h5 class="text-h6 font-weight-bold mb-6">
            <n-link
              class="white--text text-decoration-none hover-color"
              to="/season2/about"
            >
              關於 RSL 賽事聯盟
              <fa
                class="ml-1"
                icon="fa-solid fa-right"
              />
            </n-link>
          </h5>
          <v-img
            class="mb-6"
            src="~/assets/images/rsl/rsl-color-full.svg"
            max-width="120"
          />
          <p class="grey--text text--lighten-3 text-body-1 mb-0">
            RSL 賽事聯盟，全名為「RE:START LEAGUE」，由三名兼具賽事舉辦經驗、玩家社群經營與遊戲領域影響力的核心玩家所組成。<br>
            我們致力於打造完善的電競聯賽環境、建立公平的賽事舞台，希望藉由 RSL 聯賽讓玩家重新燃起心目中的電競選手夢想。
          </p>
        </v-col>
        <v-col
          class="mt-4 mt-md-0"
          offset-md="1"
          cols="12"
          md="4"
          lg="3"
          xl="2"
        >
          <h5 class="text-h6 white--text font-weight-bold mb-6">
            追蹤 RSL 賽事聯盟
          </h5>
          <div
            v-for="(social, i) in socials"
            :key="social.brand"
            :class="{ 'mb-3': i < socials.length - 1 }"
          >
            <v-btn
              :color="social.brand"
              :href="$config.rsl[social.brand].url"
              target="_blank"
              rel="noreferrer noopener"
              depressed
              large
              dark
            >
              <fa
                class="mr-2"
                :icon="['fa-brands', social.brand]"
                size="lg"
              />
              {{ social.action }}
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <v-divider class="grey darken-3" />
      <v-row class="py-4">
        <v-col class="text-center grey--text">
          <span>&copy; 2020-2021 <strong>RE:START League</strong></span>
          <span class="mx-2 d-none d-sm-inline">|</span>
          <span class="d-block d-sm-inline mt-1 mt-sm-0">
            Design by
            <a
              class="white--text text-decoration-none hover-color"
              href="https://brownsugar.tw"
              target="_blank"
              rel="noreferrer noopener"
            >
              Brownsugar
              <fa
                icon="fa-regular fa-up-right-from-square"
                size="sm"
              />
            </a>
            <span class="ml-2">|</span>
            <v-btn
              href="https://github.com/brownsugar/rsl-dev"
              target="_blank"
              rel="noreferrer noopener"
              x-small
              text
              dark
            >
              <fa
                class="mr-1"
                icon="fa-brands fa-github"
                size="lg"
              />
              GitHub
            </v-btn>
          </span>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    socials: [
      {
        brand: 'facebook',
        action: '追蹤 Facebook 專頁'
      },
      {
        brand: 'twitch',
        action: '追蹤 Twitch 頻道'
      },
      {
        brand: 'youtube',
        action: '訂閱 YouTube 頻道'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.hover-color {

  &:hover {
    color: $s2-tertiary !important;
  }
}
</style>
