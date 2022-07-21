<template>
  <div
    class="bordered-box"
    :class="[outerClass, { small }]"
  >
    <div
      class="inner white"
      :class="innerClass"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BorderedBox',
  props: {
    small: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    outerClass () {
      if (this.small) {
        return 'd-inline-block pa-1 pa-sm-2'
      }
      return 'pa-2 pa-sm-3'
    },
    innerClass () {
      if (this.small) {
        return 'px-4 py-3 px-sm-8 py-sm-6'
      }
      return 'pa-6 px-0 pa-sm-10 pa-md-16'
    }
  }
}
</script>

<style lang="scss" scoped>
.bordered-box,
.inner {
  border-radius: var(--border-radius);
}
.bordered-box {
  --border-radius: 130px;

  @include breakpoint(md) {
    --border-radius: 100px;
  }
  @include breakpoint(sm) {
    --border-radius: 50px;
  }

  background: rgba($s3-primary, .03);
  box-shadow: 0 0 10px rgba($s3-primary, .5);

  &.small {
    --border-radius: 20px;
  }
}
</style>
