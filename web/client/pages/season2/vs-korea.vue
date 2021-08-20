<template>
  <v-container class="vs-korea py-16">
    <v-row justify="center">
      <v-col
        cols="12"
        md="10"
        lg="8"
      >
        <intro />
        <support />
        <broadcast />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Intro from '~/components/season2/vs-korea/intro'
import Support from '~/components/season2/vs-korea/support'
import Broadcast from '~/components/season2/vs-korea/broadcast'
import lsb from '~/data/season2/lsb'

export default {
  name: 'VsKorea',
  components: {
    Intro,
    Support,
    Broadcast
  },
  layout: 'season2',
  head () {
    const title = '台韓交流賽 ft. Liiv SANDBOX'
    const description = lsb.event.description

    return {
      title,
      meta: [
        { name: 'description', content: description, hid: 'description' },
        { property: 'og:title', content: title, hid: 'og:title' },
        { property: 'og:description', content: description, hid: 'og:description' },
        { property: 'og:image', content: this.$config.rsl.url + '/lsb_2021.png', hid: 'og:image' }
      ]
    }
  }
}
</script>
