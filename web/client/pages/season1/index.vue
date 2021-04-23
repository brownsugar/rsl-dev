<template>
  <div class="home">
    <section-banner />
    <section-vod />
    <section-league />
    <section-cooperate />
    <section-about />
  </div>
</template>

<script>
import SectionBanner from '~/components/season1/section/banner'
import SectionVod from '~/components/season1/section/vod'
import SectionLeague from '~/components/season1/section/league'
import SectionCooperate from '~/components/season1/section/cooperate'
import SectionAbout from '~/components/season1/section/about'

export default {
  components: {
    SectionBanner,
    SectionVod,
    SectionLeague,
    SectionCooperate,
    SectionAbout
  },
  layout: 'season1'
}
</script>
