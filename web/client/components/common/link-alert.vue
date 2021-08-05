<template>
  <a
    v-ripple="{ class: 'white--text' }"
    class="d-block text-decoration-none"
    :href="href"
    target="_blank"
  >
    <v-alert v-bind="$attrs">
      <slot />
      <template #append>
        <fa icon="fa-solid fa-up-right-from-square" />
      </template>
    </v-alert>
  </a>
</template>

<script>
export default {
  name: 'LinkAlert',
  inheritAttrs: false,
  props: {
    href: {
      type: String,
      default: '',
      require: true
    }
  }
}
</script>
