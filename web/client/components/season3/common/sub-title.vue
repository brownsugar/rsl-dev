<template>
  <h5 class="text-h4 text-sm-h3 font-weight-bold d-flex align-end pb-1">
    <span>{{ text }}</span>
  </h5>
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
h5 {
  --decoration-size: 100px;

  @include breakpoint(sm) {
    --decoration-size: 80px;
  }

  position: relative;
  height: var(--decoration-size);

  &::before {
    position: absolute;
    top: 0;
    left: -60px;
    display: block;
    width: var(--decoration-size);
    height: var(--decoration-size);
    content: '';
    background: var(--v-tertiary-base);
    border-radius: 50%;

    @include breakpoint(sm) {
      left: -50px;
    }
  }
}
span {
  position: relative;
  text-shadow: 0 0 3px #FFF;
}
</style>
