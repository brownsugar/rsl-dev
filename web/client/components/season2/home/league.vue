<template>
  <section class="league py-4">
    <v-container class="py-16">
      <v-row>
        <v-col md="12">
          <h2 class="text-h2 font-weight-bold mb-6">
            今年夏天，跑跑年度盛大賽事來襲！
          </h2>
          <div class="stats d-flex justify-center justify-lg-start mt-15">
            <div
              v-for="(stat, i) in stats"
              :key="i"
              class="item"
            >
              <span
                class="text-h2 font-weight-black d-block d-lg-inline mr-2"
              >{{ stat.value }}</span>
              <span>{{ stat.unit }}</span>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row class="align-center mt-15">
        <v-col
          cols="12"
          lg="5"
        >
          <v-img
            :aspect-ratio="750 / 800"
            src="~/assets/images/season2/home/summary.jpg"
          />
        </v-col>
        <v-col
          cols="12"
          lg="7"
        >
          <two-line-title
            top="RSL 夢想盃跑跑聯賽"
            bottom="Season 2"
          />
          <div class="text-h6 font-weight-regular mt-5">
            <p>
              2020 年，RSL 夢想盃跑跑聯賽第一季以「重啟夢想，重燃渴望」口號誕生，並且於 8/16 日順利落幕，產生了冠軍隊伍「打醬油」，不僅成就了廣大跑跑卡丁車玩家的電競夢，也讓許多電競迷留下了深刻且美好的回憶。
            </p>
            <p>
              還沒忘記第一季聯賽的感動，2021 年，RSL 賽事聯盟團隊不被疫情阻撓，持續邀請新成員加入，再度聯手為跑跑卡丁車玩家打造更專業的電競舞台，並且提供更豐富的聯賽內容和更多精美獎項！
            </p>
          </div>
          <h4 class="text-h5 mt-10 mb-8">
            <fa :icon="['duotone', 'quote-left']" />
            <span class="mx-4">夢想啟程，再造傳奇</span>
            <fa :icon="['duotone', 'quote-right']" />
          </h4>
          <div class="text-h6 font-weight-regular">
            <p>
              《RSL 夢想盃跑跑聯賽 第二賽季》將於 6/17（四）12:00 起於全新電競社交平台 PLANET9 上開放報名！
            </p>
            <p>
              因應全民共同防疫需求，本季賽事全程採線上競賽方式進行。本次賽事邀請到 Twitch、曜越科技、PLANET9、PredatorShot、HyperX、Philips Monitors、競及電競以及中華電子競技教育協會等各大品牌共襄盛舉，大方放送各種好康給喜愛競速的玩家朋友們。
            </p>
            <p>
              豪華豐富的周邊獎勵包括幻銀 Argent K5 RGB 機械式鍵盤（由 TT 曜越贊助）、Philips 電競螢幕（由 AOC 贊助）以及 HyperX Cloud Revolver 7.1 電競耳機（由 HyperX 贊助）等，總獎金更是高達六萬元整，想要在賽道上甩出名號的玩家們絕對不能錯過！
            </p>
            <!-- <v-btn
              class="mt-6"
              color="secondary"
              large
              dark
            >
              查看完整賽事資訊
              <fa
                class="ml-2"
                :icon="['duotone', 'chevrons-right']"
              />
            </v-btn> -->
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import TwoLineTitle from '~/components/season2/common/two-line-title'

export default {
  name: 'League',
  components: {
    TwoLineTitle
  },
  props: {},
  data: () => ({
    stats: [
      { value: '9,000+', unit: '追蹤數' },
      { value: '350,000+', unit: '觀看數' },
      { value: '250+', unit: '參賽人次' }
    ]
  }),
  computed: {},
  watch: {},
  mounted () {
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.stats {

  .item {
    position: relative;
    font-size: 30px;

    &:not(:last-child) {
      padding-right: 30px;
      margin-right: 30px;

      &::after {
        position: absolute;
        top: 0;
        right: 0;
        display: block;
        width: 3px;
        height: 100%;
        content: '';
        background: var(--v-primary-base);
      }
    }
  }
}
</style>
