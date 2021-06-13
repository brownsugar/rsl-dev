<template>
  <div class="home">
    <hero-banner />
    Alcohol Free!
  </div>
</template>

<script>
import HeroBanner from '~/components/season2/home/hero-banner'

export default {
  name: 'Index',
  components: {
    HeroBanner
  },
  layout: 'season2',
  props: {},
  data: () => ({
  }),
  computed: {},
  watch: {},
  mounted () {
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
