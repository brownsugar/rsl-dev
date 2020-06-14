<template>
  <div class="news">
    <post-single
      :post="post"
      list-path="/news"
      list-label="最新消息"
      :from-route="fromRoute"
    />
  </div>
</template>

<script>
import PostSingle from '~/components/post/single'

export default {
  name: 'NewsSingle',
  components: {
    PostSingle
  },
  props: {},
  async asyncData ({ store, route }) {
    const post = await store.dispatch('news/getNewsById', route.params.id)
    return {
      post
    }
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.fromRoute = from
    })
  },
  data: () => ({
    fromRoute: null,
    post: {}
  }),
  computed: {
  },
  watch: {},
  mounted () {
  },
  beforeDestroy () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
