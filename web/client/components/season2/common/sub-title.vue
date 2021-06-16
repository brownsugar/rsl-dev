<template>
  <h4 class="text-h4 font-weight-bold pl-12">
    {{ text }}
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

  &::before {
    position: absolute;
    top: 50%;
    left: 0;
    display: block;
    width: 36px;
    height: 8px;
    margin-top: -4px;
    content: '';
    background: var(--v-primary-base);
  }
}
</style>
