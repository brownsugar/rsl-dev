<template>
  <section
    class="banner"
    :class="{ ready, mobile: $md.mobile() }"
    :style="{ '--vh': viewHeight }"
  >
    <div class="layer scene background">
      <div class="sky fill-height" />
    </div>
    <v-fade-transition>
      <div
        v-if="!ready"
        class="loading fill-width fill-height d-flex justify-center align-center"
      >
        <v-progress-circular
          :size="50"
          color="primary"
          indeterminate
        />
      </div>
    </v-fade-transition>
    <div class="layer scene castle">
      <div class="building fill-height" />
      <div class="lights-effect fill-height" />
    </div>
    <div class="layer scene platform">
      <div class="stage fill-height" />
      <div class="lights-effect fill-height" />
    </div>
    <div class="layer arrows d-flex justify-space-between align-center pt-0 pt-md-10 pb-10 pb-sm-0">
      <div
        v-for="dir in ['left', 'right']"
        :key="dir"
        class="arrow"
        :class="dir"
      >
        <img src="~/assets/images/season3/home/banner/arrow.png">
      </div>
    </div>
    <div class="layer decoration">
      <div class="splash fill-height" />
    </div>
    <div class="layer main d-flex flex-column justify-space-around justify-md-center align-center pt-0 pt-md-10">
      <div class="d-flex flex-column align-center">
        <div class="rsl">
          <img src="~/assets/images/rsl/rsl-white.svg" alt="RSL 賽事聯盟">
          <span>RSL 賽事聯盟</span>
        </div>
        <h1 class="title mt-2 mt-lg-3">
          <img src="~/assets/images/season3/home/banner/title.png" alt="夢想盃跑跑聯賽 Season 3">
          <span>夢想盃跑跑聯賽 Season 3</span>
        </h1>
        <h2 class="subtitle font-weight-bold text-no-wrap">
          RE:START KARTRIDER LEAGUE
        </h2>
      </div>
      <div class="character mt-0 mt-md-12 d-flex align-end">
        <div class="marid">
          <img src="~/assets/images/season3/home/banner/marid@2x.png">
        </div>
        <div class="dao">
          <img src="~/assets/images/season3/home/banner/dao@2x.png">
        </div>
        <div class="dizni">
          <img src="~/assets/images/season3/home/banner/dizni@2x.png">
        </div>
      </div>
    </div>
    <div class="layer slogan d-flex align-center pt-0 pt-md-10 pb-10 pb-sm-0">
      <div class="wrap fill-width d-flex justify-space-between">
        <img class="left" src="~/assets/images/season3/home/banner/slogan_left@2x.png" alt="超越極限">
        <img class="right" src="~/assets/images/season3/home/banner/slogan_right@2x.png" alt="挑戰新王">
      </div>
      <span>超越極限，挑戰新王</span>
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
    this.init()
  },
  methods: {
    init () {
      this.initViewSize()
      const intro = this.initIntro()
      setTimeout(() => {
        this.ready = true
        intro.play()
      }, 1000)
    },
    initViewSize () {
      this.viewHeight = window.innerHeight * 0.01 + 'px'
    },
    initIntro () {
      const sceneStage =
        this.$anime({
          targets: '.platform .stage',
          translateY: ['100px', '0'],
          opacity: [0, 1],
          easing: 'easeOutCubic',
          duration: 600,
          autoplay: false,
          update (anim) {
            if (anim.progress > 30 && sceneBuilding.paused) {
              sceneBuilding.play()
            }
            if (anim.progress > 60 && sceneLights.paused) {
              sceneLights.play()
            }
          }
        })

      const sceneLights =
        this.$anime({
          targets: '.lights-effect',
          opacity: [0, 1],
          easing: 'linear',
          duration: 500,
          autoplay: false
        })

      const sceneBuilding =
        this.$anime({
          targets: '.castle .building',
          translateY: ['100px', '0'],
          opacity: [0, 1],
          easing: 'easeOutCubic',
          duration: 600,
          autoplay: false,
          update (anim) {
            if (anim.progress > 80 && sceneRSL.paused) {
              sceneRSL.play()
            }
          }
        })

      const sceneRSL =
        this.$anime({
          targets: '.main .rsl',
          translateY: ['30px', '0'],
          opacity: [0, 1],
          easing: 'easeOutCubic',
          duration: 300,
          autoplay: false,
          update (anim) {
            if (anim.progress > 50 && sceneTitle.paused) {
              sceneTitle.play()
            }
          }
        })

      const maskImageAttr = 'maskImage' in document.body.style
        ? 'maskImage'
        : 'webkitMaskImage'
      const sceneTitle =
        this.$anime({
          targets: '.main .title',
          [maskImageAttr]: [
            'radial-gradient(circle at -100% 0%, rgb(0, 0, 0) -100%, rgba(0, 0, 0, 0) 50%)',
            'radial-gradient(circle at -100% 0%, rgb(0, 0, 0) 100%, rgba(0, 0, 0, 0) 100%)'
          ],
          easing: 'easeOutCubic',
          duration: 800,
          autoplay: false,
          complete (anim) {
            sceneSubTitle.play()
          }
        })

      const subTitleBaseSpacing = this.$breakpoint.is.xs
        ? 5
        : 10
      const sceneSubTitle =
        this.$anime({
          targets: '.main .subtitle',
          letterSpacing: [
            `${subTitleBaseSpacing + 5}px`,
            `${subTitleBaseSpacing}px`
          ],
          opacity: [0, 1],
          easing: 'easeOutCubic',
          duration: 800,
          autoplay: false,
          update (anim) {
            if (anim.progress > 80 && sceneArrows.paused) {
              sceneArrows.play()
            }
          }
        })

      const sceneArrows =
        this.$anime.timeline({
          easing: 'easeOutCubic',
          duration: 600,
          autoplay: false,
          update (anim) {
            if (anim.progress > 60 && sceneSlogan.paused) {
              sceneSlogan.play()
            }
          }
        })
          .add({
            targets: '.arrows .left',
            translateX: ['-100%', '0'],
            opacity: [0, 1]
          })
          .add({
            targets: '.arrows .right',
            translateX: ['100%', '0'],
            opacity: [0, 1]
          }, 0)

      const sceneSlogan =
        this.$anime.timeline({
          easing: 'easeOutCubic',
          duration: 500,
          autoplay: false,
          update (anim) {
            if (anim.progress > 50 && sceneRSL.paused) {
              sceneCharacter.play()
            }
          }
        })
          .add({
            targets: '.slogan .left',
            translateX: ['-100px', '0'],
            opacity: [0, 1]
          })
          .add({
            targets: '.slogan .right',
            translateX: ['100px', '0'],
            opacity: [0, 1]
          }, 0)

      const sceneCharacter =
        this.$anime.timeline({
          easing: 'easeOutCubic',
          duration: 600,
          autoplay: false,
          update (anim) {
            if (anim.progress > 50 && sceneRSL.paused) {
              sceneDecoration.play()
            }
          }
        })
          .add({
            targets: '.character .dao',
            translateX: ['300px', '0'],
            translateY: ['100px', '0'],
            scale: [0, 1]
          })
          .add({
            targets: '.character .marid',
            translateX: ['100px', '0'],
            opacity: [0, 1]
          }, 400)
          .add({
            targets: '.character .dizni',
            translateX: ['-100px', '0'],
            opacity: [0, 1]
          }, 400)

      const sceneDecoration =
        this.$anime({
          targets: '.decoration .splash',
          opacity: [0, 0.9],
          easing: 'linear',
          duration: 2000,
          autoplay: false
        })

      return sceneStage
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
.loading {
  position: absolute;
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
.scene {

  > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
}
.background {
  visibility: visible;
  background: #0B1635;

  .sky {
    background: linear-gradient(to bottom, #00A4E4 0%, #FFF 50%);
    mix-blend-mode: hard-light;
  }
}
.lights-effect {
  background: image('season3/home/banner/lights_effect.png') center top / cover no-repeat;
  mix-blend-mode: screen;
}
.castle {

  .building {
    background: image('season3/home/banner/castle.png') top 50px center no-repeat;
  }
}
.platform {

  .stage {
    background: image('season3/home/banner/stage.png') top center / cover no-repeat;
  }
  .lights-effect {
    top: 50%;
  }
}
.arrows {

  .arrow {
    // Alternative for linear burn mode
    mix-blend-mode: multiply;
    opacity: .75;

    img {
      --width: 568px;

      @include breakpoint(xl) {
        --width: 460px;
      }
      @include breakpoint(lg) {
        --width: 360px;
      }
      @include breakpoint(md) {
        --width: 300px;
      }
      @include breakpoint(sm) {
        --width: 49vw;
      }

      width: var(--width);
    }
    &.right img {
      transform: rotateZ(180deg);
    }
  }
}
.decoration {

  .splash {
    --duration: 250s;

    @include breakpoint(xl) {
      --duration: 230s;
    }
    @include breakpoint(lg) {
      --duration: 180s;
    }
    @include breakpoint(md) {
      --duration: 150s;
    }
    @include breakpoint(sm) {
      --duration: 130s;
    }

    background: image('season3/home/banner/splash.png') center / cover repeat-x;
    mix-blend-mode: overlay;
    opacity: .9;
    animation: splash var(--duration) infinite;
  }
}
@keyframes splash {

  from { background-position-x: 0; }
  to { background-position-x: -100vw; }
}

.main {

  .rsl {

    img {
      --width: 220px;

      @include breakpoint(xl) {
        --width: 200px;
      }
      @include breakpoint(lg) {
        --width: 175px;
      }
      @include breakpoint(md) {
        --width: 150px;
      }
      @include breakpoint(sm) {
        --width: 25vw;
      }

      width: var(--width);
    }
  }
  .title {

    img {
      --width: 850px;

      @include breakpoint(xl) {
        --width: 800px;
      }
      @include breakpoint(lg) {
        --width: 600px;
      }
      @include breakpoint(md) {
        --width: 560px;
      }
      @include breakpoint(sm) {
        --width: 92.5vw;
      }

      width: var(--width);
    }
  }
  .subtitle {
    --font-size: 1.5em;
    --letter-spacing: 10px;

    @include breakpoint(xl) {
      --font-size: 1.3em;
    }
    @include breakpoint(lg) {
      --font-size: 1.15em;
    }
    @include breakpoint(sm) {
      --font-size: 3vw;
      --letter-spacing: 5px;
    }

    font-size: var(--font-size);
    color: var(--v-primary-darken2);
    text-shadow: 0 1px 1px var(--v-primary-lighten1);
    letter-spacing: var(--letter-spacing);
  }
  .character {

    .marid img {
      --width: 260px;
      --offset: -190px;

      @include breakpoint(xl) {
        --width: 240px;
        --offset: -160px;
      }
      @include breakpoint(lg) {
        --width: 210px;
        --offset: -150px;
      }
      @include breakpoint(md) {
        --width: 190px;
        --offset: -120px;
      }
      @include breakpoint(sm) {
        --width: 30vw;
        --offset: -21vw;
      }

      width: var(--width);
      margin-right: var(--offset);
    }
    .dao {
      position: relative;
      z-index: 1;

      img {
        --width: 520px;

        @include breakpoint(xl) {
          --width: 460px;
        }
        @include breakpoint(lg) {
          --width: 400px;
        }
        @include breakpoint(md) {
          --width: 380px;
        }
        @include breakpoint(sm) {
          --width: 55vw;
        }

        width: var(--width);
      }
    }
    .dizni img {
      --width: 280px;
      --offset: -100px;

      @include breakpoint(xl) {
        --width: 260px;
        --offset: -80px;
      }
      @include breakpoint(lg) {
        --width: 220px;
      }
      @include breakpoint(md) {
        --width: 200px;
        --offset: -70px;
      }
      @include breakpoint(sm) {
        --width: 30vw;
        --offset: -10vw;
      }

      width: var(--width);
      margin-left: var(--offset);
    }
  }
}
.slogan {
  position: absolute;
  z-index: 1;

  .wrap {
    --width: 400px;
    --offset-x: 100px;

    @include breakpoint(xl) {
      --width: 360px;
      --offset-x: 60px;
    }
    @include breakpoint(lg) {
      --width: 285px;
      --offset-x: 40px;
    }
    @include breakpoint(md) {
      --width: 250px;
      --offset-x: 20px;
    }
    @include breakpoint(sm) {
      --width: 47.5vw;
      --offset-x: 0;
    }

    padding-right: var(--offset-x);
    padding-left: var(--offset-x);

    img {
      width: var(--width);
    }
  }
}
</style>
