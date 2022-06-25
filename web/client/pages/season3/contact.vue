<template>
  <meet-rsl
    :content="post.content.rendered"
    root-path="/season3"
    banner="season3/common/post-banner.jpg"
  />
</template>

<script>
import MeetRsl from '~/components/common/about/meet-rsl'

export default {
  name: 'Contact',
  components: {
    MeetRsl
  },
  layout: 'season3',
  async asyncData ({ store, route, error }) {
    const post = await store.dispatch('page/getPageBySlug', 'contact')
    if (!post) {
      error({ statusCode: 404, message: 'Page not found.' })
    }
    return {
      post
    }
  }
}
</script>
