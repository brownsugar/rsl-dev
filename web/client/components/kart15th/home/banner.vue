<template>
  <section
    class="banner d-flex flex-column align-center"
    :class="{ ready, mobile: $md.mobile() }"
    :style="{ '--vh': viewHeight }"
  >
    <div class="banner-inner fill-height">
      <v-fade-transition>
        <div
          v-if="!ready"
          class="fill-height d-flex justify-center align-center"
        >
          <v-progress-circular
            :size="50"
            color="primary"
            indeterminate
          />
        </div>
      </v-fade-transition>
      <div class="layer background d-flex">
        <div
          v-for="side in ['left', 'right']"
          :key="side"
          :class="side"
        >
          <div class="halo" />
          <div class="light">
            <img :src="require(`~/assets/images/kart15th/home/lights_${side}@2x.png`)">
          </div>
          <div class="light-tube">
            <img :src="require(`~/assets/images/kart15th/home/light_tubes_${side}@2x.png`)">
          </div>
        </div>
      </div>
      <div class="layer character d-flex justify-space-between align-end">
        <div class="bazzi">
          <img src="~/assets/images/kart15th/home/bazzi@2x.png">
        </div>
        <div class="dao">
          <img src="~/assets/images/kart15th/home/dao@2x.png">
        </div>
      </div>
      <div class="layer slogan">
        <div class="text-wrap">
          <img class="left" src="~/assets/images/kart15th/home/slogan_left@2x.png" alt="群雄爭霸">
          <img class="right" src="~/assets/images/kart15th/home/slogan_right@2x.png" alt="角逐巔峰">
        </div>
        <span>群雄爭霸，角逐巔峰</span>
      </div>
      <div class="layer logo d-flex justify-center align-center">
        <div class="rsl">
          <img src="~/assets/images/rsl/rsl-color-dark.svg" alt="RSL 賽事聯盟">
          <span>RSL 賽事聯盟</span>
        </div>
      </div>
      <div class="layer main d-flex flex-column justify-center justify-md-end align-center">
        <h1 class="title d-flex">
          <div class="left">
            <img src="~/assets/images/kart15th/home/title-1@2x.png" alt="15">
          </div>
          <div class="right d-flex flex-column justify-center">
            <img class="top" src="~/assets/images/kart15th/home/title-2@2x.png" alt="周年">
            <img class="bottom" src="~/assets/images/kart15th/home/title-3@2x.png" alt="經典個人賽">
          </div>
          <span>跑跑卡丁車 15 周年經典個人賽</span>
        </h1>
        <div class="subtitle">
          <img class="right" src="~/assets/images/kart15th/home/subtitle@2x.png" alt="RE:START KARTRIDER LEAGUE">
          <span>RE:START KARTRIDER LEAGUE</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Banner',
  data: () => ({
    ready: false,
    viewHeight: ''
  }),
  mounted () {
    this.initViewSize()
    this.initBanner()
  },
  beforeDestroy () {
  },
  methods: {
    initViewSize () {
      this.viewHeight = window.innerHeight * 0.01 + 'px'
    },
    async initBanner () {
      await this.$nextTick()
      this.startIntro()
    },
    startIntro () {
      const sceneLightTubes =
        this.$anime.timeline({
          easing: 'steps(9)',
          duration: 1600,
          autoplay: false,
          complete (anim) {
            sceneLights.play()
          }
        })
          .add({
            targets: '.background .left .light-tube img',
            keyframes: [
              { clipPath: 'polygon(0 0, 0 0, 0 50%, 0 100%, 0 100%)' },
              { clipPath: 'polygon(0 0, 5% 0, 60% 50%, 5% 100%, 0 100%)' },
              { clipPath: 'polygon(0 0, 23% 0, 72% 50%, 23% 100%, 0 100%)' },
              { clipPath: 'polygon(0 0, 40% 0, 80% 50%, 40% 100%, 0 100%)' },
              { clipPath: 'polygon(0 0, 50% 0, 85% 50%, 50% 100%, 0 100%)' },
              { clipPath: 'polygon(0 0, 60% 0, 90% 50%, 60% 100%, 0 100%)' },
              { clipPath: 'polygon(0 0, 65% 0, 94% 50%, 65% 100%, 0 100%)' },
              { clipPath: 'polygon(0 0, 72% 0, 97% 50%, 72% 100%, 0 100%)' },
              { clipPath: 'polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%)' }
            ]
          }, 0)
          .add({
            targets: '.background .right .light-tube img',
            keyframes: [
              { clipPath: 'polygon(100% 0, 100% 100%, 100% 100%, 100% 50%, 100% 0)' },
              { clipPath: 'polygon(100% 0, 100% 100%, 95% 100%, 40% 50%, 95% 0)' },
              { clipPath: 'polygon(100% 0, 100% 100%, 77% 100%, 28% 50%, 77% 0)' },
              { clipPath: 'polygon(100% 0, 100% 100%, 60% 100%, 20% 50%, 60% 0)' },
              { clipPath: 'polygon(100% 0, 100% 100%, 50% 100%, 15% 50%, 50% 0)' },
              { clipPath: 'polygon(100% 0, 100% 100%, 40% 100%, 10% 50%, 40% 0)' },
              { clipPath: 'polygon(100% 0, 100% 100%, 35% 100%, 6% 50%, 35% 0)' },
              { clipPath: 'polygon(100% 0, 100% 100%, 28% 100%, 3% 50%, 28% 0)' },
              { clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 0 50%, 0 0)' }
            ]
          }, 0)
          .add({
            targets: '.background .halo',
            easing: 'linear',
            opacity: [0, 1]
          }, 0)

      const sceneLights =
        this.$anime.timeline({
          easing: 'linear',
          duration: 300,
          delay: 300,
          autoplay: false,
          complete (anim) {
            sceneLogo.play()
          }
        })
          .add({
            targets: '.background .light img',
            opacity: [0, 1]
          })

      const sceneLogo =
        this.$anime.timeline({
          targets: '.logo img',
          easing: 'easeOutBack',
          duration: 500,
          delay: 300,
          autoplay: false,
          complete (anim) {
            sceneTitles.play()
          }
        })
          .add({
            scale: [2.5, 1],
            opacity: [0, 1]
          })

      const sceneTitles =
        this.$anime.timeline({
          easing: 'easeOutQuint',
          duration: 600,
          autoplay: false,
          update (anim) {
            if (anim.progress > 90 && sceneSlogan.paused) {
              sceneSlogan.play()
            }
          }
        })
          .add({
            targets: '.title .left img',
            delay: 200,
            translateX: ['-100%', '0%']
          })
          .add({
            targets: '.title .right img.top',
            translateX: ['-100%', '0%']
          }, '-=300')
          .add({
            targets: '.title .right img.bottom',
            translateX: ['-100%', '0%']
          }, '-=400')
          .add({
            targets: '.subtitle img',
            easing: 'linear',
            duration: 800,
            opacity: [0, 1]
          })

      const sceneSlogan =
        this.$anime.timeline({
          targets: '.slogan img',
          easing: 'linear',
          duration: 150,
          autoplay: false,
          complete (anim) {
            sceneCharacters.play()
          }
        })
          .add({
            opacity: [0, 0.5]
          })
          .add({
            opacity: [0.3, 0.7]
          }, '+=100')
          .add({
            opacity: [0.2, 0.8]
          }, '+=150')
          .add({
            duration: 150,
            opacity: [0.5, 1]
          }, '+=200')

      const sceneCharacters =
        this.$anime.timeline({
          easing: 'easeOutCubic',
          duration: 700,
          autoplay: false
        })
          .add({
            targets: '.character .bazzi img',
            delay: 300,
            translateX: ['-120%', 0],
            translateY: ['120%', 0]
          })
          .add({
            targets: '.character .dao img',
            translateX: ['120%', 0],
            translateY: ['120%', 0]
          }, '-=500')

      sceneLightTubes.play()
      this.ready = true
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

  &.mobile {
    height: calc(var(--vh, 1vh) * 100);
  }
}
.banner-inner {
  --banner-width: 1920px;

  @include breakpoint(xl) {
    --banner-width: 1600px;
  }
  @include breakpoint(lg) {
    --banner-width: 1200px;
  }
  @include breakpoint(md) {
    --banner-width: 800px;
  }
  @include breakpoint(sm) {
    --banner-width: 500px;
  }

  position: relative;
  width: var(--banner-width);

  span {
    position: absolute;
    display: inline-block;
    text-indent: -9999px;
  }
  img {
    backface-visibility: hidden;
    pointer-events: none;
  }
}
.layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;

  .ready & {
    visibility: visible;
  }
}
.background {

  @include breakpoint(sm) {
    padding-bottom: 10px;
  }

  > div {
    --distance: 400px;

    @include breakpoint(lg) {
      --distance: 250px;
    }
    @include breakpoint(md) {
      --distance: 150px;
    }
    @include breakpoint(sm) {
      --distance: 50px;
    }

    position: relative;
    width: 50%;
  }
  .left {
    margin-right: var(--distance);

    .halo {
      left: var(--offset);
      background: radial-gradient(#B70009 0%, #730006 23%, #4A0004 40%, #000 70%);
    }
    .light {

      img {
        left: var(--offset);
      }
    }
    .light-tube {

      img {
        right: 0;
      }
    }
  }
  .right {
    display: flex;
    justify-content: flex-end;
    margin-left: var(--distance);

    .halo {
      right: var(--offset);
      background: radial-gradient(#006EB0 0%, #004873 23%, #002E4A 40%, #000 70%);
    }
    .light {

      img {
        right: var(--offset);
      }
    }
    .light-tube {

      img {
        left: 0;
      }
    }
  }
  .halo {
    --offset: calc(var(--banner-width) * -.15);

    position: absolute;
    top: 0;
    bottom: 0;
    width: calc(var(--banner-width) * .7);
    height: calc(var(--banner-width) * .7 * .75);
    margin: auto;
    border-radius: 50%;
    mix-blend-mode: screen;

    @include breakpoint(md) {
      --offset: -50px;

      top: auto;
      bottom: 60px;
    }
  }
  .light {
    position: absolute;
    display: flex;
    align-items: center;
    height: 100%;
    mix-blend-mode: screen;

    @include breakpoint(md) {
      align-items: flex-end;
    }

    img {
      --offset: -110px;

      @include breakpoint(xl) {
        --offset: -160px;
      }
      @include breakpoint(lg) {
        --offset: -70px;
      }
      @include breakpoint(md) {
        --offset: -30px;

        top: -52px;
      }
      @include breakpoint(sm) {
        --offset: 25px;

        top: -32px;
      }

      position: relative;
      top: calc(var(--banner-width) * .151);
      width: calc(var(--banner-width) * .5 * .9); // 90% Width of light tubes
    }
  }
  .light-tube {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    @include breakpoint(md) {
      align-items: flex-end;
    }

    img {
      position: absolute;
      width: calc(var(--banner-width) * .5);
    }
  }
}
.character {
  --px-rate: .1;

  padding: 0 calc(var(--banner-width) * var(--px-rate)) 40px;

  @include breakpoint(md) {
    --px-rate: .15;
  }
  @include breakpoint(sm) {
    --px-rate: .18;
  }

  img {
    --width-rate: .23;

    width: calc(var(--banner-width) * var(--width-rate));
  }
}
.slogan {
  padding-top: 80px;

  .text-wrap {
    display: flex;
    justify-content: center;

    img {
      --width-rate: .23;

      width: calc(var(--banner-width) * var(--width-rate));
      image-rendering: -webkit-optimize-contrast;

      @include breakpoint(lg) {
        --width-rate: .25;
      }
      @include breakpoint(md) {
        --width-rate: .33;
      }
      @include breakpoint(sm) {
        width: calc(50vw - 10px);
      }

      + img {
        margin-left: 50px;

        @include breakpoint(md) {
          margin-left: 30px;
        }
        @include breakpoint(sm) {
          margin-left: 10px;
        }
      }
    }
  }
}
.logo {

  .rsl {
    margin-top: -50px;

    @include breakpoint(md) {
      margin-top: -150px;
    }

    img {
      height: calc(100vh * .3);
      min-height: calc(var(--banner-width) * .15);
      filter: drop-shadow(7px 7px 7px rgba(#000, .75));

      @include breakpoint(md) {
        --width-rate: .43;

        width: calc(var(--banner-width) * var(--width-rate));
        max-width: 80vw;
        height: auto;
        min-height: auto;
      }
      @include breakpoint(sm) {
        --width-rate: .6;
      }
    }
  }
}
.main {
  padding-bottom: 60px;

  @include breakpoint(md) {
    padding-top: 200px;
    padding-bottom: 0;
  }

  img {
    display: block;
    width: 100%;
    image-rendering: -webkit-optimize-contrast;
  }
  .title {
    --width-rate: .25;

    @include breakpoint(md) {
      --width-rate: .38;
    }
    @include breakpoint(sm) {
      --width-rate: .58;
    }

    width: calc(var(--banner-width) * var(--width-rate));

    .left,
    .right {
      overflow: hidden;
    }
    img + img {
      margin-top: 2px;
    }
  }
  .subtitle {
    --width-rate: .2;

    @include breakpoint(md) {
      --width-rate: .33;
    }
    @include breakpoint(sm) {
      --width-rate: .53;
    }

    width: calc(var(--banner-width) * var(--width-rate));
    margin-top: 4px;
  }
}
</style>
