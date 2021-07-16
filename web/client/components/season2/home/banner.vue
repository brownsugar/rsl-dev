<template>
  <section
    ref="scene"
    class="banner"
    :class="{ ready, mobile: !!viewHeight }"
    :style="{ '--vh': viewHeight }"
  >
    <div class="layer stripes" data-depth="0.1">
      <div class="horizontal">
        <div class="stripe left" />
        <div class="stripe right" />
      </div>
      <div class="vertical">
        <div class="stripe top" />
        <div class="stripe bottom" />
      </div>
    </div>
    <div class="layer brushes" />
    <div class="layer ribbons">
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
    <div class="layer main">
      <div class="rsl" data-depth="0.4">
        <img src="~/assets/images/rsl/rsl-color-full.svg" alt="RSL 賽事聯盟">
        <span>RSL 賽事聯盟</span>
      </div>
      <div class="titles" data-depth="0.6">
        <h1 class="title">
          <img src="~/assets/images/season2/home/hero_title.svg" alt="夢想盃">
          <span>夢想盃跑跑聯賽 Season 2</span>
        </h1>
        <div class="subtitle mx-auto">
          <img src="~/assets/images/season2/home/hero_subtitle.svg" alt="跑跑聯賽 Season 2">
        </div>
      </div>
      <h2 class="slogan" data-depth="0.5">
        <div class="text-wrap">
          <img class="left" src="~/assets/images/season2/home/hero_slogan_left.svg" alt="夢想啟程">
          <img class="middle" src="~/assets/images/season2/home/hero_slogan_x.svg" alt="，">
          <img class="right" src="~/assets/images/season2/home/hero_slogan_right.svg" alt="再造傳奇">
        </div>
        <span>夢想啟程，再造傳奇</span>
      </h2>
      <div class="restart" data-depth="0.4">
        RE:START KARTRIDER LEAGUE
      </div>
    </div>
    <div class="layer characters">
      <v-row
        class="fill-height align-center"
        no-gutters
      >
        <v-col
          class="d-flex flex-column align-end"
          cols="4"
          sm="3"
          md="3"
          lg="2"
          offset-sm="1"
          offset-md="1"
          offset-lg="2"
        >
          <div class="character dao mb-5" data-depth="0.2">
            <img src="~/assets/images/season2/home/hero_dao.svg">
          </div>
          <div class="character uni" data-depth="0.3">
            <img src="~/assets/images/season2/home/hero_uni.svg">
          </div>
        </v-col>
        <v-col
          class="d-flex flex-column"
          :class="$breakpoint.is.smAndUp ? 'align-end' : 'align-start'"
          cols="4"
          sm="3"
          md="3"
          lg="2"
          offset="4"
          offset-sm="4"
          offset-md="4"
        >
          <div class="character dizni mb-5" data-depth="0.2">
            <img src="~/assets/images/season2/home/hero_dizni.svg">
          </div>
          <div class="character bazzi" data-depth="0.3">
            <img src="~/assets/images/season2/home/hero_bazzi.svg">
          </div>
        </v-col>
      </v-row>
    </div>
    <div
      class="scroll-down"
      :class="{ hidden: !scrollDown.visible }"
    >
      <div class="animation-wrap">
        <fa :icon="['duotone', 'angles-down']" />
      </div>
    </div>
  </section>
</template>

<script>
import Parallax from 'parallax-js'
import { randomInt } from '~/assets/utils/random'

export default {
  name: 'Banner',
  data: () => ({
    ready: false,
    viewHeight: '',
    parallax: null,
    scrollDown: {
      visible: true,
      anime: null
    }
  }),
  mounted () {
    if (this.$md.mobile()) {
      this.initViewSize()
    }
    this.initBanner()
    this.initScrollListener()
  },
  beforeDestroy () {
    this.parallax && this.parallax.destroy()
    window.removeEventListener('scroll', this.scrollHandler)
  },
  methods: {
    initViewSize () {
      this.viewHeight = window.innerHeight * 0.01 + 'px'
    },
    async initBanner () {
      await this.$nextTick()
      await this.startIntro()
      this.startAnimationLoop()
      this.initParallax()
      this.$emit('ended')
    },
    initScrollListener () {
      window.addEventListener('scroll', this.scrollHandler)
      window.dispatchEvent(new Event('scroll'))
    },
    startIntro () {
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
            targets: '.banner .stripes .left',
            translateX: [-300, 0],
            opacity: [0, 1]
          })
          .add({
            targets: '.banner .stripes .right',
            translateX: [300, 0],
            rotateY: [180, 180],
            opacity: [0, 1]
          }, 0)
          .add({
            targets: '.banner .stripes .top',
            translateY: [-300, 0],
            opacity: [0, 1]
          }, durationHalf)
          .add({
            targets: '.banner .stripes .bottom',
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
            targets: '.banner .brushes',
            opacity: [0, 0.5]
          }, durationHalf)

      const sceneRibbons =
        this.$anime.timeline({
          easing: 'easeOutElastic',
          duration: durationCommon,
          autoplay: false,
          update (anim) {
            if (anim.progress > 70 && sceneMain.paused) {
              sceneMain.play()
            }
          }
        })
          .add({
            targets: '.banner .ribbons .thin img',
            translateY: ['-100%', '0%']
          })
          .add({
            targets: '.banner .ribbons .top .middle img',
            translateY: ['-100%', '0%']
          }, durationHalf)
          .add({
            targets: '.banner .ribbons .bottom .thick img',
            translateY: ['100%', '0%']
          }, durationHalf)

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
            targets: '.banner .title img',
            scale: [0, 1]
          })
          .add({
            targets: '.banner .subtitle img',
            scale: [0, 1]
          }, durationCommon / 3)
          .add({
            targets: '.banner .slogan .middle',
            duration: durationCommon * 1.5,
            scale: [3, 1],
            rotate: '5turn',
            opacity: [0, 1]
          })
          .add({
            targets: '.banner .slogan .left',
            translateX: [35, 0],
            opacity: [0, 1]
          })
          .add({
            targets: '.banner .slogan .right',
            translateX: [-35, 0],
            opacity: [0, 1]
          }, '-=' + durationCommon)
          .add({
            targets: '.banner .rsl img',
            translateY: [30, 0],
            opacity: [0, 1]
          }, '-=' + durationHalf / 2)
          .add({
            targets: '.banner .restart',
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
            targets: '.banner .characters .dao img',
            scale: [0.8, 1],
            translateX: [130, 0],
            translateY: [-10, 0],
            rotate: [-3, 0],
            opacity: [0, 1]
          })
          .add({
            targets: '.banner .characters .dizni img',
            scale: [0.7, 1],
            translateX: [-150, 0],
            translateY: [-50, 0],
            rotate: [15, 0],
            opacity: [0, 1]
          }, 0)
          .add({
            targets: '.banner .characters .uni img',
            scale: [0.7, 1],
            translateX: [-80, 0],
            translateY: [10, 0],
            rotate: [10, 0],
            opacity: [0, 1]
          }, durationCommon / 3)
          .add({
            targets: '.banner .characters .bazzi img',
            scale: [0.8, 1],
            translateX: [150, 0],
            translateY: [50, 0],
            rotate: [-7, 0],
            opacity: [0, 1]
          }, durationCommon / 3)

      sceneStripes.play()
      this.ready = true

      return sceneCharacter.finished
    },
    startAnimationLoop () {
      // Animation for titles
      const makeTitleAniOptions = (targets) => {
        return {
          targets,
          scale: [
            1,
            1.1,
            0.98,
            1
          ]
        }
      }
      this.$anime.timeline({
        easing: 'easeInBack',
        duration: 1200,
        delay: 7000,
        loop: true
      })
        .add(makeTitleAniOptions('.banner .title img'))
        .add(makeTitleAniOptions('.banner .subtitle img'), 200)
        .add(makeTitleAniOptions('.banner .slogan .text-wrap'), 400)

      // Animation for characters
      const makeCharAniOptions = (targets) => {
        const rotateDeg = randomInt(4, 8)
        const delay = randomInt(3000, 8000)

        return {
          targets,
          easing: 'easeInOutSine',
          duration: 600,
          delay,
          rotate: [
            rotateDeg * -1,
            rotateDeg,
            rotateDeg / -2,
            rotateDeg / 2,
            0
          ],
          loop: true
        }
      }
      this.$anime(makeCharAniOptions('.banner .characters .dao img'))
      this.$anime(makeCharAniOptions('.banner .characters .dizni img'))
      this.$anime(makeCharAniOptions('.banner .characters .uni img'))
      this.$anime(makeCharAniOptions('.banner .characters .bazzi img'))

      // Animation for scroll down
      this.scrollDown.anime = this.$anime({
        targets: '.banner .scroll-down .animation-wrap',
        easing: 'linear',
        duration: 2000,
        delay: 500,
        translateY: [0, 40, 80],
        opacity: [0, 1, 0],
        loop: true,
        autoplay: false
      })
      if (this.scrollDown.visible) {
        this.scrollDown.anime.play()
      }
    },
    initParallax () {
      const scene = this.$refs.scene
      this.parallax = new Parallax(scene, {
        selector: '[data-depth]'
      })
    },
    scrollHandler () {
      const visible = window.scrollY < 100
      this.scrollDown.visible = visible

      const anime = this.scrollDown.anime
      if (!anime) {
        return
      }
      if (visible) {
        if (anime.paused) {
          anime.restart()
        }
      } else {
        anime.pause()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  width: 100vw;
  height: 100vh;
  min-height: 800px;
  overflow: hidden;
  user-select: none;
  background: image('season2/home/hero_bg.jpg') center/cover no-repeat;

  @include breakpoint(md) {
    min-height: 660px;
  }
  @include breakpoint(sm) {
    min-height: 600px;
  }

  &.mobile {
    height: calc(var(--vh, 1vh) * 100);
  }
  .layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    visibility: hidden;
  }
  &.ready .layer {
    visibility: visible;
  }
  img {
    backface-visibility: hidden;
    pointer-events: none;
  }
  [data-depth] {
    position: relative !important; // Override Parallax.js attribute style
  }
}
.stripes {
  $bg-size-v: 75vw;
  $bg-size-h: 80vw;
  $h-stripe-y-offset: 25px;
  $all-stripe-y-offset: 50px;
  $flex-basis: 47.5;

  mix-blend-mode: overlay;

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
  .top,
  .bottom {
    background: image('season2/home/hero_stripe_v.svg') center bottom/#{$bg-size-v} auto no-repeat;

    @include breakpoint(lg) {
      background-size: $bg-size-v * 1.3 auto;
    }
    @include breakpoint(md) {
      background-size: $bg-size-v * 1.6 auto;
    }
    @include breakpoint(sm) {
      background-size: $bg-size-v * 2.2 auto;
    }
  }
  .left,
  .right {
    flex-basis: #{$flex-basis}vw;
    background: image('season2/home/hero_stripe_h.svg') right calc(50% + #{$h-stripe-y-offset} + #{$all-stripe-y-offset})/auto #{$bg-size-h} no-repeat;

    @include breakpoint(lg) {
      background-size: auto $bg-size-h * 1.3;
    }
    @include breakpoint(md) {
      background-size: auto $bg-size-h * 1.6;
    }
    @include breakpoint(sm) {
      background-size: auto $bg-size-h * 2.2;
    }
  }
  .right {
    transform: rotateY(180deg);
  }
  .top {
    flex-basis: calc(#{$flex-basis}% + #{$all-stripe-y-offset});
  }
  .bottom {
    flex-basis: calc(#{$flex-basis}% - #{$all-stripe-y-offset});
    transform: rotateX(180deg);

    @include breakpoint(md) {
      flex-basis: calc(#{$flex-basis}% - #{$all-stripe-y-offset} - 10px);
    }
    @include breakpoint(sm) {
      flex-basis: calc(#{$flex-basis}% - #{$all-stripe-y-offset} - 20px);
    }
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

    @include breakpoint(lg) {
      transform: translateY(-70px);
    }
    @include breakpoint(md) {
      transform: translateY(-50px);
    }
    @include breakpoint(md) {
      transform: translateY(-15px);
    }

    .thin {
      margin-top: -11%;
    }
  }
  .bottom {
    display: flex;
    flex-direction: column-reverse;
    transform: translateY(5px);

    @include breakpoint(sm) {
      transform: translateY(0);
    }

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
      width: 100%;
    }
  }
}
.main {
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  text-align: center;

  @include breakpoint(md) {
    margin-top: 15px;
  }
  @include breakpoint(sm) {
    margin-top: 0;
  }

  .rsl {
    $width: 180px;

    width: $width;
    margin-bottom: 15px;

    @include breakpoint(lg) {
      width: $width * .85;
    }
    @include breakpoint(md) {
      width: $width * .7;
    }
    @include breakpoint(sm) {
      width: $width * .5;
    }

    img {
      will-change: filter, transform;
      filter: drop-shadow(4px 4px 4px rgba(#000, .75));
    }
  }
  .title {
    $width: 615px;

    width: $width;
    transform: translateX(18px);

    @include breakpoint(lg) {
      width: $width * .85;
    }
    @include breakpoint(md) {
      width: $width * .7;
    }
    @include breakpoint(sm) {
      width: $width * .5;
      transform: translateX(10px);
    }

    img {
      will-change: filter, transform;
      filter: drop-shadow(4px 4px 4px rgba(#777, .75));
    }
  }
  .subtitle {
    $width: 330px;

    width: $width;
    transform: translateY(-40px);

    @include breakpoint(lg) {
      width: $width * .85;
      transform: translateY(-32px);
    }
    @include breakpoint(md) {
      width: $width * .7;
      transform: translateY(-28px);
    }
    @include breakpoint(sm) {
      width: $width * .5;
      transform: translateY(-20px);
    }
  }
  .slogan {
    $width: 450px;
    $height: 35px;

    width: $width;
    height: $height;
    margin-top: 10px;

    @include breakpoint(lg) {
      width: $width * .85;
      height: $height * .85;
      margin-top: 20px;
    }
    @include breakpoint(md) {
      width: $width * .75;
      height: $height * .75;
      margin-top: 30px;
    }
    @include breakpoint(sm) {
      width: $width * .55;
      height: $height * .55;
      margin-top: 40px;
    }

    .text-wrap {
      display: flex;
      justify-content: space-between;
      height: 100%;
      backface-visibility: hidden;
    }
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

  .row > div {
    @include breakpoint(sm) {
      justify-content: space-between;
      height: 400px;
    }
  }
  .dao {
    $width: 280px;

    width: $width;

    @include breakpoint(lg) {
      width: $width * .85;
    }
    @include breakpoint(md) {
      width: $width * .7;
    }
    @include breakpoint(sm) {
      width: $width * .3;
    }
  }
  .uni {
    $width: 320px;

    left: -60px !important; // Override Parallax.js attribute style
    width: $width;

    @include breakpoint(lg) {
      width: $width * .85;
    }
    @include breakpoint(md) {
      width: $width * .6;
    }
    @include breakpoint(sm) {
      left: -20px !important;
      width: $width * .3;
    }
  }
  .dizni {
    $width: 280px;

    width: $width;

    @include breakpoint(lg) {
      width: $width * .85;
    }
    @include breakpoint(md) {
      width: $width * .6;
    }
    @include breakpoint(sm) {
      width: $width * .3;
    }
  }
  .bazzi {
    $width: 330px;

    left: 60px !important; // Override Parallax.js attribute style
    width: $width;

    @include breakpoint(lg) {
      width: $width * .85;
    }
    @include breakpoint(md) {
      width: $width * .6;
    }
    @include breakpoint(sm) {
      left: 20px !important;
      width: $width * .3;
    }
  }
}
.scroll-down {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  width: 50px;
  height: 100px;
  margin: auto;
  font-size: 26px;
  color: rgba(#B3B3B3, .85);
  transition: opacity .2s linear;

  @include breakpoint(sm) {
    bottom: 30px;
  }

  &.hidden {
    opacity: 0;
  }
  .animation-wrap {
    opacity: 0;
  }
}
</style>
