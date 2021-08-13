<template>
  <v-container class="vs-korea py-16">
    <v-row justify="center">
      <v-col
        cols="12"
        md="10"
        lg="8"
      >
        <sub-title
          text="台韓交流賽"
        />
        <coming-soon
          message="精彩對決，即將上演。完整交流資訊 8/20 公佈。"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SubTitle from '~/components/season2/common/sub-title'
import ComingSoon from '~/components/common/coming-soon'

export default {
  name: 'VsKorea',
  components: {
    SubTitle,
    ComingSoon
  },
  layout: 'season2',
  props: {},
  data: () => ({
  }),
  head () {
    const title = '台韓交流賽'

    return {
      title,
      meta: [
        { property: 'og:title', content: title, hid: 'og:title' }
      ]
    }
  },
  computed: {},
  watch: {},
  mounted () {
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
