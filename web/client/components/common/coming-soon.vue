<template>
  <v-row>
    <v-col class="my-2" align="center">
      <v-img
        class="mx-auto"
        :aspect-ratio="file.ratio"
        :src="file.src"
        :width="width"
        :alt="message"
      />
      <p class="mt-8">
        {{ message }}
      </p>
    </v-col>
  </v-row>
</template>

<script>
const fileData = {
  climb: 576 / 600,
  'go-ahead': 1016 / 600
}

export default {
  name: 'ComingSoon',
  props: {
    message: {
      type: String,
      default: 'Coming Soon...'
    },
    image: {
      type: String,
      default: 'climb'
    },
    width: {
      type: [Number, String],
      default: 300
    }
  },
  computed: {
    file () {
      const name = this.image in fileData
        ? this.image
        : 'climb'
      return {
        src: require(`~/assets/images/common/${name}.png`),
        ratio: fileData[name]
      }
    }
  }
}
</script>
