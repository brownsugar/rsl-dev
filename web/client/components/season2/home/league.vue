<template>
  <section class="league py-4">
    <v-container class="py-16">
      <v-row>
        <v-col md="12">
          <h2 class="text-h3 text-md-h2 font-weight-bold mb-6">
            今年夏天，跑跑年度盛大賽事來襲！
          </h2>
          <div class="stats d-block d-md-flex justify-center justify-lg-start mt-10 mt-md-15">
            <div
              v-for="(stat, i) in stats"
              :key="i"
              class="item text-center text-md-left"
              :class="[i < stats.length - 1 ? 'mr-0 mb-8 pr-0 mr-md-8 mb-md-0 pr-md-8' : '']"
            >
              <span
                class="text-h3 text-md-h2 font-weight-black d-block d-lg-inline mr-2"
              >{{ stat.value }}</span>
              <span class="text-h5 text-md-h4">{{ stat.unit }}</span>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row class="mt-10 mt-md-15">
        <v-col
          class="align-self-start"
          cols="12"
          lg="5"
          xl="6"
        >
          <v-img
            :aspect-ratio="750 / 800"
            src="~/assets/images/season2/home/summary.jpg"
          />
        </v-col>
        <v-col
          class="align-self-center pa-6 pb-15 pb-xl-6"
          cols="12"
          lg="7"
          xl="6"
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
              還沒忘記第一季聯賽的感動，2021 年，RSL 賽事聯盟團隊不被疫情阻撓，再度聯手為跑跑卡丁車玩家打造更專業的電競舞台，並且提供更豐富的聯賽內容和更多精美獎項！
            </p>
          </div>
          <h4 class="text-h5 mt-12 mb-8">
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
            <v-btn
              class="mt-6"
              color="secondary"
              to="/season2/rules"
              large
              dark
            >
              查看完整聯賽資訊
              <fa
                class="ml-2"
                :icon="['duotone', 'chevrons-right']"
              />
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col
          cols="12"
          lg="5"
          xl="4"
        >
          <div
            v-for="block in blocks"
            :key="block.type"
            class="white--text px-10 px-xl-15 py-14"
            :class="['block-' + block.type, block.type]"
          >
            <div
              class="text-h3 font-weight-black text-uppercase"
              :class="[block.small ? 'text-h5 text-md-h4' : 'text-h4 text-md-h3']"
            >
              {{ block.title }}<br>@{{ $config.rsl[block.type].username }}
            </div>
            <div
              class="mt-6"
              :class="[block.small ? 'text-h6 text-md-h5' : 'text-h5 text-md-h4']"
            >
              {{ block.description }}
            </div>
            <v-btn
              class="mt-10"
              :color="block.type + ' darken-1'"
              :href="$config.rsl[block.type].url"
              target="_blank"
              large
              dark
            >
              {{ block.action }}
              <fa
                class="ml-2"
                size="lg"
                :icon="['fas', 'right-long']"
              />
            </v-btn>
          </div>
        </v-col>
        <v-col
          cols="12"
          lg="7"
          xl="8"
        >
          <div class="block-iframe">
            <v-lazy>
              <v-responsive :aspect-ratio="16/9">
                <iframe
                  class="fill-width fill-height"
                  :src="twitchIframeUrl"
                  frameborder="0"
                  allowfullscreen="true"
                  scrolling="no"
                />
              </v-responsive>
            </v-lazy>
          </div>
          <div class="block-text px-2 px-lg-10 py-8">
            <p>
              RSL 夢想盃跑跑聯賽 Season 2 指定使用 Twitch 為官方唯一直播平台，每週賽事在 Twitch 頻道獨家轉播，立即按下追隨，精彩比賽、好康抽獎不容錯過！
              <br>
              賽事結束隔週將於 YouTube 頻道中陸續發佈賽事重播檔以及精華片段剪輯，現在就訂閱起來，熱血賽事隨時重溫！
            </p>
            <v-btn
              class="mt-2"
              color="youtube darken-1"
              :href="$config.rsl.youtube.url"
              target="_blank"
              large
              dark
            >
              前往 YouTube 頻道
              <fa
                class="ml-2"
                size="lg"
                :icon="['fas', 'right-long']"
              />
            </v-btn>
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
    ],
    blocks: [
      {
        type: 'twitch',
        title: '官方 Twitch 頻道',
        description: '每周聯賽獨家直播',
        action: '立即追隨'
      },
      {
        type: 'facebook',
        title: '官方 Facebook 專頁',
        description: '聯賽情報即時掌握',
        action: '立即按讚',
        small: true
      }
    ]
  }),
  computed: {
    twitchIframeUrl () {
      const username = this.$config.rsl.twitch.username
      const host = process.client ? window.location.hostname : ''
      return `https://player.twitch.tv/?channel=${username}&parent=${host}`
    }
  },
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

    &:not(:last-child) {

      &::after {
        position: absolute;
        top: 0;
        right: 0;
        display: block;
        width: 3px;
        height: 100%;
        content: '';
        background: var(--v-primary-base);

        @include breakpoint(md) {
          display: none;
        }
      }
    }
  }
}
.block-twitch {
  @include breakpoint(xl, false) {
    padding-top: 120px !important;
    padding-bottom: 120px !important;
  }
}
</style>
