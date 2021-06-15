<template>
  <v-app class="season-2">
    <v-main>
      <nuxt />
    </v-main>
    <layout-footer />
  </v-app>
</template>

<script>
import LayoutFooter from '~/components/season2/footer'

export default {
  components: {
    LayoutFooter
  },
  data: () => ({
  }),
  head () {
    const metaInfo = {
      title: '夢想盃跑跑聯賽 Season 2',
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap' }
      ]
    }

    return metaInfo
  }
}
</script>

<style lang="scss" scoped>
</style>
