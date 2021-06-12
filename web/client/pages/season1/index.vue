<template>
  <div class="home">
    <banner />
    <vod />
    <league />
    <cooperate />
    <about />
  </div>
</template>

<script>
import Banner from '~/components/season1/home/banner'
import Vod from '~/components/season1/home/vod'
import League from '~/components/season1/home/league'
import Cooperate from '~/components/season1/home/cooperate'
import About from '~/components/season1/home/about'

export default {
  name: 'Index',
  components: {
    Banner,
    Vod,
    League,
    Cooperate,
    About
  },
  layout: 'season1'
}
</script>
