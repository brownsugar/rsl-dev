<template>
  <div class="home">
    <banner />
    <league />
    <!-- <hosts />
    <cooperator /> -->
  </div>
</template>

<script>
import Banner from '~/components/season3/home/banner'
import League from '~/components/season3/home/league'
// import Hosts from '~/components/season3/home/hosts'
// import Cooperator from '~/components/season3/home/cooperator'

export default {
  name: 'Index',
  components: {
    Banner,
    League
  },
  layout: 'season3'
}
</script>

<style lang="scss" scoped>
</style>
