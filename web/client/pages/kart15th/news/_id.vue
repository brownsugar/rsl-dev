<template>
  <div class="news">
    <post-single
      :post="post"
      list-path="/kart15th/news"
      list-label="最新消息"
      banner="kart15th/common/post-banner.jpg"
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
  layout: 'kart15th',
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
    fromRoute: null
  })
}
</script>
