<template>
  <v-container class="vote py-16">
    <v-row justify="center">
      <v-col
        cols="12"
        md="10"
        lg="8"
      >
        <sub-title
          text="S3 人氣王票選"
        />
        <div class="mt-8">
          <coming-soon
            message="人氣王票選活動即將開跑，敬請關注後續轉播及公告消息。"
          />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SubTitle from '~/components/season3/common/sub-title'
import ComingSoon from '~/components/common/coming-soon'

export default {
  name: 'Vote',
  components: {
    SubTitle,
    ComingSoon
  },
  layout: 'season3',
  head () {
    const title = 'S3 人氣王票選'

    return {
      title,
      meta: [
        { property: 'og:title', content: title, hid: 'og:title' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
