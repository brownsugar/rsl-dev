<template>
  <h1 class="mb-3">
    <a
      class="link-title text--primary text-decoration-none d-inline-block"
      :href="'#' + target"
      @click.stop="$vuetify.goTo('#' + target)"
    >
      <span class="d-flex align-center">
        {{ text }}
        <fa
          class="link-icon ml-2"
          icon="fa-solid fa-link"
        />
      </span>
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
