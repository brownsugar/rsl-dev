<template>
  <section class="hosts py-16">
    <two-line-title
      top="夢想盃跑跑聯賽 Season 3"
      bottom="特別嘉賓"
      center
    />
    <p class="text-center mt-6">
      本季聯賽 RSL 賽事聯盟特別邀請了人氣實況主，將在 8/27 總決賽當日蒞臨總決賽現場和大家見面，<br>
      同時也將夥同四強隊伍選手及現場觀眾同場飆車互動，想一同目睹世誠和冠緯風采的你絕對不能錯過當日賽事內容！
    </p>
    <v-container class="mt-6">
      <v-row justify="center">
        <v-col
          v-for="item in guests"
          :key="item.name"
          cols="auto"
        >
          <host-card
            :item="item"
            is-guest
          />
        </v-col>
      </v-row>
    </v-container>
    <two-line-title
      class="mt-16"
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
            :item="item"
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
  </section>
</template>

<script>
import HostCard from './hosts/card'
import Swiper from '~/components/common/swiper'
import TwoLineTitle from '~/components/season3/common/two-line-title'
import hosts from '~/data/season3/hosts'
import guests from '~/data/season3/guests'

export default {
  name: 'Hosts',
  components: {
    Swiper,
    HostCard,
    TwoLineTitle
  },
  data: () => ({
    hosts,
    guests,
    swiperBreakpoints: [
      {
        slidesPerView: 1.3,
        spaceBetween: 12
      },
      {
        slidesPerView: 2.5,
        spaceBetween: 20
      },
      {
        slidesPerView: 4,
        spaceBetween: 20
      },
      {
        slidesPerView: 5.3,
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
