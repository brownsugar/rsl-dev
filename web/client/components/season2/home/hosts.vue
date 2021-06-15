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
            <fa :icon="['fas', 'chevron-left']" />
          </v-btn>
          <v-btn
            color="secondary"
            x-large
            icon
            @click="next"
          >
            <fa :icon="['fas', 'chevron-right']" />
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <swiper
      ref="swiper"
      class="mt-2 mt-md-10 mb-4"
      :options="swiperOptions"
    >
      <swiper-slide
        v-for="(host, i) in hosts"
        :key="i"
      >
        <host-card
          :host="host"
        />
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import HostCard from './hosts/card'
import TwoLineTitle from '~/components/season2/common/two-line-title'
import hosts from '~/data/season2/hosts'
import 'swiper/swiper-bundle.min.css'

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
    hosts,
    swiperOptions: {
      initialSlide: 3,
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
    prev () {
      let index = this.swiper.realIndex - 1
      if (index < 0) {
        index = this.hosts.length - 1
      }
      this.swiper.slideTo(index)
    },
    next () {
      let index = this.swiper.realIndex + 1
      if (index > this.hosts.length - 1) {
        index = 0
      }
      this.swiper.slideTo(index)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
}
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
</style>
