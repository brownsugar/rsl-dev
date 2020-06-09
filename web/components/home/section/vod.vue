<template>
  <v-row
    id="vod"
    class="py-12 grey lighten-3"
  >
    <v-col>
      <div class="d-flex justify-center align-center mb-4">
        <deco type="hot-tire" />
        <h3 class="display-1 ml-2">
          精彩賽事回顧
        </h3>
      </div>
      <v-container>
        <v-row
          align="center"
          justify="center"
        >
          <v-col cols="6">
            <v-card>
              <v-responsive :aspect-ratio="16/9">
                <yt-player
                  video-id="uvwNWsFunGw"
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
                  立即訂閱 RSL 賽事聯盟 YouTube 頻道，精彩影片不漏接！
                </v-col>
                <v-col class="shrink">
                  <v-btn color="primary">
                    前往 YouTube
                  </v-btn>
                </v-col>
              </v-row>
            </v-alert>
            <!-- <v-alert
              prominent
              color="info"
              icon="$fire"
            >
            </v-alert> -->
          </v-col>
        </v-row>
      </v-container>
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
  background: linear-gradient(15deg, transparent 50%, #f3e4e2 50.1%),
              image('home/play.png') left 80px bottom 15px / 400px no-repeat,
              image('home/play-ground.png') left -8px bottom -28px / 800px no-repeat;
}
</style>
