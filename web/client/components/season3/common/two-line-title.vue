<template>
  <h4
    class="text-h3 text-sm-h2 font-weight-black text-uppercase"
    :class="{ 'text-center': center }"
  >
    <span class="d-block text-h5 secondary--text font-weight-bold">{{ top }}</span>
    <div class="bottom">
      <slot
        v-if="$slots.bottom"
        name="bottom"
      />
      <span
        v-else
      >{{ bottom }}</span>
    </div>
  </h4>
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
    },
    center: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.bottom {
  word-break: break-all;
}
</style>
