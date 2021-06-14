<template>
  <div class="home">
    <banner />
  </div>
</template>

<script>
import Banner from '~/components/season2/home/banner'

export default {
  name: 'Index',
  components: {
    Banner
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
