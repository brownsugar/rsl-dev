<template>
  <div class="news">
    <post-single
      :post="post"
      list-path="/season1/news"
      list-label="最新消息"
      :from-route="fromRoute"
    />
  </div>
</template>

<script>
import PostSingle from '~/components/post/single'

/**
 * Post id must exist in WordPress.
 */
export default {
  name: 'NewsSingle',
  components: {
    PostSingle
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.fromRoute = from
    })
  },
  layout: 'season1',
  async asyncData ({ store, route, error }) {
    const post = await store.dispatch('news/getNewsById', route.params.id)
    if (!post) {
      error({ statusCode: 404, message: 'Post not found.' })
    }
    return {
      post
    }
  },
  data: () => ({
    fromRoute: null,
    post: {}
  })
}
</script>
