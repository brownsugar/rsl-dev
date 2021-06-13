<template>
  <div class="hero-banner">
    <div class="stripes">
      <div class="horizontal">
        <div class="stripe right" />
        <div class="stripe left" />
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
        <div class="ribbon thick">
          <img src="~/assets/images/season2/home/hero_ribbon_thick.svg">
        </div>
        <div class="ribbon thin">
          <img src="~/assets/images/season2/home/hero_ribbon_thin.svg">
        </div>
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
        <img src="~/assets/images/season2/home/hero_slogan_left.svg" alt="夢想啟程">
        <img src="~/assets/images/season2/home/hero_slogan_x.svg" alt="，">
        <img src="~/assets/images/season2/home/hero_slogan_right.svg" alt="再造傳奇">
        <span>夢想啟程，再造傳奇</span>
      </h2>
      <div class="restart">
        RE:START KARTRIDER LEAGUE
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroBanner',
  components: {},
  props: {},
  data: () => ({
  }),
  computed: {},
  watch: {},
  mounted () {
  },
  methods: {}
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
  background: image('season2/home/hero_bg.png') center/cover no-repeat;

  > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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
  .left {
    transform: rotateY(-180deg);
  }
  .top {
    flex-basis: calc(#{$flex-basis}vh + #{$all-stripe-y-offset});
  }
  .bottom {
    flex-basis: calc(#{$flex-basis}vh - #{$all-stripe-y-offset});
    transform: rotateX(-180deg);
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
  }
  .bottom {
    transform: rotate(180deg) translateY(-10px);
  }
  .ribbon {
    display: flex;
    justify-content: center;
    width: 110vw;

    img {
      display: block;
    }
  }
  .thin {
    margin-top: -11%;
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
</style>
