<template>
  <v-parallax
    id="banner"
    :src="require('~/assets/images/common/background/race.png')"
    height="900"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col cols="8">
        <h1 class="title mb-2">
          RE:START KARTRIDER LEAGUE <span class="yellow--text">SEASON 1</span>
        </h1>
        <h2 class="display-3 font-weight-bold">
          重啟<span class="primary--text">夢想</span>，<br>
          重燃<span class="primary--text">渴望</span>。
        </h2>
        <p class="mt-3">
          2020 夏天，RSL 夢想盃跑跑聯賽將重新燃燒你的電競魂。<br>
          總獎金高達新臺幣 60,000 元，還有各式高級電競週邊獎品，還在等什麼？
        </p>
        <v-btn
          class="v-btn--action mt-5"
          color="primary"
          depressed
          large
          @click="$vuetify.goTo('#league')"
        >
          6/19 開始報名
        </v-btn>
      </v-col>
    </v-row>
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
