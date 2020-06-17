<template>
  <i
    class="rsl-deco flex-shrink-0"
    :class="[type]"
  />
</template>

<script>
export default {
  name: 'Deco',
  components: {},
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  data: () => ({
  }),
  computed: {},
  watch: {},
  mounted () {
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@mixin size($height, $ratio) {
  width: $height * $ratio;
  height: $height;
}
.rsl-deco {
  display: inline-block;
  background: transparent center / auto 100% no-repeat;
  vertical-align: middle;

  &.hot-tire {
    $ratio: 512 / 214;
    $height: 36px;
    @include size($height, $ratio);

    background-image: image('common/hot-tire.svg');
  }
  &.race-flag {
    $ratio: 512 / 253;
    $height: 36px;
    @include size($height, $ratio);

    background-image: image('common/race-flag.svg');
  }
}
</style>
