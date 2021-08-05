<template>
  <v-hover v-slot="{ hover }">
    <v-card
      :color="brand"
      class="d-flex flex-column justify-center align-center"
      dark
      height="180"
      :href="link"
      target="_blank"
      rel="noreferrer noopener"
    >
      <v-scroll-y-transition mode="out-in">
        <div
          v-if="hover"
          key="hover"
          class="content text-h4"
        >
          <span>{{ hoverText }}</span>
          <span class="text-body-1">
            <fa icon="fa-solid fa-up-right-from-square" />
          </span>
        </div>
        <div
          v-else
          key="origin"
          class="content text-h2"
        >
          <fa :icon="['fa-brands', brand]" />
        </div>
      </v-scroll-y-transition>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: 'LinkCard',
  props: {
    // Brand icon name in Fa5, also use for color name in theme
    brand: {
      type: String,
      default: '',
      required: true
    },
    link: {
      type: String,
      default: '',
      required: true
    },
    hoverText: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  transition-duration: .2s;
}
</style>
