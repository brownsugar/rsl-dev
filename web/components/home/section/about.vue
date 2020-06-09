<template>
  <v-parallax
    id="about"
    :src="require('~/assets/images/home/background/drift.png')"
    height="500"
  >
    <v-container>
      <v-row justify="center">
        <v-col cols="2">
          <v-img
            :src="require('~/assets/images/common/rsl.svg')"
            max-width="100%"
          />
        </v-col>
        <v-col cols="8">
          <h3 class="display-1 text-uppercase">
            We are
          </h3>
          <h4 class="display-2 font-weight-bold yellow--text">
            RE:START LEAGUE
          </h4>
          <div class="title mt-2">
            RSL 賽事聯盟，全名為「RE:START LEAGUE」，由三名兼具賽事舉辦經驗、玩家社群經營與遊戲領域影響力的核心玩家所組成。<br>
            我們致力於打造完善的電競聯賽環境、建立公平的賽事舞台，希望藉由 RSL 聯賽讓玩家重新燃起心目中的電競選手夢想。
          </div>
          <div class="actions mt-6">
            <v-btn color="primary">
              關於 RSL
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
    background-image: linear-gradient(rgba(#000, .6) 50%, rgba(#000, .95) 100%);
  }
}
</style>
