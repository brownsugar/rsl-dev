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
  async asyncData ({ store, route, error }) {
    const post = await store.dispatch('news/getNewsById', route.params.id)
    if (!post) {
      error({ statusCode: 404, message: 'Post not found.' })
    }
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
