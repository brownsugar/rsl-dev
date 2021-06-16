<template>
  <div>
    <h2 class="text-h5">
      <fa
        class="mr-1"
        :icon="['fad', icon]"
        size="sm"
      />
      {{ title }}
    </h2>
    <div
      class="content text-break"
      :class="className"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailInfo',
  props: {
    title: {
      type: String,
      default: ''
    },
    iconDouble: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    icon () {
      return this.iconDouble ? 'chevron-double-right' : 'chevron-right'
    },
    className () {
      return this.iconDouble ? 'ml-8' : 'ml-6'
    }
  }
}
</script>
