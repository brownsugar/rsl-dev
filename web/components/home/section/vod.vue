<template>
  <v-row id="vod" class="py-12">
    <v-col>
      <div class="d-flex justify-center align-center mb-2">
        <deco type="hot-tire" />
        <h3 class="display-1 ml-2">
          精彩回顧
        </h3>
      </div>
      <v-container>
        <v-row
          align="center"
          justify="center"
        >
          <v-col cols="6">
            <v-card elevation="10">
              <v-responsive :aspect-ratio="16/9">
                <yt-player
                  video-id="uvwNWsFunGw"
                  :play-on-visible="false"
                  auto-mute
                  loop
                />
              </v-responsive>
            </v-card>
            <v-alert
              class="mt-6"
              text
              prominent
              color="info"
              icon="$fire"
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
  background: image('home/background/drift-road.png') right bottom no-repeat;
}
</style>
