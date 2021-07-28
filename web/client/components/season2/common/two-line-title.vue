<template>
  <h3 class="text-h3 text-sm-h2 font-weight-black text-uppercase">
    <span class="d-block text-h5 primary--text font-weight-regular">{{ top }}</span>
    <slot
      v-if="$slots.bottom"
      name="bottom"
    />
    <span
      v-else
    >{{ bottom }}</span>
  </h3>
</template>

<script>
export default {
  name: 'TwoLineTitle',
  props: {
    top: {
      type: String,
      default: ''
    },
    bottom: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
