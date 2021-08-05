<template>
  <section class="hosts grey lighten-4 py-16">
    <v-container class="py-4">
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <two-line-title
            top="第二賽季"
            bottom="主播賽評陣容"
          />
        </v-col>
        <v-col
          class="d-flex justify-end align-end"
          cols="12"
          md="6"
        >
          <v-btn
            color="secondary"
            x-large
            icon
            @click="prev"
          >
            <fa icon="fa-solid fa-chevron-left" />
          </v-btn>
          <v-btn
            color="secondary"
            x-large
            icon
            @click="next"
          >
            <fa icon="fa-solid fa-chevron-right" />
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-lazy
      height="500"
      class="mt-2 mt-md-10 mb-4"
    >
      <swiper
        ref="swiper"
        v-intersect="intersectHandler"
        :options="swiperOptions"
        @slide-change="indexChangeHandler"
      >
        <swiper-slide
          v-for="(host, i) in hosts"
          :key="i"
          @click.native="slideTo(i)"
        >
          <host-card
            :host="host"
            :show-info-button="activeSlide === i"
          />
        </swiper-slide>
      </swiper>
    </v-lazy>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import HostCard from './hosts/card'
import TwoLineTitle from '~/components/season2/common/two-line-title'
import hosts from '~/data/season2/hosts'
import 'swiper/css/swiper.min.css'

export default {
  name: 'Hosts',
  components: {
    Swiper,
    SwiperSlide,
    HostCard,
    TwoLineTitle
  },
  props: {},
  data: self => ({
    intersect: {
      active: false,
      fired: false
    },
    activeSlide: 0,
    hosts,
    swiperOptions: {
      initialSlide: 0,
      slidesPerView: 1.2,
      spaceBetween: 10,
      centeredSlides: true,
      simulateTouch: false,
      breakpoints: {
        [self.$vuetify.breakpoint.thresholds.xs]: {
          slidesPerView: 1.5,
          spaceBetween: 10
        },
        [self.$vuetify.breakpoint.thresholds.sm]: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        [self.$vuetify.breakpoint.thresholds.md]: {
          slidesPerView: 4,
          spaceBetween: 30
        }
      }
    }
  }),
  computed: {
    swiper () {
      return this.$refs.swiper.$swiper
    }
  },
  watch: {},
  mounted () {
  },
  methods: {
    intersectHandler (entries) {
      const isIntersecting = entries[0].isIntersecting
      if (isIntersecting && !this.intersect.fired) {
        this.intersect.active = true
        this.intersect.fired = true
        this.swiper.slideTo(3, 500)
      }
    },
    indexChangeHandler () {
      const index = this.swiper.realIndex
      this.activeSlide = index
    },
    prev () {
      let index = this.activeSlide - 1
      if (index < 0) {
        index = this.hosts.length - 1
      }
      this.swiper.slideTo(index)
    },
    next () {
      let index = this.activeSlide + 1
      if (index > this.hosts.length - 1) {
        index = 0
      }
      this.swiper.slideTo(index)
    },
    slideTo (index) {
      const realIndex = this.activeSlide
      if (index !== realIndex) {
        this.swiper.slideTo(index)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.hosts {
  position: relative;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    content: '';
    background: image('rsl/rsl-color-full.svg') center/800px auto no-repeat;
    filter: grayscale(1);
    opacity: .35;
  }
}
.container {
  position: relative;
}
.swiper-slide {
  cursor: pointer;
  opacity: .65;
  transition: opacity 1s;

  &.swiper-slide-prev,
  &.swiper-slide-next {
    opacity: .85;
  }
  &.swiper-slide-active {
    cursor: default;
    opacity: 1;
  }
}
</style>
