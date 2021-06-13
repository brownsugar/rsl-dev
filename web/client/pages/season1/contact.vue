<template>
  <meet-rsl
    :content="post.content.rendered"
  />
</template>

<script>
import MeetRsl from '~/components/season1/about/meet-rsl'

export default {
  name: 'Contact',
  components: {
    MeetRsl
  },
  layout: 'season1',
  async asyncData ({ store, route, error }) {
    const post = await store.dispatch('page/getPageBySlug', 'contact')
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
