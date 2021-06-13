<template>
  <v-app class="season-2">
    <nuxt />
  </v-app>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  head () {
    const metaInfo = {
      title: '夢想盃跑跑聯賽 Season 2',
      link: [
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap' }
      ]
    }

    return metaInfo
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
</style>
