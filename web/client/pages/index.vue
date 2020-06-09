<template>
  <div class="home">
    <section-banner />
    <section-vod />
    <!-- <v-row id="news">
      最新消息
      可以在此確認 RSL 官方最新訊息和賽事資訊。
    </v-row> -->
    <section-league />
    <section-cooperate />
    <section-about />
  </div>
</template>

<script>
import SectionBanner from '~/components/home/section/banner'
import SectionVod from '~/components/home/section/vod'
import SectionLeague from '~/components/home/section/league'
import SectionCooperate from '~/components/home/section/cooperate'
import SectionAbout from '~/components/home/section/about'

export default {
  components: {
    SectionBanner,
    SectionVod,
    SectionLeague,
    SectionCooperate,
    SectionAbout
  }
}
</script>

<style lang="scss" scoped>
</style>
