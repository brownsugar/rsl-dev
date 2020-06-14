<template>
  <div class="meet-rsl">
    <post-layout
      banner="drift"
      :title="title"
      :content="content"
    >
      <template #toolbar>
        <v-btn
          v-for="(nav, i) in navs"
          :key="i"
          active-class="primary"
          :to="nav.to"
          text
          nuxt
        >
          {{ nav.label }}
        </v-btn>
      </template>
      <template v-if="$slots.content" #content>
        <slot name="content" />
      </template>
    </post-layout>
  </div>
</template>

<script>
import PostLayout from '~/components/post/layout'

export default {
  name: 'MeetRsl',
  components: {
    PostLayout
  },
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    title: '認識 RSL 賽事聯盟',
    navs: [
      {
        label: '關於我們',
        to: '/about'
      },
      {
        label: '聯絡我們',
        to: '/contact'
      }
    ]
  }),
  computed: {
    activedTitle () {
      const nav = this.navs.find(nav => nav.to === this.$route.path)
      return nav.label
    }
  },
  watch: {},
  mounted () {
  },
  methods: {},
  head: self => ({
    title: self.activedTitle
  })
}
</script>

<style lang="scss" scoped>
</style>
