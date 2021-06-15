<template>
  <div class="home">
    <banner />
    <league />
    <hosts />
  </div>
</template>

<script>
import Banner from '~/components/season2/home/banner'
import League from '~/components/season2/home/league'
import Hosts from '~/components/season2/home/hosts'

export default {
  name: 'Index',
  components: {
    Banner,
    League,
    Hosts
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
