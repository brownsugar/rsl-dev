<template>
  <div class="section-break mx-0">
    <v-img
      class="mx-auto"
      src="~/assets/images/season3/common/arrow_down.svg"
      :aspect-ratio="6 / 10"
      :width="$breakpoint.is.mdAndDown ? 40 : 60"
    />
  </div>
</template>

<script>
export default {
  name: 'SectionBreak'
}
</script>

<style lang="scss" scoped>
.section-break {
  margin: 100px;

  @include breakpoint(lg) {
    margin: 60px;
  }
}
</style>
