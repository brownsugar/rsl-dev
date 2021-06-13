<template>
  <div
    class="hero-banner"
    :class="{ ready }"
  >
    <div class="stripes">
      <div class="horizontal">
        <div class="stripe left" />
        <div class="stripe right" />
      </div>
      <div class="vertical">
        <div class="stripe top" />
        <div class="stripe bottom" />
      </div>
    </div>
    <div class="brushes" />
    <div class="ribbons">
      <div
        v-for="direction in ['top', 'bottom']"
        :key="direction"
        :class="direction"
      >
        <div
          class="ribbon"
          :class="direction === 'top' ? 'middle' : 'thick'"
        >
          <img :src="require(`~/assets/images/season2/home/hero_ribbon_${direction === 'top' ? 'middle' : 'thick'}.svg`)">
        </div>
        <div class="ribbon thin">
          <img src="~/assets/images/season2/home/hero_ribbon_thin.svg">
        </div>
      </div>
    </div>
    <div class="main">
      <div class="rsl">
        <img src="~/assets/images/rsl/rsl-color-full.svg" alt="RSL 賽事聯盟">
        <span>RSL 賽事聯盟</span>
      </div>
      <h1 class="title">
        <img src="~/assets/images/season2/home/hero_title.svg" alt="夢想盃">
        <span>夢想盃跑跑聯賽 Season 2</span>
      </h1>
      <div class="subtitle">
        <img src="~/assets/images/season2/home/hero_subtitle.svg" alt="跑跑聯賽 Season 2">
      </div>
      <h2 class="slogan">
        <img class="left" src="~/assets/images/season2/home/hero_slogan_left.svg" alt="夢想啟程">
        <img class="middle" src="~/assets/images/season2/home/hero_slogan_x.svg" alt="，">
        <img class="right" src="~/assets/images/season2/home/hero_slogan_right.svg" alt="再造傳奇">
        <span>夢想啟程，再造傳奇</span>
      </h2>
      <div class="restart">
        RE:START KARTRIDER LEAGUE
      </div>
    </div>
    <div class="characters">
      <v-row
        class="fill-height align-center"
        no-gutters
      >
        <v-col
          class="d-flex flex-column align-end"
          md="2"
          offset-md="2"
        >
          <div class="character dao">
            <img src="~/assets/images/season2/home/hero_dao.svg">
          </div>
          <div class="character uni">
            <img src="~/assets/images/season2/home/hero_uni.svg">
          </div>
        </v-col>
        <v-col
          class="d-flex flex-column align-end"
          md="2"
          offset-md="4"
        >
          <div class="character dizni">
            <img src="~/assets/images/season2/home/hero_dizni.svg">
          </div>
          <div class="character bazzi">
            <img src="~/assets/images/season2/home/hero_bazzi.svg">
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroBanner',
  components: {},
  props: {},
  data: () => ({
    ready: false
  }),
  computed: {},
  watch: {},
  mounted () {
    this.startAnimate()
  },
  methods: {
    startAnimate () {
      const durationCommon = 1000
      const durationHalf = durationCommon / 2

      const sceneStripes =
        this.$anime.timeline({
          easing: 'easeOutElastic',
          duration: durationCommon,
          autoplay: false,
          update (anim) {
            if (anim.progress > 50 && sceneBrushes.paused) {
              sceneBrushes.play()
            }
          }
        })
          .add({
            targets: '.hero-banner .stripes .left',
            translateX: [-300, 0],
            opacity: [0, 1]
          })
          .add({
            targets: '.hero-banner .stripes .right',
            translateX: [300, 0],
            rotateY: [180, 180],
            opacity: [0, 1]
          }, 0)
          .add({
            targets: '.hero-banner .stripes .top',
            translateY: [-300, 0],
            opacity: [0, 1]
          }, durationHalf)
          .add({
            targets: '.hero-banner .stripes .bottom',
            translateY: [300, 0],
            rotateX: [180, 180],
            opacity: [0, 1]
          }, durationHalf)

      const sceneBrushes =
        this.$anime.timeline({
          easing: 'linear',
          duration: durationHalf,
          autoplay: false,
          update (anim) {
            if (anim.progress > 30 && sceneRibbons.paused) {
              sceneRibbons.play()
            }
          }
        })
          .add({
            targets: '.hero-banner .brushes',
            opacity: [0, 0.5]
          }, durationHalf)

      const sceneRibbons =
        this.$anime.timeline({
          easing: 'easeOutElastic',
          duration: durationCommon,
          autoplay: false
        })
          .add({
            targets: '.hero-banner .ribbons .thin img',
            translateY: ['-100%', '0%']
          })
          .add({
            targets: '.hero-banner .ribbons .top .middle img',
            translateY: ['-100%', '0%']
          }, durationHalf)
          .add({
            targets: '.hero-banner .ribbons .bottom .thick img',
            translateY: ['100%', '0%']
          }, durationHalf)
      sceneRibbons.finished.then(() => sceneMain.play())

      const sceneMain =
        this.$anime.timeline({
          easing: 'easeOutElastic',
          duration: durationCommon,
          autoplay: false,
          update (anim) {
            if (anim.progress > 80 && sceneCharacter.paused) {
              sceneCharacter.play()
            }
          }
        })
          .add({
            targets: '.hero-banner .title img',
            scale: [0, 1]
          })
          .add({
            targets: '.hero-banner .subtitle img',
            scale: [0, 1]
          }, durationCommon / 3)
          .add({
            targets: '.hero-banner .slogan .middle',
            duration: durationCommon * 1.5,
            scale: [3, 1],
            rotate: '5turn',
            opacity: [0, 1]
          })
          .add({
            targets: '.hero-banner .slogan .left',
            translateX: [35, 0],
            opacity: [0, 1]
          })
          .add({
            targets: '.hero-banner .slogan .right',
            translateX: [-35, 0],
            opacity: [0, 1]
          }, '-=' + durationCommon)
          .add({
            targets: '.hero-banner .rsl img',
            translateY: [30, 0],
            opacity: [0, 1]
          }, '-=' + durationHalf / 2)
          .add({
            targets: '.hero-banner .restart',
            translateY: [-30, 0],
            opacity: [0, 1]
          }, '-=' + durationCommon)

      const sceneCharacter =
        this.$anime.timeline({
          easing: 'easeInQuint',
          duration: durationCommon,
          autoplay: false
        })
          .add({
            targets: '.hero-banner .characters .dao img',
            scale: [0.8, 1],
            translateX: [130, 0],
            translateY: [-10, 0],
            rotate: [-3, 0],
            opacity: [0, 1]
          })
          .add({
            targets: '.hero-banner .characters .dizni img',
            scale: [0.7, 1],
            translateX: [-150, 0],
            translateY: [-50, 0],
            rotate: [15, 0],
            opacity: [0, 1]
          }, 0)
          .add({
            targets: '.hero-banner .characters .uni img',
            scale: [0.7, 1],
            translateX: [-80, 0],
            translateY: [10, 0],
            rotate: [10, 0],
            opacity: [0, 1]
          }, durationCommon / 3)
          .add({
            targets: '.hero-banner .characters .bazzi img',
            scale: [0.8, 1],
            translateX: [150, 0],
            translateY: [50, 0],
            rotate: [-7, 0],
            opacity: [0, 1]
          }, durationCommon / 3)

      sceneStripes.play()
      this.ready = true
    }
  }
}
</script>

<style lang="scss" scoped>
.hero-banner {
  position: relative;
  width: 100vw;
  height: 100vh;
  min-height: 800px;
  overflow: hidden;
  user-select: none;
  background: image('season2/home/hero_bg.jpg') center/cover no-repeat;

  > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    visibility: hidden;
  }
  &.ready > div {
    visibility: visible;
  }
  img {
    pointer-events: none;
  }
}
.stripes {
  $h-stripe-y-offset: 25px;
  $all-stripe-y-offset: 50px;
  $flex-basis: 47.5;

  .horizontal,
  .vertical {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }
  .vertical {
    flex-direction: column;
  }
  .stripe {
    mix-blend-mode: overlay;
  }
  .top,
  .bottom {
    background: image('season2/home/hero_stripe_v.svg') center bottom/75vw auto no-repeat;
  }
  .left,
  .right {
    flex-basis: #{$flex-basis}vw;
    background: image('season2/home/hero_stripe_h.svg') right calc(50% + #{$h-stripe-y-offset} + #{$all-stripe-y-offset})/auto 80vw no-repeat;
  }
  .right {
    transform: rotateY(180deg);
  }
  .top {
    flex-basis: calc(#{$flex-basis}vh + #{$all-stripe-y-offset});
  }
  .bottom {
    flex-basis: calc(#{$flex-basis}vh - #{$all-stripe-y-offset});
    transform: rotateX(180deg);
  }
}
.brushes {
  background: image('season2/home/hero_brush.jpg') center/cover no-repeat;
  mix-blend-mode: overlay;
  opacity: .5;
}
.ribbons {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  mix-blend-mode: screen;

  .top {
    position: relative;
    transform: translateY(-100px);

    .thin {
      margin-top: -11%;
    }
  }
  .bottom {
    display: flex;
    flex-direction: column-reverse;
    transform: translateY(5px);

    .thick {
      margin-top: -11%;
    }
    .thin {
      transform: rotate(180deg);
    }
  }
  .ribbon {
    display: flex;
    justify-content: center;
    width: 110vw;
    overflow: hidden;

    img {
      display: block;
    }
  }
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  text-align: center;

  .rsl {
    width: 180px;
    margin-bottom: 15px;
    filter: drop-shadow(4px 4px 4px rgba(#000, .75));
  }
  .title {
    width: 615px;
    filter: drop-shadow(4px 4px 4px rgba(#777, .75));
    transform: translateX(18px);
  }
  .subtitle {
    width: 330px;
    transform: translateY(-40px);
  }
  .slogan {
    display: flex;
    justify-content: space-between;
    width: 450px;
    height: 35px;
    margin-top: 10px;
  }
  .restart {
    margin-top: 110px;
    color: #333;
  }
  img {
    display: block;
    height: 100%;
  }
  span {
    position: absolute;
    display: inline-block;
    text-indent: -9999px;
  }
}
.characters {

  .col > .character:not(:last-child) {
    margin-bottom: 20px;
  }
  .dao {
    width: 295px;
  }
  .uni {
    width: 340px;
    transform: translateX(-60px);
  }
  .dizni {
    width: 300px;
  }
  .bazzi {
    width: 350px;
    transform: translateX(60px);
  }
}
</style>
