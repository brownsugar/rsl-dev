<template>
  <div class="rules">
    <post-single
      type="page"
      banner="season3/common/post-banner.jpg"
      :post="post"
    />
  </div>
</template>

<script>
import PostSingle from '~/components/post/single'

export default {
  name: 'Press',
  components: {
    PostSingle
  },
  layout: 'season3',
  async asyncData ({ store, route, error }) {
    const post = await store.dispatch('page/getPageBySlug', 'season3-press')
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
