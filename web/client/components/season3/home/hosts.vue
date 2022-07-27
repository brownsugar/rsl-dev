<template>
  <section class="hosts py-16">
    <two-line-title
      top="夢想盃跑跑聯賽 Season 3"
      bottom="主播賽評陣容"
      center
    />
    <div class="mt-12">
      <swiper
        ref="swiper"
        :items="hosts"
        :breakpoints="swiperBreakpoints"
        initial-index="3"
        force-initial
      >
        <template #slide="{ item }">
          <host-card
            :host="item"
          />
        </template>
      </swiper>
    </div>
    <div class="d-flex justify-center mt-8">
      <v-btn
        color="secondary"
        x-large
        icon
        @click="prev"
      >
        <fa icon="fa-solid fa-chevron-left" />
      </v-btn>
      <v-btn
        class="ml-8"
        color="secondary"
        x-large
        icon
        @click="next"
      >
        <fa icon="fa-solid fa-chevron-right" />
      </v-btn>
    </div>
    <two-line-title
      class="mt-16"
      top="夢想盃跑跑聯賽 Season 3"
      bottom="表演賽嘉賓"
      center
    />
    <v-container class="mt-12">
      <coming-soon
        message="更多資訊，八月中旬公開。"
        image="go-ahead"
        width="450"
      />
    </v-container>
  </section>
</template>

<script>
import HostCard from './hosts/card'
import Swiper from '~/components/common/swiper'
import TwoLineTitle from '~/components/season3/common/two-line-title'
import ComingSoon from '~/components/common/coming-soon'
import hosts from '~/data/season3/hosts'

export default {
  name: 'Hosts',
  components: {
    Swiper,
    HostCard,
    TwoLineTitle,
    ComingSoon
  },
  data: () => ({
    hosts,
    swiperBreakpoints: [
      {
        slidesPerView: 1.8,
        spaceBetween: 16
      },
      {
        slidesPerView: 2.8,
        spaceBetween: 20
      },
      {
        slidesPerView: 4,
        spaceBetween: 20
      },
      {
        slidesPerView: 5.5,
        spaceBetween: 24
      },
      {
        slidesPerView: 6,
        spaceBetween: 32
      }
    ]
  }),
  methods: {
    prev () {
      this.$refs.swiper?.prev()
    },
    next () {
      this.$refs.swiper?.next()
    }
  }
}
</script>
