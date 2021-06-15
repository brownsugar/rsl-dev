<template>
  <div class="home">
    <banner />
    <league />
    <hosts />
    <cooperator />
  </div>
</template>

<script>
import Banner from '~/components/season2/home/banner'
import League from '~/components/season2/home/league'
import Hosts from '~/components/season2/home/hosts'
import Cooperator from '~/components/season2/home/cooperator'

export default {
  name: 'Index',
  components: {
    Banner,
    League,
    Hosts,
    Cooperator
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
