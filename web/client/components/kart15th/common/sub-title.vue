<template>
  <h4 class="text-h4 font-weight-bold pt-2 pl-16">
    <span>{{ text }}</span>
  </h4>
</template>

<script>
export default {
  name: 'SubTitle',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
h4 {
  position: relative;
  text-shadow: 0 0 3px var(--v-secondary-base);

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 137px;
    height: 40px;
    content: '';
    background: image('kart15th/common/sub_title.svg') no-repeat left center/contain;
  }
  span {
    position: relative;
  }
}
</style>
