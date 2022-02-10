<template>
  <div class="home">
    <banner />
    <v-container>
      <intro />
      <awards />
      <!-- <hosts /> -->
      <cooperator />
    </v-container>
  </div>
</template>

<script>
import Banner from '~/components/kart15th/home/banner'
import Intro from '~/components/kart15th/home/intro'
import Awards from '~/components/kart15th/home/awards'
// import Hosts from '~/components/kart15th/home/hosts'
import Cooperator from '~/components/kart15th/home/cooperator'

export default {
  name: 'Index',
  components: {
    Banner,
    Intro,
    Awards,
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
