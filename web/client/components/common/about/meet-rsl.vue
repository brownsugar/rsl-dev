<template>
  <div class="meet-rsl">
    <post-layout
      :banner="banner"
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
      <template v-if="$slots.default" #content>
        <slot />
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
    rootPath: {
      type: String,
      default: ''
    },
    banner: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    title: '認識 RSL 賽事聯盟'
  }),
  head: self => ({
    title: self.activedTitle
  }),
  computed: {
    activedTitle () {
      const nav = this.navs.find(nav => nav.to === this.$route.path)
      return nav ? nav.label : ''
    },
    navs () {
      return [
        {
          label: '關於我們',
          to: this.rootPath + '/about'
        },
        {
          label: '聯絡我們',
          to: this.rootPath + '/contact'
        }
      ]
    }
  }
}
</script>
