<template>
  <v-parallax
    id="about"
    :src="require('~/assets/images/common/background/drift.png')"
    :height="$breakpoint.is.smAndDown ? 600 : 500"
  >
    <v-container>
      <v-row justify="center">
        <v-col
          cols="12"
          md="3"
          lg="2"
        >
          <v-img
            class="mx-auto"
            src="~/assets/images/rsl/rsl-color-full.svg"
            :max-width="$breakpoint.is.smAndDown ? 200 : '100%'"
            eager
          />
        </v-col>
        <v-col
          cols="12"
          md="9"
          lg="8"
        >
          <h3 class="text-uppercase text-h6 text-md-h4">
            We are
          </h3>
          <h4 class="font-weight-bold yellow--text text-h4 text-md-h3">
            RE:START LEAGUE
          </h4>
          <div class="mt-2 text-md-h6">
            RSL 賽事聯盟，全名為「RE:START LEAGUE」，由三名兼具賽事舉辦經驗、玩家社群經營與遊戲領域影響力的核心玩家所組成。<br>
            我們致力於打造完善的電競聯賽環境、建立公平的賽事舞台，希望藉由 RSL 聯賽讓玩家重新燃起心目中的電競選手夢想。
          </div>
          <div class="actions mt-6">
            <v-btn
              class="v-btn--action"
              color="primary"
              to="/season1/about"
              :large="$breakpoint.is.smAndDown"
              :x-large="$breakpoint.is.mdAndUp"
              nuxt
            >
              認識 RSL 賽事聯盟
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-parallax>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss" scoped>
#about {
  @include parallax-cover() {
    background-image: linear-gradient(rgba(#000, .6) 40%, rgba(#000, .95) 100%);
  }
}
</style>
