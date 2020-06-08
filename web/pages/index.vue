<template>
  <div class="home mb-5">
    <section-banner />
    <section-vod />
    <!-- <v-row id="news">
      最新消息
      可以在此確認 RSL 官方最新訊息和賽事資訊。
    </v-row> -->
    <section-league />
    <!--
    <v-row id="cooperate">
      <h1>合作品牌</h1>
      指導單位：南台科技大學資訊傳播系、中華電子競技教育學會、競及
      協辦單位：遊戲橘子
      執行單位：RSL
      合作夥伴：掠奪者、ACER、COOL MASTER
    </v-row>
    <v-row id="about">
      RSL 賽事聯盟，全名為「RE:START LEAGUE」，由三名兼具賽事舉辦經驗、玩家社群經營與遊戲領域影響力的核心玩家所組成。
      我們致力於打造完善的電競聯賽環境、建立公平的賽事舞台，希望藉由 RSL 聯賽讓玩家重新燃起心目中的電競選手夢想。
      [關於 RSL]
    </v-row> -->
  </div>
</template>

<script>
import SectionBanner from '~/components/home/section/banner'
import SectionVod from '~/components/home/section/vod'
import SectionLeague from '~/components/home/section/league'

export default {
  components: {
    SectionBanner,
    SectionVod,
    SectionLeague
  },
  data: () => ({
  }),
  computed: {
  },
  watch: {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
