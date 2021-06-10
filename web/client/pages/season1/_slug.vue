<template>
  <div class="page">
    <post-single
      type="page"
      :post="post"
    />
  </div>
</template>

<script>
import PostSingle from '~/components/post/single'

/**
 * Page slug must exist in WordPress.
 */
export default {
  name: 'PageSingle',
  components: {
    PostSingle
  },
  layout: 'season1',
  async asyncData ({ store, route, error }) {
    const post = await store.dispatch('page/getPageBySlug', route.params.slug)
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
