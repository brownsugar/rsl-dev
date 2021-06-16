<template>
  <div class="rules">
    <post-single
      type="page"
      :post="post"
    />
  </div>
</template>

<script>
import PostSingle from '~/components/post/single'

export default {
  name: 'Rules',
  components: {
    PostSingle
  },
  layout: 'season1',
  async asyncData ({ store, route, error }) {
    const post = await store.dispatch('page/getPageBySlug', 'season1-rules')
    if (!post) {
      error({ statusCode: 404, message: 'Page not found.' })
    }
    return {
      post
    }
  },
  data: () => ({
    post: {}
  })
}
</script>
