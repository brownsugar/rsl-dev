<template>
  <div
    id="league"
    class="grey lighten-3"
  >
    <v-container fluid>
      <v-row
        class="py-12"
        justify="center"
      >
        <v-col
          class="mb-10 mb-lg-0 pl-3 pl-lg-12"
          cols="12"
          md="3"
        >
          <affix
            :key="$breakpoint.is.mdAndUp"
            class="league-left"
            relative-element-selector="#league-content"
            :offset="affixTitleOffset"
            :enabled="$breakpoint.is.mdAndUp"
          >
            <h3 class="text-h4 text-lg-h3 font-weight-bold primary--text mb-2">
              SEASON 1
            </h3>
            <h4 class="text-h3 text-md-h4 text-lg-h3">
              重啓夢想，<br class="d-sm-none d-md-block">
              重燃渴望。
            </h4>
            <div class="d-none d-md-block">
              <v-btn
                class="v-btn--action mt-5"
                color="primary"
                to="/season1/rules"
                depressed
                large
                nuxt
              >
                查看完整聯賽規章
              </v-btn>
            </div>
          </affix>
        </v-col>
        <v-col
          id="league-content"
          class="mb-n10"
          cols="12"
          md="9"
          lg="7"
        >
          <category name="報名資訊">
            <div class="pt-2">
              <detail-info
                v-for="(info, i) in applyInfo"
                :key="i"
                :title="info.title"
              >
                <p v-html="info.content" />
              </detail-info>
            </div>
            <v-alert
              class="mt-3"
              color="red accent-2"
              text
              outlined
              dense
            >
              溫馨提醒：本季聯賽獲得之所有報名費用將全數捐贈給予本次活動受贈單位【社團法人中華民國扶弱成長協會】援助公益。
              <template #prepend>
                <fa
                  class="mr-3"
                  :icon="['fas', 'heart']"
                />
              </template>
            </v-alert>
          </category>
          <category>
            <template #name>
              <span class="red--text font-weight-bold">Red Bull</span> 幫你補充飆速能量
            </template>
            <template #description>
              你渴望一對翅膀嗎？本季聯賽 <s>前 20 組</s> 前 32 組（06/22 再加碼！）報名的隊伍皆可獲得由 Red Bull 贊助的能量飲料一打，助你飆的更快更穩！
            </template>
            <v-img
              aspect-ratio="1"
              src="~/assets/images/season1/cooperator/redbull.png"
              width="400"
            />
          </category>
          <category name="聯賽資訊">
            <div class="pt-2">
              <detail-info
                title="聯賽時程"
                icon-double
              >
                <p>2020/07/04 ~ 2020/08/16 每周六、日 20:00 開始</p>
              </detail-info>
              <detail-info
                title="最高榮譽獎勵"
                icon-double
              >
                <div class="mt-2 mb-4">
                  <div
                    v-for="(prize, i) in leagueInfo.honorPrize"
                    :key="i"
                    class="mb-4"
                  >
                    <h3 class="text-h6 font-weight-bold primary--text">
                      {{ prize.title }}
                    </h3>
                    <ul class="mt-1">
                      <li
                        v-for="(item, j) in prize.content"
                        :key="j"
                      >
                        {{ item }}
                      </li>
                    </ul>
                  </div>
                </div>
              </detail-info>
              <detail-info
                title="特別獎項"
                icon-double
              >
                <div
                  v-for="(prize, i) in leagueInfo.specialPrize"
                  :key="i"
                  class="mt-2"
                >
                  <h3 class="text-h6">
                    {{ prize.title }}
                  </h3>
                  <ul class="mt-1">
                    <li
                      v-for="(item, j) in prize.content"
                      :key="j"
                    >
                      {{ item }}
                    </li>
                  </ul>
                  <p class="mt-1 mb-4 grey--text text--darken-1">
                    ※ 獲獎資格：{{ prize.description }}
                  </p>
                </div>
              </detail-info>
            </div>
            <link-alert
              :href="$config.rsl.facebook.url"
              class="mt-4"
              type="error"
              dense
            >
              緊急通知：冠軍賽觀眾專屬獎勵「SADES Draco 天龍座 真。人體工學電競椅（黑/白）」等你帶走！詳情立即點擊關注 RSL 賽事聯盟粉絲團。
            </link-alert>
          </category>
          <category name="聯賽直播">
            <template #description>
              本季聯賽開打期間於每個週末晚間 8 點<strong>在 RSL 官方 Twitch 頻道獨家轉播</strong>！<br>
              重播影片也將於賽後發佈至 YouTube 中，立即訂閱頻道，精彩賽事影片不漏接！
            </template>
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
          <category
            name="聯賽時程"
            description="本季聯賽自 7/4 起至 8/16 止，每周六日皆有安排賽程，一共 14 日，詳細賽程請參閱下方時程表。"
          >
            <v-card>
              <v-card-text class="pl-0 pl-md-4 py-0">
                <v-timeline
                  align-top
                  dense
                >
                  <v-timeline-item
                    v-for="(schedule, i) in schedules"
                    :key="i"
                    class="pb-10"
                    :color="getScheduleDotColor(schedule)"
                    small
                  >
                    <v-row>
                      <v-col
                        class="py-0"
                        cols="12"
                        lg="3"
                        xl="2"
                      >
                        <div class="text-subtitle-1 font-weight-bold">
                          {{ schedule.dates }}
                        </div>
                      </v-col>
                      <v-col class="py-0">
                        <div class="text-subtitle-1 font-weight-bold">
                          {{ schedule.title }}
                        </div>
                        <div
                          v-if="schedule.content"
                          class="mt-1"
                          v-html="schedule.content"
                        />
                      </v-col>
                    </v-row>
                  </v-timeline-item>
                </v-timeline>
              </v-card-text>
            </v-card>
          </category>
          <category name="賽制介紹">
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
                      :src="require('~/assets/images/season1/' + set.image)"
                      :width="$breakpoint.is.xsOnly ? '50%' : '80%'"
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
                  <v-row class="my-0">
                    <v-col
                      v-for="track in tab.tracks"
                      :key="track.id"
                      cols="12"
                      sm="6"
                    >
                      <v-card flat>
                        <div class="d-flex">
                          <div class="d-flex flex-column">
                            <div class="level d-flex px-4 mb-1">
                              <fa
                                v-for="j in track.level"
                                :key="j"
                                class="grey--text"
                                :icon="['fas', 'star']"
                                size="sm"
                              />
                              <fa
                                v-for="j in 5 - track.level"
                                :key="j"
                                class="grey--text text--lighten-2"
                                :icon="['far', 'star']"
                                size="sm"
                              />
                            </div>
                            <v-card-title
                              class="pt-0"
                              v-text="track.name"
                            />
                            <v-spacer />
                            <v-card-text
                              v-if="tab.type === 'speed' && trackBest[track.id]"
                              class="grey--text text--darken-2"
                            >
                              <v-chip
                                class="mb-1"
                                color="secondary"
                                x-small
                                outlined
                              >
                                Best Record
                              </v-chip>
                              <br>
                              <span>
                                <fa
                                  class="mr-1"
                                  :icon="['far', 'stopwatch']"
                                />
                                {{ trackBest[track.id].time }}
                              </span>
                              <br>
                              <span>
                                <fa
                                  class="mr-1"
                                  :icon="['far', 'user-crown']"
                                />
                                {{ trackBest[track.id].player }}
                              </span>
                            </v-card-text>
                          </div>
                          <v-spacer />
                          <v-img
                            class="flex-grow-0 mx-3"
                            :src="require(`~/assets/images/tracks/${track.id}.jpg`)"
                            :width="$breakpoint.is.xsOnly ? 100 : 160"
                            :height="$breakpoint.is.xsOnly ? 75 : 120"
                            :alt="track.name"
                          />
                        </div>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-tab-item>
              </v-tabs-items>
            </v-card>
            <link-alert
              href="https://kinf.cc/3epJovN"
              class="mt-6"
              color="secondary"
              icon="$random"
              text
              dark
            >
              賽前交流練習想以隨機賽道進行？使用「賽道抽選」工具，助你一鍵選擇指定賽道並隨機抽出賽道順序！
            </link-alert>
          </category>
          <category name="主播陣容">
            <template #description>
              精彩的賽事除了仰賴於菁英選手的競賽過程之外，專業的主播和賽評也一位都不能少！<br>
              RSL 夢想盃本季聯賽邀請到知名聯賽主播「蛋蛋」、跑跑卡丁車專業講評「爆哥」、校園五速嘴解說「SpaceQ」以及曾經摘下 K1 聯賽冠軍的「保羅」，為關注賽事的觀眾們帶來精采的播報內容。
            </template>
            <div
              class="hosts d-flex justify-space-between mx-md-10 mx-lg-8"
              :class="{
                simple: $breakpoint.is.mdAndDown
              }"
            >
              <v-img
                v-for="(host, i) in hosts"
                :key="i"
                class="host-avatar mx-md-n10 mx-lg-n8"
                :src="require(`~/assets/images/season1/host/${host.avatar}`)"
                gradient="to bottom, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, .8) 100%"
                width="250"
                :height="$breakpoint.is.mdAndDown ? 250 : 350"
                :alt="host.name"
              >
                <v-row
                  class="px-4 px-sm-8 py-2 fill-height white--text"
                  align="end"
                >
                  <v-col>
                    <div class="subheading d-none d-sm-block">
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
          <category
            name="約戰討論"
            description="想和其他隊伍約戰，在開賽前先交流切磋一番？RSL 賽事聯盟提供了官方
            Discord 頻道，供選手們可以隨時前來約戰和討論聯賽內容！"
          >
            <v-row class="my-n3">
              <v-col
                cols="12"
                sm="5"
                md="4"
              >
                <link-card
                  brand="discord"
                  :link="$config.rsl.discord.url"
                  hover-text="Discord"
                />
              </v-col>
            </v-row>
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
              查看完整聯賽規章
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <affix
      class="particles-wrap"
      relative-element-selector="#league"
      :offset="affixParticlesOffset"
    >
      <particles class="fill-width fill-height" />
    </affix>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Category from './league/category'
import DetailInfo from './league/detail-info'
import LinkCard from './league/link-card'
import HostDialog from './league/host-dialog'
import Particles from '~/components/common/particles'
import LinkAlert from '~/components/common/link-alert'
import tracks from '~/data/season1/tracks'
import hosts from '~/data/season1/hosts'

export default {
  name: 'League',
  components: {
    Particles,
    LinkAlert,
    Category,
    DetailInfo,
    LinkCard,
    HostDialog
  },
  data: () => ({
    applyInfo: [
      {
        title: '報名時間',
        content: '2020/06/19 12:00 ~ 2020/06/28 00:00'
      },
      {
        title: '報名費用',
        content: '每隊新台幣 200 元整'
      },
      {
        title: '開放名額',
        content: '<s>共 32 組隊伍</s> 6/21 加開至 64 組！'
      },
      {
        title: '報名網址',
        content: '<a href="https://www.accupass.com/go/restartkartrider" target="_blank">https://www.accupass.com/go/restartkartrider</a>'
      },
      {
        title: '報名須知',
        content: '報名及付款完成後可獲得專屬 QRcode，報名人員需完成<a href="https://forms.gle/ReXkzUen1bxAX8MG9" target="_blank">資料回傳表單</a>填寫後，由主辦單位核准並發送信件通知才算報名成功。'
      }
    ],
    leagueInfo: {
      honorPrize: [
        {
          title: '冠軍 Champion',
          content: [
            '獎金：NTD $30,000',
            '遊戲虛寶：遊俠 X (永久) + 星月睡衣 (永久) + 睏寶 (永久) + 尼歐新品車款齒輪六代 (40 個)',
            '加碼跑跑實體週邊：遊戲橘子提供 [睏寶實體娃娃] + [舒適 SR 實體模型] 各 3 組',
            '加碼專業電競週邊：SADES Damascus RGB 104KEY 大馬士革刀金屬鍵盤注音版 - 青軸（4 組）'
          ]
        },
        {
          title: '亞軍 2nd Place',
          content: [
            '獎金：NTD $15,000',
            '遊戲虛寶：尖峰 X Dragon (永久) + 建仔棒球裝 (永久) + 睏寶 (60 日) + 尼歐新品車款齒輪六代 (30 個)',
            '加碼專業電競週邊：Acer Predator Cestus 300 電競滑鼠（4 組）'
          ]
        },
        {
          title: '季軍 3rd Place',
          content: [
            '獎金：NTD $5,000',
            '遊戲虛寶：魔光騎士 X (永久) + 夏日花襯衫 (永久) + 睏寶 (30 日) + 尼歐新品車款齒輪六代 (20 個)',
            '加碼專業電競週邊：HyperX Stinger Core 7.1 聲道電競耳機（4 組）'
          ]
        },
        {
          title: '殿軍 4th Place',
          content: [
            '加碼專業電競週邊：SADES Frost 冰霜 FPS 專用加大電競鼠墊（4 組）'
          ]
        }
      ],
      specialPrize: [
        {
          title: '冠軍賽 MVP',
          description: '冠軍隊伍於賽事結束後，由主播賽評團評選公佈。',
          content: [
            '獎金：NTD $5,000',
            '加碼專業電競週邊：HyperX Stinger Core 7.1 聲道電競耳機'
          ]
        },
        {
          title: '賽道紀錄霸主',
          description: 'S1 賽季結束後，保有最多張競速賽道記錄的選手。',
          content: [
            '獎金：NTD $3,000',
            '加碼專業電競週邊：SADES Damascus RGB 104KEY 大馬士革刀金屬鍵盤注音版 - 青軸'
          ]
        },
        {
          title: '觀眾票選人氣王',
          description: '打進 16 強之隊伍所屬成員皆可成為候選人，由觀眾票選支持，獲得最高票者。',
          content: [
            '獎金：NTD $2,000',
            '加碼專業電競週邊：Acer Predator Cestus 300 電競滑鼠'
          ]
        },
        {
          title: '參加獎',
          description: '報名成功且至少出賽一場的隊伍所屬成員，不包含失格、棄權或無故未到者。',
          content: [
            '遊戲虛寶：尼歐新品車款齒輪六代 (5 個)'
          ]
        }
      ]
    },
    channels: ['twitch', 'youtube'],
    schedules: [
      {
        dates: '07/04~07/05',
        title: '海選賽 I',
        content: '從所有參賽隊伍中決定晉級 16 強的組別，採單淘汰賽制，每個場次進行 1 回合，搶 5 勝晉級。'
      },
      {
        dates: '07/11~07/12',
        title: '海選賽 II',
        content: ''
      },
      {
        dates: '07/18~07/19',
        title: '16 強賽 I',
        content: '將 16 強隊伍分為 A/B/C/D 四個組別，每個組別分別進行循環賽，各組戰績前二名之隊伍晉級 8 強（A/B 組晉級至 8 強 A 組、C/D 組晉級至 8 強 B 組）。<br>每個場次進行 3 回合，回合採三戰兩勝制，前兩回合團體競速、道具搶 3 勝，第三回合個人賽單挑搶 1 勝。'
      },
      {
        dates: '07/25~07/26',
        title: '16 強賽 II',
        content: ''
      },
      {
        dates: '08/01~08/02',
        title: '16 強賽 III',
        content: ''
      },
      {
        dates: '08/08~08/09',
        title: '8 強賽',
        content: '8 強賽 A/B 兩個組別分別進行循環賽，A 組戰績第一晉級 4 強 A 組、第二進入 4 強 B 組；B 組戰績第一晉級 4 強 B 組、第二進入 4 強 A 組。<br>每個場次進行 3 回合，回合採三戰兩勝制，前兩回合團體競速、道具搶 3 勝，第三回合個人賽單挑搶 1 勝。'
      },
      {
        dates: '08/15',
        title: '4 強賽',
        content: '4 強賽起採雙敗淘汰賽制，A/B 兩個組別分別進行對決，各組勝利方晉級勝組準決賽、落敗方進入敗組；敗組對決後勝出隊伍進入敗組準決賽、落敗隊伍則為本次聯賽殿軍。<br>每個場次進行 3 回合，回合採三戰兩勝制，前兩回合團體競速、道具搶 5 勝，第三回合個人賽單挑搶 2 勝。'
      },
      {
        dates: '08/16',
        title: '冠亞賽 / 準決賽',
        content: '首先進行勝組準決賽，勝組準決賽勝出隊伍晉級冠亞賽、落敗隊伍進入敗組準決賽，接著進行敗組準決賽對決，勝出隊伍晉級冠亞賽、落敗隊伍則為本次聯賽季軍。<br>冠亞賽兩隊隊伍進行最終對決，勝利隊伍則奪得 RSL 夢想盃聯賽第一季冠軍，落敗隊伍為亞軍。<br>每個場次進行 3 回合，回合採三戰兩勝制，前兩回合團體競速、道具搶 5 勝，第三回合個人賽單挑搶 2 勝。'
      }
    ],
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
    hosts,
    hostDialog: {
      visible: false,
      data: {}
    }
  }),
  computed: {
    ...mapState({
      config: state => state.config.season1
    }),
    affixTitleOffset () {
      const navHeight = this.$vuetify.application.top
      const padding = 48 + 12 // parent + inner

      return {
        top: navHeight + padding,
        bottom: padding
      }
    },
    affixParticlesOffset () {
      return {
        top: this.$vuetify.application.top,
        bottom: 0
      }
    },
    trackBest () {
      return this.config.track_record.reduce((result, track) => {
        result[track.id] = track
        return result
      }, {})
    }
  },
  methods: {
    getScheduleDotColor (schedule) {
      const [begin, end] = schedule.dates.split('~')

      const endDate = new Date('2020/' + (end || begin))
      const now = new Date()
      if (this.$dateFns.isAfter(now, endDate)) {
        return 'primary'
      } else {
        return 'grey lighten-1'
      }
    },
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
.container {
  position: relative;
  z-index: 1;
}
.particles-wrap {
  width: 100vw;
  height: 100vh;

  &:not(.affix) {
    position: absolute;
    top: 0;
    left: 0;
  }
}
.league-left:not(.affix),
#league-content {
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
