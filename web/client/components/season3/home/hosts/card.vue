<template>
  <v-card
    :width="$breakpoint.is.smAndDown ? 300 : 360"
    :height="$breakpoint.is.smAndDown ? 420 : 480"
    rounded="xl"
  >
    <v-img
      class="white--text align-end"
      height="100%"
      :src="require('~/assets/images/season3/host/' + host.avatar)"
      gradient="to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .1) 75%, rgba(0, 0, 0, .8)"
      :alt="host.name"
    >
      <div class="pa-6">
        <v-card-title class="text-h4 text-sm-h3 font-weight-bold text-uppercase pa-0">
          {{ host.name }}
        </v-card-title>
        <v-card-text
          v-if="host.alias"
          class="text-h6 text-sm-h5 grey--text text--lighten-2 pa-0"
        >
          {{ host.alias }}
        </v-card-text>
      </div>
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: 'HostCard',
  props: {
    host: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
