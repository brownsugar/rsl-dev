<template>
  <v-row
    id="vod"
    class="py-12"
    align="center"
    justify="center"
  >
    <v-col cols="6">
      <div class="d-flex align-center mb-4">
        <deco type="hot-tire" />
        <h3 class="text-h4 ml-2">
          精彩賽事回顧
        </h3>
      </div>
      <p>
        2018 年由 TRY 賽事聯盟聯合 AKEL 攜手於高雄夢時代舉辦的《TKL 夢想盃跑跑卡丁車聯賽》集結各路好手對決，並邀請到知名主播許展元、林志彥以及國服知名賽評 Tony 現身播報，現場超過 300 名跑跑粉絲共襄盛舉，創造了跑跑卡丁車實體賽的一次精彩回憶。
      </p>
      <v-card>
        <v-responsive :aspect-ratio="16/9">
          <yt-player
            video-id="pWSmvIYGiJo"
            play-on-visible
            auto-mute
            loop
          />
        </v-responsive>
      </v-card>
      <v-alert
        class="mt-6"
        color="primary"
        elevation="2"
        border="left"
        colored-border
      >
        <v-row align="center" no-gutters>
          <v-col class="grow">
            <fa
              class="mx-2 primary--text"
              :icon="['fas', 'bell']"
              size="lg"
            />
            立即訂閱 RSL 賽事聯盟 YouTube 頻道，精彩賽事影片不漏接！
          </v-col>
          <v-col class="shrink">
            <v-btn
              color="primary"
              :href="$config.rsl.youtube.url"
              target="_blank"
            >
              前往 YouTube
            </v-btn>
          </v-col>
        </v-row>
      </v-alert>
    </v-col>
  </v-row>
</template>

<script>
import Deco from '~/components/common/deco'
import YtPlayer from '~/components/common/yt-player'

export default {
  name: 'Vod',
  components: {
    Deco,
    YtPlayer
  }
}
</script>

<style lang="scss" scoped>
#vod {
  background: image('home/background/play.png') left 80px bottom 15px / 300px no-repeat,
              image('home/background/play-ground.png') left -8px bottom -28px / 600px no-repeat,
              image('home/background/race-bg.png') top right / contain no-repeat;
}
</style>
