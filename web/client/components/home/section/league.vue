<template>
  <div
    id="league"
    class="grey lighten-3"
  >
    <particles
      v-show="$vuetify.breakpoint.mdAndUp"
      class="fill-width fill-height"
    />
    <v-container fluid>
      <v-row
        class="py-12"
        justify="center"
      >
        <v-col
          class="left mb-10 mb-lg-0"
          cols="12"
          md="3"
          lg="2"
        >
          <h3 class="text-h3 font-weight-bold primary--text mb-2">
            SEASON 1
          </h3>
          <h4 class="text-h3">
            重啓夢想，<br v-if="$vuetify.breakpoint.lgAndUp || $vuetify.breakpoint.xsOnly">
            重燃渴望。
          </h4>
          <div class="d-none d-md-block">
            <v-btn
              class="v-btn--action mt-5"
              color="primary"
              to="/season1"
              depressed
              large
              nuxt
            >
              查看完整賽事規章
            </v-btn>
          </div>
        </v-col>
        <v-col
          class="right mb-n10"
          cols="12"
          md="9"
          lg="6"
        >
          <category name="聯賽資訊">
            <ul>
              <li>報名時間：2020/06/19 12:00 ~ 2020/06/28 00:00</li>
              <li>聯賽時程：2020/07/04 ~ 2020/08/16 每日 20:00 開始</li>
              <li>
                最高榮譽獎勵：
                <ul>
                  <li>
                    冠軍
                    <ul>
                      <li>獎金：NTD $30,000</li>
                      <li>遊戲虛寶：遊俠 X (永久) + 星月睡衣 (永久) + 睏寶 (永久) + 尼歐新品車款齒輪六代 (40 個)</li>
                      <li>加碼專業電競週邊：？？？？</li>
                      <li>加碼跑跑實體週邊：？？？？</li>
                    </ul>
                  </li>
                  <li>
                    亞軍
                    <ul>
                      <li>獎金：NTD $15,000</li>
                      <li>遊戲虛寶：尖峰 X Dragon (永久) + 建仔棒球裝 (永久) + 睏寶 (60 日) + 尼歐新品車款齒輪六代 (30 個)</li>
                      <li>加碼專業電競週邊：？？？？</li>
                    </ul>
                  </li>
                  <li>
                    季軍
                    <ul>
                      <li>獎金：NTD $5,000</li>
                      <li>遊戲虛寶：魔光騎士 X (永久) + 夏日花襯衫 (永久) + 睏寶 (30 日) + 尼歐新品車款齒輪六代 (20 個)</li>
                      <li>加碼專業電競週邊：？？？？</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                特別獎項：
                <ul>
                  <li>冠軍賽 MVP：NTD $5,000</li>
                  <li>賽道紀錄霸主：NTD $3,000</li>
                  <li>觀眾票選人氣王：NTD $2,000</li>
                  <li>參加獎：尼歐新品車款齒輪六代 (5 個)</li>
                </ul>
              </li>
            </ul>
            <a
              v-ripple="{ class: 'white--text' }"
              class="d-block text-decoration-none"
              :href="$config.rsl.facebook.url"
              target="_blank"
            >
              <v-alert
                class="mt-4"
                type="info"
                color="secondary"
                dense
              >
                想知道本季聯賽還有哪些豐富又令人愛不釋手的加碼實體獎勵嗎？立即點擊關注 RSL 賽事聯盟粉絲團搶先得知！
                <template #append>
                  <fa :icon="['fas', 'external-link-alt']" />
                </template>
              </v-alert>
            </a>
          </category>
          <category
            description="你渴望一對翅膀嗎？本季聯賽前 20 名報名的隊伍皆可獲得由 Red Bull 贊助的能量飲料一箱，助你飆的更快更穩！"
          >
            <template #name>
              <span class="red--text font-weight-bold">Red Bull</span> 幫你補充飆速能量
            </template>
            <v-img
              aspect-ratio="1"
              src="~/assets/images/cooperator/redbull.png"
              width="400"
            />
          </category>
          <category
            name="聯賽直播"
            description="賽事開打期間每個週末晚間 8 點於 RSL 官方 YouTube、Twitch 頻道同步轉播賽事，立即訂閱頻道，精彩賽事不漏接！"
          >
            <v-row class="my-n3">
              <v-col
                v-for="(channel, i) in channels"
                :key="i"
                cols="12"
                sm="5"
                md="4"
              >
                <link-card
                  :brand="channel"
                  :link="$config.rsl[channel].url"
                  :hover-text="'@' + $config.rsl[channel].username"
                />
              </v-col>
            </v-row>
          </category>
          <category name="賽制說明">
            <template #description>
              RSL 夢想盃在本季聯賽中採用嶄新賽制，選手們同時要在競速賽道上甩尾飆速，以及在道具賽中靈活運用各式道具鬥智取勝。<br>
              除了能讓選手透過更多元的管道和對手分出高下，也讓觀眾在觀看比賽時獲得雙重饗宴。
            </template>
            <v-row
              class="my-n3"
              justify="center"
            >
              <v-col
                v-for="(set, i) in sets"
                :key="i"
                cols="12"
                sm="4"
              >
                <v-card>
                  <v-card-text>
                    <div>SET {{ i + 1 }}</div>
                    <div class="text-h4 text--primary mb-2">
                      {{ set.title }}
                      <span class="text-h6 font-weight-light text-uppercase">{{ set.subtitle }}</span>
                    </div>
                    <v-img
                      aspect-ratio="1"
                      class="mx-auto"
                      :src="require('~/assets/images/home/' + set.image)"
                      :width="$vuetify.breakpoint.xsOnly ? '50%' : '80%'"
                    />
                    <div class="mt-1">
                      {{ set.description }}
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </category>
          <category name="指定賽道">
            <v-card>
              <v-tabs
                v-model="tabTrackType"
                color="secondary"
                grow
              >
                <v-tab
                  v-for="(tab, i) in tabTracks"
                  :key="i"
                >
                  {{ tab.label }}
                </v-tab>
              </v-tabs>
              <v-tabs-items v-model="tabTrackType">
                <v-tab-item
                  v-for="(tab, i) in tabTracks"
                  :key="i"
                >
                  <v-row>
                    <v-col
                      v-for="track in tab.tracks"
                      :key="track.id"
                      cols="12"
                      sm="6"
                    >
                      <v-card flat>
                        <div class="d-flex">
                          <div class="d-flex flex-column">
                            <v-rating
                              class="px-4"
                              background-color="grey lighten-2"
                              color="grey"
                              empty-icon="$starEmpty"
                              :value="track.level"
                              readonly
                              dense
                              small
                            />
                            <v-card-title
                              class="pt-0"
                              v-text="track.name"
                            />
                            <v-spacer />
                            <v-card-text
                              v-if="tab.type === 'speed'"
                              class="primary--text"
                            >
                              本季最佳 / COMING SOON
                            </v-card-text>
                          </div>
                          <v-spacer />
                          <v-img
                            class="flex-grow-0 mx-3"
                            :src="require(`~/assets/images/tracks/${track.id}.jpg`)"
                            :width="$vuetify.breakpoint.xsOnly ? 100 : 160"
                            :height="$vuetify.breakpoint.xsOnly ? 75 : 120"
                            :alt="track.name"
                          />
                        </div>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-tab-item>
              </v-tabs-items>
            </v-card>
          </category>
          <category name="主播陣容">
            <template #description>
              精彩的賽事除了仰賴於菁英選手的競賽過程之外，專業的主播和賽評也一位都不能少！<br>
              RSL 夢想盃本季聯賽邀請到知名聯賽主播「蛋蛋」、跑跑卡丁車專業講評「爆哥」、校園五速嘴解說「SpaceQ」以及曾經摘下 K1 聯賽冠軍的「保羅」，為關注賽事的觀眾們帶來精采的播報內容。
            </template>
            <div
              class="hosts d-flex justify-space-between mx-lg-8"
              :class="{
                simple: $vuetify.breakpoint.mdAndDown,
              }"
            >
              <v-img
                v-for="(host, i) in hosts"
                :key="i"
                class="host-avatar mx-lg-n8"
                :src="require(`~/assets/images/host/${host.avatar}`)"
                gradient="to bottom, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, .8) 100%"
                width="250"
                :height="$vuetify.breakpoint.mdAndDown ? 250 : 300"
                :alt="host.name"
                eager
              >
                <v-row
                  class="px-4 px-sm-8 py-2 fill-height white--text"
                  align="end"
                >
                  <v-col>
                    <div
                      v-if="$vuetify.breakpoint.smAndUp"
                      class="subheading"
                    >
                      {{ host.title }}
                    </div>
                    <div class="text-h5 font-weight-bold">
                      {{ host.name }}
                      <span v-if="host.alias">{{ host.alias }}</span>
                    </div>
                    <v-btn
                      class="mt-2"
                      dark
                      outlined
                      small
                      @click="showHostDialog(host)"
                    >
                      <fa :icon="['far', 'search']" />
                    </v-btn>
                  </v-col>
                </v-row>
              </v-img>
            </div>
            <host-dialog
              :visible.sync="hostDialog.visible"
              :host="hostDialog.data"
            />
          </category>
          <div class="action d-block d-md-none text-center mb-12">
            <v-btn
              class="v-btn--action mt-5"
              color="primary"
              to="/season1"
              depressed
              large
              nuxt
            >
              查看完整賽事規章
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Particles from '~/components/common/particles'
import Category from '~/components/home/section/league/category'
import LinkCard from '~/components/home/section/league/link-card'
import HostDialog from '~/components/home/section/league/host-dialog'
import tracks from '~/assets/data/season1/tracks'

export default {
  name: 'League',
  components: {
    Particles,
    Category,
    LinkCard,
    HostDialog
  },
  props: {},
  data: () => ({
    channels: ['youtube', 'twitch'],
    sets: [
      {
        title: '競速賽',
        subtitle: 'Speed',
        image: 'speed.svg',
        description: '4 vs 4 團體競速賽，於快速頻道進行，指定 16 張精選賽道。經典跑跑甩尾、碰撞對決，比實力、比穩定還要比團隊默契，不限車種，無限飆速！'
      },
      {
        title: '道具賽',
        subtitle: 'Item',
        image: 'item.svg',
        description: '4 vs 4 團體道具賽，於普通頻道進行，共 14 張精選賽道。丟水球？放天使？考驗團隊溝通，並採用限定道具規則，享受平衡友善的競爭環境！'
      },
      {
        title: '單挑賽',
        subtitle: 'Ace Duel',
        image: 'ace.svg',
        description: '前兩回合比分平手時進入第三回合單挑賽，為 1 vs 1 個人競速，於快速頻道進行。回合採三戰兩勝制，雙方王牌正面對決，單挑決勝一觸即發！'
      }
    ],
    tabTrackType: 0,
    tabTracks: [
      { label: '競速賽道', type: 'speed', tracks: tracks.speed },
      { label: '道具賽道', type: 'item', tracks: tracks.item }
    ],
    hosts: [
      {
        name: '蛋蛋',
        alias: 'DanDan',
        title: '知名聯賽主播',
        avatar: 'dandan.jpg',
        link: 'https://www.youtube.com/user/cvb3027',
        experience: `-播報經驗-
2017 世界賽資格賽評
2018 STO各季主播/賽評
2018 STO春、夏總決賽主播/賽評
2018 STO冬季資格賽主播/賽評
2018 STO總決賽賽評
2018 SCL春季總決賽賽評
2018 新北電競館開幕賽評
2018 Shadowverse世界大賽主播/賽評
2019 STO秋季賽季賽主播
2019 跑跑卡丁車曜越聯賽賽評
2019 Shadowverse世界大賽主播

-賽事經驗-
跑跑卡丁車：
2012 北區甲組聯賽亞軍
2012 樂豆公開賽北區八強
2012 樂豆全國總決賽八強

英雄聯盟：
2014 校際盃大專組全國八強
2015 校際盃大專組全國八強
2016 校際盃大專組全國八強

闇影詩章：
2017 4Gamers大師爭霸賽 冠軍
2017 詩涼子邀請賽 周冠軍
2018 新加坡公開賽 參賽選手
2018 SCL國際邀請賽 參賽選手
2019 日本RAGE秋季賽 台灣第一位打進Day2選手

寶可夢 PTCG：
2019 台灣1500人地區大賽 TOP 32`
      },
      {
        name: '爆哥',
        alias: 'NeaL',
        title: '競速專業講評',
        avatar: 'neal.jpg',
        link: 'https://www.youtube.com/channel/UCi7eKRJZvxMhwhiWyARZtjg',
        experience: `-播報經驗-
跑跑卡丁車：
2019 TT曜越電競聯賽 總冠軍賽 賽評

極速領域：
2019 春季錦標賽 賽評
2019 亞洲盃總冠軍賽 主播
2019 兆豐銀行盃 主播
2020 冬季明星表演賽 賽評

-賽事經驗-
2019 跑跑卡丁車世界爭霸賽 個人賽冠軍
2019 Global SuperMatch 亞軍`
      },
      {
        name: 'Space Q',
        alias: '',
        title: '校園五速嘴解說',
        avatar: 'spaceq.jpg',
        link: '',
        experience: `-播報經歷-
2016 逢甲耶誕前夕電競嘉年華會冠軍賽主播
2016 UGT 校園電競賽事英雄聯盟賽評
2016 GIGI 電競聯盟公益慈善盃英雄聯盟賽評
2016 優九聯盟第一屆電競聯賽 英雄聯盟項目賽評
2016 快樂霸主英雄聯盟邀請賽賽評
2017 Garena校際盃 英雄聯盟項目主播兼賽評（崑山、海洋、北科）
2018 Garena校際盃 英雄聯盟項目主播兼賽評（崑山、聯合、勤益）
2018 第一屆、第二屆 ESR 天使聯賽賽評
2018 第三屆、第四屆 北區電競聯賽賽評
2018 ROG MASTER 英雄聯盟邀請賽賽評
2018 CGA 女子賽賽評
2018 台北國際電玩展 曜越跑跑卡丁車賽事主播
2019 TT曜越電競聯賽 車神競速系列 跑跑卡丁車賽事主播`
      },
      {
        name: '保羅',
        alias: 'Jensen',
        title: '競速冠軍選手',
        avatar: 'jensen.jpg',
        link: 'https://www.youtube.com/channel/UCysszMfLmSgoWaz_kfOOp-g',
        experience: `-賽事經驗-
2014 K1 電視聯賽 團體賽冠軍
2018 AKEL 曜越網咖盃電競聯賽 團體賽冠軍
2018 TKL 夢想盃跑跑聯賽個人賽 亞軍
2019 TT曜越電競聯賽 個人賽 季軍`
      }
    ],
    hostDialog: {
      visible: false,
      data: {}
    }
  }),
  computed: {},
  watch: {},
  mounted () {
  },
  methods: {
    showHostDialog (data) {
      this.hostDialog.data = data
      this.hostDialog.visible = true
    }
  }
}
</script>

<style lang="scss" scoped>
#league {
  position: relative;
}
.particles {
  position: absolute;
  top: 0;
}
.left > *,
.right {
  position: relative;
}
.hosts {
  &.simple {
    flex-wrap: wrap;

    .host-avatar {
      flex: 1 0 50%;
    }
  }
  &:not(.simple) .host-avatar {
    clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  }
}
</style>
