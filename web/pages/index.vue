<template>
  <div class="home mb-5">
    <v-parallax
      :src="require('~/assets/images/home/background/race.png')"
      height="900"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="8">
          <h1 class="title mb-2">
            RE:START KARTRIDER LEAGUE <span class="yellow--text">SEASON 1</span>
          </h1>
          <h2 class="display-3 font-weight-bold">
            重啟<span class="primary--text">夢想</span>，<br>
            重燃<span class="primary--text">渴望</span>。
          </h2>
          <p class="mt-3">
            2020 夏天，RSL 夢想盃跑跑聯賽將重新燃燒你的電競魂。<br>
            總獎金高達新臺幣 60,000 元，還有各式高級電競週邊獎品，還在等什麼？
          </p>
          <v-btn
            class="v-btn--action mt-5"
            color="primary"
            depressed
            large
          >
            6/19 開始報名
          </v-btn>
        </v-col>
      </v-row>
    </v-parallax>
    <v-row id="vod" class="py-12">
      <v-col>
        <div class="d-flex justify-center align-center mb-2">
          <deco type="hot-tire" />
          <h3 class="display-1 ml-2">
            精彩回顧
          </h3>
        </div>
        <v-container>
          <v-row
            align="center"
            justify="center"
          >
            <v-col cols="6">
              <v-card elevation="10">
                <v-responsive :aspect-ratio="16/9">
                  <yt-player
                    video-id="uvwNWsFunGw"
                    :play-on-visible="false"
                    auto-mute
                    loop
                  />
                </v-responsive>
              </v-card>
              <v-alert
                class="mt-6"
                text
                prominent
                color="info"
                icon="$fire"
              >
                <v-row align="center" no-gutters>
                  <v-col class="grow">
                    立即訂閱 RSL 賽事聯盟 YouTube 頻道，精彩影片不漏接！
                  </v-col>
                  <v-col class="shrink">
                    <v-btn color="primary">
                      前往 YouTube
                    </v-btn>
                  </v-col>
                </v-row>
              </v-alert>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <!-- <v-row id="news">
      最新消息
      可以在此確認 RSL 官方最新訊息和賽事資訊。
    </v-row> -->
    <v-row
      id="league"
      class="py-12"
      justify="center"
    >
      <v-col cols="2">
        <h3 class="display-2 font-weight-bold primary--text mb-2">
          SEASON 1
        </h3>
        <h4 class="display-2">
          重啓夢想，<br>
          重燃渴望。
        </h4>
        [查看賽事完整資訊]
      </v-col>
      <v-col cols="6">
        <div class="d-flex align-center mb-2">
          <h5 class="display-1 mr-2">
            聯賽介紹
          </h5>
          <deco type="race-flag" />
        </div>
        <ul>
          <li>報名時間：2020/06/19 12:00 ~ 2020/06/28 00:00</li>
          <li>聯賽時程：2020/07/04 ~ 2020/08/26</li>
          <li>
            聯賽獎金：
            <ul>
              <li>冠軍：NTD $30,000</li>
              <li>亞軍：NTD $15,000</li>
              <li>季軍：NTD $5,000</li>
            </ul>
          </li>
          <li>
            特別獎項：
            <ul>
              <li>冠軍賽 MVP：NTD $5,000</li>
              <li>賽道紀錄霸主：NTD $3,000</li>
              <li>觀眾票選人氣王：NTD $2,000</li>
            </ul>
          </li>
        </ul>
        <div class="d-flex align-center mb-2">
          <h5 class="display-1 mr-2">
            聯賽直播
          </h5>
          <deco type="race-flag" />
        </div>
        <p class="text--darken-3 grey--text">
          賽事開打期間每個週末晚間 8 點於 RSL 官方 YouTube、Twitch 頻道同步轉播賽事，立即訂閱頻道，精彩賽事不漏接！
        </p>
        <v-row class="my-n3">
          <v-col
            cols="12"
            md="4"
          >
            <v-hover #default="{ hover }">
              <v-card
                color="youtube"
                class="d-flex flex-column justify-center align-center"
                dark
                height="180"
                href="https://www.youtube.com/channel/UCSXjGuAfR7XSVkPo7mvGacQ?sub_confirmation=1"
                target="_blank"
              >
                <v-scroll-y-transition mode="out-in">
                  <div
                    v-if="hover"
                    key="hover"
                    class="display-1"
                  >
                    <span>YouTube 頻道</span>
                    <span class="body-1">
                      <fa :icon="['fas', 'external-link-alt']" />
                    </span>
                  </div>
                  <div
                    v-else
                    key="origin"
                    class="display-3"
                  >
                    <fa :icon="['fab', 'youtube']" />
                  </div>
                </v-scroll-y-transition>
              </v-card>
            </v-hover>
          </v-col>
          <v-col
            cols="12"
            md="4"
          >
            <v-hover #default="{ hover }">
              <v-card
                color="twitch"
                class="d-flex flex-column justify-center align-center"
                dark
                height="180"
                href="https://www.twitch.tv/rsleague"
                target="_blank"
              >
                <v-scroll-y-transition mode="out-in">
                  <div
                    v-if="hover"
                    key="hover"
                    class="display-1"
                  >
                    <span>@rsleague</span>
                    <span class="body-1">
                      <fa :icon="['fas', 'external-link-alt']" />
                    </span>
                  </div>
                  <div
                    v-else
                    key="origin"
                    class="display-3"
                  >
                    <fa :icon="['fab', 'twitch']" />
                  </div>
                </v-scroll-y-transition>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
        <div class="d-flex align-center mb-2">
          <h5 class="display-1 mr-2">
            賽制說明
          </h5>
          <deco type="race-flag" />
        </div>
        <p class="text--darken-3 grey--text">
          RSL 夢想盃在本季聯賽中採用嶄新賽制，選手們同時要在競速賽道上甩尾飆速，以及在道具賽中靈活運用各式道具鬥智取勝。<br>
          除了能讓選手透過更多元的管道和對手分出高下，也讓觀眾在觀看比賽時獲得雙重饗宴。
        </p>
        <v-row justify="center">
          <v-col
            v-for="(set, i) in sets"
            :key="i"
            cols="4"
          >
            <v-card>
              <v-card-text>
                <div>SET {{ i + 1 }}</div>
                <div class="display-1 text--primary mb-2">
                  {{ set.title }} <span class="font-weight-light text-uppercase">{{ set.subtitle }}</span>
                </div>
                <v-img :src="require('~/assets/images/home/' + set.imageFile)" />
                <div class="mt-1">
                  {{ set.description }}
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <div class="d-flex align-center mb-2">
          <h5 class="display-1 mr-2">
            指定賽道
          </h5>
          <deco type="race-flag" />
        </div>
      </v-col>
    </v-row>
    <!-- <v-row id="commentator">
      <h1>主播陣容</h1>
      精彩的賽事除了仰賴於菁英選手的競賽過程之外，專業的主播和賽評也一位都不能少！
      RSL 夢想盃本季聯賽邀請到知名聯賽主播「蛋蛋」、跑跑卡丁車專業講評「爆哥」、校園五速嘴解說「SpaceQ」，為參與賽事的各位帶來精采的播報內容。
    </v-row>
    <v-row id="cooperate">
      <h1>合作品牌</h1>
      指導單位：南台科技大學資訊傳播系、中華電子競技教育學會、競及
      協辦單位：遊戲橘子
      執行單位：RSL
      合作夥伴：掠奪者、ACER、COOL MASTER
    </v-row>
    <v-row id="about">
      RSL 賽事聯盟，全名為「RE:START LEAGUE」，由三名兼具賽事舉辦經驗、玩家社群經營與遊戲領域影響力的核心玩家所組成。
      我們致力於打造完善的電競聯賽環境、建立公平的賽事舞台，希望藉由 RSL 聯賽讓玩家重新燃起心目中的電競選手夢想。
      [關於 RSL]
    </v-row> -->
  </div>
</template>

<script>
import Deco from '~/components/common/deco'
import YtPlayer from '~/components/common/yt-player'

export default {
  components: {
    Deco,
    YtPlayer
  },
  data: () => ({
    sets: [
      {
        title: '競速賽',
        subtitle: 'Speed',
        imageFile: 'speed.svg',
        description: '4 vs 4 團體競速賽，於快速頻道進行，指定 16 張精選賽道。經典跑跑甩尾、碰撞對決，比實力、比穩定還要比團隊默契，不限車種，無限飆速！'
      },
      {
        title: '道具賽',
        subtitle: 'Item',
        imageFile: 'item.svg',
        description: '4 vs 4 團體道具賽，於普通頻道進行，共 14 張精選賽道。丟水球？放天使？考驗團隊溝通，並採用限定道具規則，享受平衡友善的競爭環境！'
      },
      {
        title: '單挑賽',
        subtitle: 'Ace Duel',
        imageFile: 'ace.svg',
        description: '前兩回合比分平手時進入第三回合單挑賽，為 1 vs 1 個人競速，於快速頻道進行。回合採三戰兩勝制，雙方王牌正面對決，單挑決勝一觸即發！'
      }
    ]
  }),
  computed: {
  },
  watch: {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.home {
  ::v-deep {
    .v-parallax__image-container {
      &:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: image('home/background/dark-cover.png');
        z-index: 2;
      }
    }
  }
}
#vod {
  background: image('home/background/drift-road.png') right bottom no-repeat;
}
</style>
