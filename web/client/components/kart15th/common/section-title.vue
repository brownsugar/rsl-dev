<template>
  <div
    v-intersect="{
      handler: intersectHandler,
      options: {
        threshold: 1.0
      }
    }"
    class="section-title"
    :class="{ active: isIntersecting }"
  >
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
  },
  data: () => ({
    isIntersecting: false
  }),
  methods: {
    intersectHandler (entries) {
      // Only trigger once
      if (entries[0].isIntersecting) {
        this.isIntersecting = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.section-title {
  opacity: 0;

  &.active {
    animation: flash-in .5s step-start forwards;
  }
  @keyframes flash-in {

    0% { opacity: 0; }
    20% { opacity: .6; }
    40% { opacity: .2; }
    60% { opacity: .8; }
    80% { opacity: .4; }
    100% { opacity: 1; }
  }

  span {
    display: inline-block;
    font-size: 6rem !important;
    font-weight: bold;
    filter: drop-shadow(0 0 3px rgba(#FFF, .75));
    transform: skew(-10deg);
    -webkit-text-stroke: 2px #FFF;
    -webkit-text-fill-color: transparent;

    @include breakpoint(sm) {
      font-size: 4.5rem !important;
    }
  }
}
</style>
