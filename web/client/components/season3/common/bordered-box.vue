<template>
  <div class="bordered-box pa-2 pa-sm-3">
    <div class="inner white pa-6 px-0 pa-sm-10 pa-md-16">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BorderedBox'
}
</script>

<style lang="scss" scoped>
.bordered-box,
.inner {
  border-radius: 8vw;
}
.bordered-box {
  background: rgba($s3-primary, .03);
  box-shadow: 0 0 10px rgba($s3-primary, .5);
}
</style>
