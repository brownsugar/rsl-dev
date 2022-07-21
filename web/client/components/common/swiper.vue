<template>
  <swiper
    ref="swiper"
    v-intersect="intersectHandler"
    :options="swiperOptions"
    @slide-change="indexChangeHandler"
  >
    <swiper-slide
      v-for="(item, i) in items"
      :key="i"
      @click.native="slideTo(i)"
    >
      <slot
        name="slide"
        :i="i"
        :item="item"
        :active-index="activeIndex"
      />
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.min.css'

export default {
  name: 'SwiperSlides',
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    items: {
      type: Array,
      default: () => []
    },
    breakpoints: {
      type: Array,
      default: () => [{
        slidesPerView: 6,
        spaceBetween: 32
      }]
    },
    initialIndex: {
      type: [Number, String],
      default: 0
    },
    forceInitial: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    intersectionFired: false,
    activeIndex: 0
  }),
  computed: {
    swiperOptions () {
      const options = {
        initialSlide: 0,
        centeredSlides: true,
        simulateTouch: false,
        breakpoints: {}
      }
      if (this.forceInitial) {
        options.initialSlide = this.initialIndex
      }
      const breakpointKeys = Object.keys(this.$vuetify.breakpoint.thresholds)
      this.breakpoints.forEach((breakpoint, i) => {
        if (i === 0) {
          // sm only
          for (const key in breakpoint) {
            options[key] = breakpoint[key]
          }
        } else {
          // md and up
          const key = breakpointKeys[i - 1]
          if (key) {
            const threshold = this.$vuetify.breakpoint.thresholds[key]
            options.breakpoints[threshold] = breakpoint
          }
        }
      })
      return options
    },
    swiper () {
      return this.$refs.swiper.$swiper
    }
  },
  methods: {
    intersectHandler (entries) {
      const isIntersecting = entries[0].isIntersecting
      if (isIntersecting && !this.intersectionFired) {
        this.intersectionFired = true
        if (this.forceInitial) {
          this.activeIndex = Number(this.initialIndex)
        } else {
          this.swiper.slideTo(this.initialIndex, 500)
        }
      }
    },
    indexChangeHandler () {
      const index = this.swiper.realIndex
      this.activeIndex = index
    },
    prev () {
      let index = this.activeIndex - 1
      if (index < 0) {
        index = this.items.length - 1
      }
      this.swiper.slideTo(index)
    },
    next () {
      let index = this.activeIndex + 1
      if (index > this.items.length - 1) {
        index = 0
      }
      this.swiper.slideTo(index)
    },
    slideTo (index) {
      const realIndex = this.activeIndex
      if (index !== realIndex) {
        this.swiper.slideTo(index)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper-slide {
  cursor: pointer;
  opacity: .5;
  transition: opacity 1s;

  &.swiper-slide-prev,
  &.swiper-slide-next {
    opacity: .75;
  }
  &.swiper-slide-active {
    cursor: default;
    opacity: 1;
  }
}
</style>
