<template>
  <h3 class="primary-title display-1 font-weight-bold primary--text pl-5">
    {{ text }}
  </h3>
</template>

<script>
export default {
  name: 'PrimaryTitle',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.primary-title {
  border-left: 5px solid currentColor;
}
</style>
