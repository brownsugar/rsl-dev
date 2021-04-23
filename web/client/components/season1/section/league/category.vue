<template>
  <div class="league-category mb-14">
    <div class="d-flex align-center mb-2">
      <deco type="race-flag" />
      <h5 class="text-h4 ml-2">
        <slot v-if="$slots.name" name="name" />
        <span v-else>{{ name }}</span>
      </h5>
    </div>
    <p v-if="hasDescription" class="grey--text text--darken-3">
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
