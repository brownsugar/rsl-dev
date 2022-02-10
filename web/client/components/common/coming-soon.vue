<template>
  <v-row>
    <v-col class="my-2" align="center">
      <v-img
        class="mx-auto"
        aspected-ratio="576 / 600"
        src="~/assets/images/common/climb.png"
        width="300"
        eager
      />
      <p class="mt-6">
        {{ message }}
      </p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'ComingSoon',
  props: {
    message: {
      type: String,
      default: 'Coming Soon...'
    }
  }
}
</script>
