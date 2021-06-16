<template>
  <v-parallax
    id="banner"
    :key="$breakpoint.is.smAndDown"
    :src="require('~/assets/images/common/background/race.png')"
    :height="$breakpoint.is.smAndDown ? 700 : 900"
  >
    <v-container fluid>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          md="10"
          lg="8"
        >
          <h1 class="text-h6 mb-2">
            RE:START KARTRIDER LEAGUE<br class="d-sm-none">
            <span class="yellow--text">SEASON 1</span>
          </h1>
          <h2 class="font-weight-bold text-h3 text-sm-h2">
            重啟<span class="primary--text">夢想</span>，<br>
            重燃<span class="primary--text">渴望</span>。
          </h2>
          <p class="mt-4">
            2020 夏天，RSL 夢想盃跑跑聯賽即將重新燃燒你的電競魂。<br>
            總獎金高達新臺幣 60,000 元，還有豐富的遊戲道具獎勵及專業電競週邊，你還在等什麼？
          </p>
          <v-btn
            class="v-btn--action mt-5"
            color="primary"
            depressed
            large
            @click="$vuetify.goTo('#league')"
          >
            S1 賽季正式開打
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-parallax>
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<style lang="scss" scoped>
#banner {
  @include parallax-cover() {
    background-image: image('common/background/dark-cover.png');
  }
}
</style>
