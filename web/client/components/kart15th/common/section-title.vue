<template>
  <div class="section-title">
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.section-title {

  span {
    display: inline-block;
    font-size: 6rem !important;
    font-weight: bold;
    transform: skew(-10deg);
    -webkit-text-stroke: 2px #FFF;
    -webkit-text-fill-color: transparent;

    @include breakpoint(sm) {
      font-size: 4.5rem !important;
    }
  }
}
</style>
