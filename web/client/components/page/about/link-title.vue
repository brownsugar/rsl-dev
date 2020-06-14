<template>
  <h1 class="mb-3">
    <a
      class="link-title text--primary text-decoration-none d-flex align-center"
      :href="'#' + target"
      @click.stop="$vuetify.goTo('#' + target)"
    >
      {{ text }}
      <fa
        class="link-icon ml-2"
        :icon="['fas', 'link']"
      />
    </a>
  </h1>
</template>

<script>
export default {
  name: 'LinkTitle',
  props: {
    text: {
      type: String,
      default: ''
    },
    target: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.link-icon {
  font-size: 14px;
  visibility: hidden;

  .link-title:hover & {
    visibility: visible;
  }
}
</style>
