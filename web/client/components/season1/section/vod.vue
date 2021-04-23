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
          <p v-html="parseHtml(config.highlight.video_description)" />
          <v-card>
            <v-responsive :aspect-ratio="16/9">
              <yt-player
                :video-id="config.highlight.video_id"
                :playlist-id="config.highlight.playlist_id"
                play-on-visible
                auto-mute
                :loop="config.highlight.loop"
              />
            </v-responsive>
          </v-card>
          <action-alert
            class="mt-6"
            color="primary"
            elevation="2"
            border="left"
            colored-border
          >
            <template #icon>
              <fa
                class="primary--text"
                :icon="['fas', 'bell']"
                size="lg"
              />
            </template>
            <template #button>
              <v-btn
                color="primary"
                :href="$config.rsl.youtube.url"
                target="_blank"
              >
                前往 YouTube
              </v-btn>
            </template>
            立即訂閱 RSL 賽事聯盟 YouTube 頻道，精彩賽事影片不漏接！
          </action-alert>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Deco from '~/components/common/deco'
import YtPlayer from '~/components/common/yt-player'
import ActionAlert from '~/components/common/action-alert'

export default {
  name: 'Vod',
  components: {
    Deco,
    YtPlayer,
    ActionAlert
  },
  computed: {
    ...mapState([
      'config'
    ])
  },
  methods: {
    parseHtml (string) {
      return string.replace(/(\r\n|\n\r|\r|\n)/g, '<br />')
    }
  }
}
</script>

<style lang="scss" scoped>
#vod {
  background: image('season1/background/play.png') left 70px bottom 15px / 300px no-repeat,
              image('season1/background/play-ground.png') left -20px bottom -28px / 600px no-repeat,
              image('season1/background/race-bg.png') top right / contain no-repeat;
  padding-bottom: 160px;
}
</style>
