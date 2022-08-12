<template>
  <v-card
    :width="$breakpoint.is.smAndDown ? 300 : 360"
    :height="$breakpoint.is.smAndDown ? 420 : 480"
    rounded="xl"
  >
    <v-img
      class="white--text align-end"
      height="100%"
      :src="image"
      gradient="to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .1) 75%, rgba(0, 0, 0, .8)"
      :alt="item.name"
      eager
    >
      <div class="pa-6">
        <v-card-title class="text-h4 text-sm-h3 font-weight-bold text-uppercase pa-0">
          {{ item.name }}
        </v-card-title>
        <v-card-text
          v-if="item.alias"
          class="text-h6 text-sm-h5 grey--text text--lighten-2 pa-0"
        >
          {{ item.alias }}
        </v-card-text>
      </div>
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: 'HostCard',
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    isGuest: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    image () {
      const path = this.isGuest ? 'guest' : 'host'
      return require(`~/assets/images/season3/${path}/${this.item.avatar}`)
    }
  }
}
</script>
