<template>
  <div id="vod" class="pt-12">
    <v-container fluid>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          md="10"
          lg="8"
        >
          <div class="d-flex align-center mb-4">
            <deco type="hot-tire" />
            <h3 class="text-h4 ml-2">
              精彩賽事回顧
            </h3>
          </div>
          <p>
            2018 年由 TRY 賽事聯盟與 AKEL 攜手於高雄夢時代舉辦的《TKL 夢想盃跑跑卡丁車聯賽》集結了包含爆哥在內等 16 名跑跑卡丁車頂尖高手對決，並邀請到熱血主播徐展元、知名賽評林志彥以及國服跑跑知名解說 Tony 現身激情播報，全程由 Brownsugar 導播並於熊貓 TV 及 Twitch 頻道轉播，創下了最高 12 萬人同時在線收看的好成績，現場也有超過 300 名跑跑粉絲入場共襄盛舉，為跑跑卡丁車實體賽事回憶寫下了精彩的一頁。
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
            <v-row
              align="center"
              no-gutters
            >
              <v-col class="shrink">
                <fa
                  class="mx-2 primary--text"
                  :icon="['fas', 'bell']"
                  size="lg"
                />
              </v-col>
              <v-col class="grow ml-1 mr-2">
                立即訂閱 RSL 賽事聯盟 YouTube 頻道，精彩賽事影片不漏接！
              </v-col>
              <v-col
                class="shrink d-flex justify-end d-sm-block pt-2 pt-sm-0"
                cols="12"
                sm="auto"
              >
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
    </v-container>
  </div>
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
  background: image('home/background/play.png') left 70px bottom 15px / 300px no-repeat,
              image('home/background/play-ground.png') left -20px bottom -28px / 600px no-repeat,
              image('home/background/race-bg.png') top right / contain no-repeat;
  padding-bottom: 160px;
}
</style>
