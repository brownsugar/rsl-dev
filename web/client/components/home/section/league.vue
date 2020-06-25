<template>
  <div
    id="league"
    class="grey lighten-3"
  >
    <particles
      class="fill-width fill-height d-none d-md-block"
      :retina-detect="false"
    />
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
            :offset="affixOffset"
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
                to="/season1"
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
              溫馨提醒：本季聯賽獲得之所有報名費用將全數捐贈給予本次活動受贈單位援助公益。
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
              src="~/assets/images/cooperator/redbull.png"
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
                  <p class="mt-1 ml-4 mb-2 grey--text text--darken-1">
                    {{ prize.description }}
                  </p>
                </div>
              </detail-info>
            </div>
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
                      :src="require('~/assets/images/home/' + set.image)"
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
                            <div class="level d-flex px-4 mb-1">
                              <fa
                                v-for="j in track.level"
                                :key="j"
                                class="grey--text text--lighten-1"
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
                :src="require(`~/assets/images/host/${host.avatar}`)"
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
  </div>
</template>

<script>
import Particles from '~/components/common/particles'
import Category from '~/components/home/section/league/category'
import DetailInfo from '~/components/home/section/league/detail-info'
import LinkCard from '~/components/home/section/league/link-card'
import HostDialog from '~/components/home/section/league/host-dialog'
import tracks from '~/assets/data/season1/tracks'
import hosts from '~/assets/data/season1/hosts'

export default {
  name: 'League',
  components: {
    Particles,
    Category,
    DetailInfo,
    LinkCard,
    HostDialog
  },
  props: {},
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
            '加碼專業電競週邊：？？？？ [後續公佈]',
            '加碼跑跑實體週邊：？？？？ [後續公佈]'
          ]
        },
        {
          title: '亞軍 2nd Place',
          content: [
            '獎金：NTD $15,000',
            '遊戲虛寶：尖峰 X Dragon (永久) + 建仔棒球裝 (永久) + 睏寶 (60 日) + 尼歐新品車款齒輪六代 (30 個)',
            '加碼專業電競週邊：？？？？ [後續公佈]'
          ]
        },
        {
          title: '季軍 3rd Place',
          content: [
            '獎金：NTD $5,000',
            '遊戲虛寶：魔光騎士 X (永久) + 夏日花襯衫 (永久) + 睏寶 (30 日) + 尼歐新品車款齒輪六代 (20 個)',
            '加碼專業電競週邊：？？？？ [後續公佈]'
          ]
        }
      ],
      specialPrize: [
        {
          title: '冠軍賽 MVP：NTD $5,000',
          description: '冠軍隊伍於賽事結束後，由主播賽評團評選公佈。'
        },
        {
          title: '賽道紀錄霸主：NTD $3,000',
          description: 'S1 賽季結束後，保有最多張賽道記錄的選手。'
        },
        {
          title: '觀眾票選人氣王：NTD $2,000',
          description: '打進 16 強之隊伍所屬成員皆可成為候選人，由觀眾票選支持，獲得最高票者。'
        },
        {
          title: '參加獎：尼歐新品車款齒輪六代 (5 個)',
          description: '報名成功且至少出賽一場的隊伍所屬成員，不包含失格、棄權或無故未到者。'
        }
      ]
    },
    channels: ['twitch', 'youtube'],
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
    affixOffset () {
      const navHeight = this.$vuetify.application.top
      const padding = 48 + 12 // parent + inner

      return {
        top: navHeight + padding,
        bottom: padding
      }
    }
  },
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
