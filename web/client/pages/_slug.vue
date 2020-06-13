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

export default {
  name: 'PageSingle',
  components: {
    PostSingle
  },
  props: {},
  async asyncData ({ store, route }) {
    const post = await store.dispatch('page/getPageBySlug', route.params.slug)
    return {
      post
    }
  },
  data: () => ({
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
