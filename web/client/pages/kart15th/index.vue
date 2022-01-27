<template>
  <div class="home">
    <banner />
    <intro />
    <Summary />
    <!-- <hosts /> -->
    <cooperator />
  </div>
</template>

<script>
import Banner from '~/components/kart15th/home/banner'
import Intro from '~/components/kart15th/home/intro'
import Summary from '~/components/kart15th/home/summary'
// import Hosts from '~/components/kart15th/home/hosts'
import Cooperator from '~/components/kart15th/home/cooperator'

export default {
  name: 'Index',
  components: {
    Banner,
    Intro,
    Summary,
    // Hosts,
    Cooperator
  },
  layout: 'kart15th'
}
</script>

<style lang="scss" scoped>
.home {
  background: var(--v-secondary-base);
}
</style>
