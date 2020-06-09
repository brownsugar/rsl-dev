<template>
  <div
    v-if="videoId"
    v-intersect="intersectPlayer"
    class="player-wrap"
  >
    <youtube
      ref="youtube"
      :video-id="videoId"
      :player-vars="params"
      width="100%"
      height="100%"
      @ready="playerReady"
      @ended="playerEnd"
    />
  </div>
</template>

<script>
export default {
  name: 'YtPlayer',
  components: {},
  props: {
    videoId: {
      type: String,
      default: undefined,
      required: true
    },
    playlistId: {
      type: String,
      default: undefined
    },
    autoPlay: {
      type: Boolean,
      default: false
    },
    playOnVisible: {
      type: Boolean,
      default: false
    },
    autoMute: {
      type: Boolean,
      default: false
    },
    loop: {
      type: Boolean,
      default: false
    },
    defaultVolume: {
      type: [Number, String],
      default: 70
    }
  },
  data: () => ({
    isReady: false,
    inView: false
  }),
  computed: {
    isPlaylist () {
      return this.playlistId !== undefined
    },
    player () {
      return this.$refs.youtube.player
    },
    params () {
      const params = {
        rel: 0
      }
      if (this.isPlaylist) {
        params.listType = 'playlist'
        params.list = this.playlistId
        params.loop = this.loop ? 1 : 0
      }
      return params
    }
  },
  watch: {
    async inView (value) {
      if (!this.isReady || !this.playOnVisible) {
        return
      }
      if (value) {
        await this.player.playVideo()
      } else {
        this.player.pauseVideo()
      }
    }
  },
  methods: {
    async playerReady () {
      this.isReady = true
      this.player.setVolume(this.defaultVolume)
      if (this.autoMute) {
        this.player.mute()
      }
      if (this.autoplay || (this.playOnVisible && this.inView)) {
        await this.player.playVideo()
      }
    },
    playerEnd () {
      if (this.loop && !this.isPlaylist) {
        this.player.playVideo()
      }
    },
    intersectPlayer (entries, observer, isIntersecting) {
      this.inView = isIntersecting
    }
  }
}
</script>

<style lang="scss" scoped>
.player-wrap {
  width: 100%;
  height: 100%;
}
</style>
