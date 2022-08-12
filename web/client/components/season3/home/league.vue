<template>
  <section class="league py-16">
    <v-container>
      <bordered-box>
        <div class="section-title d-flex justify-center align-center">
          <h3 class="gradient-text text-h4 text-sm-h3 text-lg-h1 font-weight-bold">
            賽事簡介
          </h3>
        </div>
        <v-container class="mt-4 mt-sm-10 mt-lg-14">
          <v-row class="flex-column-reverse flex-lg-row">
            <v-col
              cols="12"
              lg="8"
              xl="7"
            >
              <two-line-title
                top="RSL 夢想盃跑跑聯賽"
                bottom="Season 3"
              />
              <div class="text-h6 font-weight-regular mt-5">
                <p>
                  深受玩家支持與觀眾期待，亦為跑跑卡丁車指標性業餘賽事的《RSL 夢想盃跑跑聯賽》再度登場了！<br>
                  第三賽季聯賽即將在今年盛夏正式引爆，除了持續受到遊戲橘子的大力支持之外，本季聯賽 RSL 賽事聯盟更盛邀了各大知名品牌一同共襄盛舉，除了有 PLANET9 提供的超值優惠碼折扣券之外，還有由 HyperX、曜越科技以及 AMD 所準備的頂級週邊豪禮要送給參賽選手以及長期支持夢想盃跑跑聯賽的觀眾們！
                </p>
                <p>
                  更重要的是，玩家的心聲，我們也都聽見了。<br>
                  在後疫情時代，RSL 賽事聯盟經過內部審慎評估後，希望擴大本季聯賽舉辦規模、喚醒玩家內心塵封已久的電競魂，因此決定將本季聯賽 8/27（六）總決賽當日賽程移師線下場館舉辦，除了各隊伍選手都將現身同場較勁之外，本次線下賽也將全面「免費」開放所有觀眾自由入場！<br>
                  除此之外，本季聯賽更籌備了豐富的賽事內容要呈現給觀眾們，不僅特別規劃了表演賽，讓觀眾可以和選手一同互動之外，還邀請了神祕嘉賓蒞臨現場，一同在總決賽當天共享盛舉。<br>
                  想要親自到場一窺選手的魅力、體驗電競賽事的熱血氛圍，還有機會帶著豐富獎勵回家嗎？那你絕對不能錯過本季的 RSL 夢想盃跑跑聯賽！
                </p>
              </div>
              <v-btn
                class="mt-2 mt-md-4"
                color="primary"
                to="/season3/benefits"
                depressed
                rounded
                large
                dark
              >
                查看 S3 聯賽福利
                <fa
                  class="ml-2"
                  icon="fa-duotone fa-chevrons-right"
                />
              </v-btn>
            </v-col>
            <v-col
              cols="12"
              lg="4"
              xl="5"
            >
              <v-img
                class="rounded-lg"
                :aspect-ratio="650 / 600"
                src="~/assets/images/season3/home/league/summary.png"
              />
            </v-col>
          </v-row>
          <v-row class="mt-14">
            <v-col
              cols="12"
              lg="5"
            >
              <v-sheet
                class="overflow-hidden"
                rounded="lg"
                outlined
              >
                <v-responsive :aspect-ratio="3 / 2">
                  <iframe
                    loading="lazy"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.7216163253615!2d121.5336090157886!3d25.043519783967916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a97d4ba053cb%3A0xf2919b58fe941b54!2z6Ie65YyX56eR5oqA5aSn5a24IOS4reato-e0gOW_temkqA!5e0!3m2!1szh-TW!2stw!4v1660296128283!5m2!1szh-TW!2stw"
                    width="100%"
                    height="100%"
                    allowfullscreen
                  />
                </v-responsive>
              </v-sheet>
            </v-col>
            <v-col
              cols="12"
              lg="7"
            >
              <two-line-title
                top="RSL 夢想盃跑跑聯賽"
                bottom="線下總決賽"
              />
              <p class="text-body-1 mt-3">
                <fa
                  class="fa-rotate-180 mr-2"
                  icon="fa-solid fa-reply"
                />
                8/27（六）13:00 台北科技大學－中正紀念館
              </p>
              <div class="text-h6 font-weight-regular mt-5">
                <p>照過來！總決賽資訊正式公佈，今年夏天一起重溫記憶中的跑跑卡丁車賽事！</p>
                <p>本季 RSL 夢想盃跑跑聯賽總決賽將於台北科技大學中正紀念館舉行，活動全面開放觀眾免費入場，觀眾人數無上限，8/27 12:00 開放入場。</p>
                <p>
                  當日不僅有精彩的冠軍賽賽事舉行之外，現場還邀請到「夜雨」擔任活動主持人，並且還有知名實況主「世誠」以及「冠緯」將到場和選手以及觀眾進行互動表演賽，眾多精彩內容就等你蒞臨一同觀賞。<br>
                  無法到場的觀眾也別擔心，RSL 官方 Twitch 頻道也將全程同步轉播，讓你在線上也能感受到現場的熱情 🔥
                </p>
                <p>總決賽賽程結束後還將送出終極獎勵「幻銀 ARGENT E700 真皮電競椅」，想成為如同跑車般舒適的電競椅主人翁，就請鎖定 8/27 賽事轉播！</p>
              </div>
              <v-btn
                class="mt-2 mt-md-4"
                color="twitch"
                :href="$config.rsl.twitch.url"
                target="_blank"
                rel="noreferrer noopener"
                depressed
                rounded
                large
                dark
              >
                精彩賽事鎖定 Twitch 頻道
                <fa
                  class="ml-2"
                  icon="fa-duotone fa-up-right-from-square"
                />
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
        <v-responsive
          class="mt-8 mt-md-12 mx-3 mx-sm-auto"
          :aspect-ratio="16 / 9"
          max-width="1400"
        >
          <yt-player
            class="rounded-xl overflow-hidden"
            video-id="fYVgWYf_X3M"
            play-on-visible
            auto-mute
            loop
          />
        </v-responsive>
        <v-container class="social-box mt-6 mt-md-12">
          <v-row class="mx-sm-n6">
            <v-col
              v-for="block in blocks"
              :key="block.type"
              cols="12"
              lg="4"
            >
              <div
                class="white--text pa-6 pa-xl-10 rounded-xl"
                :class="['block-' + block.type, block.type]"
              >
                <div class="text-h4 font-weight-black">
                  {{ block.title }}
                </div>
                <div class="text-h5 font-weight-bold">
                  @{{ $config.rsl[block.type].username }}
                </div>
                <div
                  class="text-h5 mt-6"
                >
                  {{ block.description }}
                </div>
                <v-btn
                  class="mt-10"
                  :color="block.type + ' darken-1'"
                  :href="$config.rsl[block.type].url"
                  target="_blank"
                  rel="noreferrer noopener"
                  depressed
                  rounded
                  block
                  large
                  dark
                >
                  {{ block.action }}
                  <fa
                    class="ml-2"
                    size="lg"
                    icon="fa-solid fa-right-long"
                  />
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </bordered-box>
    </v-container>
  </section>
</template>

<script>
import BorderedBox from '~/components/season3/common/bordered-box'
import TwoLineTitle from '~/components/season3/common/two-line-title'
import YtPlayer from '~/components/common/yt-player'

export default {
  name: 'League',
  components: {
    BorderedBox,
    TwoLineTitle,
    YtPlayer
  },
  data: () => ({
    blocks: [
      {
        type: 'twitch',
        title: 'Twitch 頻道',
        description: '每周聯賽準時轉播',
        action: '立即追隨'
      },
      {
        type: 'facebook',
        title: 'Facebook 專頁',
        description: '聯賽情報即時掌握',
        action: '立即按讚'
      },
      {
        type: 'youtube',
        title: 'YouTube 頻道',
        description: '精彩賽事隨時重溫',
        action: '立即訂閱'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.league {
  --bottom-offset: 160px;

  margin-bottom: var(--bottom-offset);
}
.section-title {
  --width: 100px;
  --height: 50px;
  --margin-x: 50px;

  @include breakpoint(lg) {
    --width: 60px;
    --height: 30px;
    --margin-x: 25px;
  }
  @include breakpoint(sm) {
    --width: 40px;
    --height: 20px;
    --margin-x: 15px;
  }

  &::before,
  &::after {
    display: block;
    width: var(--width);
    height: var(--height);
    content: '';
    background: image('season3/home/league/checkered_flag.svg') center / cover no-repeat;
  }
  &::before {
    margin-right: var(--margin-x);
  }
  &::after {
    margin-left: var(--margin-x);
    transform: rotateZ(180deg);
  }
}
.social-box {
  margin-bottom: calc(var(--bottom-offset) * -1);
}
</style>
