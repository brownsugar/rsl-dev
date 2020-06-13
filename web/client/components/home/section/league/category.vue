<template>
  <div class="league-category mb-12">
    <div class="d-flex align-center mb-2">
      <h5 class="text-h4 mr-2">
        <slot v-if="$slots.name" name="name" />
        <span v-else>{{ name }}</span>
      </h5>
      <deco type="race-flag" />
    </div>
    <p v-if="hasDescription" class="text--darken-3 grey--text">
      <slot v-if="$slots.description" name="description" />
      <span v-else>{{ description }}</span>
    </p>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
import Deco from '~/components/common/deco'

export default {
  name: 'LeagueCategory',
  components: {
    Deco
  },
  props: {
    name: {
      type: String,
      default: 'Category Name'
    },
    description: {
      type: String,
      default: ''
    }
  },
  computed: {
    hasDescription () {
      return this.$slots.description || this.description
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
