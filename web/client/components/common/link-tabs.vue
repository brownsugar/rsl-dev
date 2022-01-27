<template>
  <v-tabs
    centered
    show-arrows
  >
    <v-tabs-slider :color="color" />
    <v-tab
      v-for="item in items"
      :key="item.slug"
      :class="{ 'primary--text': $route.params.slug === item.slug }"
      :to="makeRoutePath(item.slug)"
      exact
      nuxt
    >
      {{ item.name }}
    </v-tab>
  </v-tabs>
</template>

<script>
export default {
  name: 'LinkTabs',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    color: {
      type: String,
      default: 'secondary'
    },
    basePath: {
      type: String,
      default: ''
    },
    slugGlue: {
      type: String,
      default: ''
    }
  },
  methods: {
    makeRoutePath (slug) {
      const basePath = this.basePath
      const subPath = (this.slugGlue ? this.slugGlue + '/' : '') + slug
      return slug ? `${basePath}/${subPath}` : basePath
    }
  }
}
</script>
