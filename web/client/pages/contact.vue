<template>
  <meet-rsl
    :content="post.content.rendered"
  />
</template>

<script>
import MeetRsl from '~/components/page/meet-rsl'

export default {
  name: 'Contact',
  components: {
    MeetRsl
  },
  props: {},
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
