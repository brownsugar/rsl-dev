<template>
  <div id="league">
    <particles />
    <v-row
      class="py-12"
      justify="center"
    >
      <v-col class="left" cols="2">
        <h3 class="display-2 font-weight-bold primary--text mb-2">
          SEASON 1
        </h3>
        <h4 class="display-2">
          重啓夢想，<br>
          重燃渴望。
        </h4>
        <v-btn
          class="v-btn--action mt-5"
          color="primary"
          to="/season1"
          depressed
          large
          nuxt
        >
          查看完整資訊
        </v-btn>
      </v-col>
      <v-col class="right mb-n10" cols="6">
        <category name="聯賽資訊">
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
              cols="12"
              md="4"
            >
              <link-card
                brand="youtube"
                link="https://www.youtube.com/channel/UCSXjGuAfR7XSVkPo7mvGacQ?sub_confirmation=1"
                hover-text="@RSLeague"
              />
            </v-col>
            <v-col
              cols="12"
              md="4"
            >
              <link-card
                brand="twitch"
                link="https://www.twitch.tv/rsleague"
                hover-text="@RSLeague"
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
              cols="4"
            >
              <v-card>
                <v-card-text>
                  <div>SET {{ i + 1 }}</div>
                  <div class="display-1 text--primary mb-2">
                    {{ set.title }} <span class="font-weight-light text-uppercase">{{ set.subtitle }}</span>
                  </div>
                  <v-img
                    aspect-ratio="1"
                    class="mx-auto"
                    :src="require('~/assets/images/home/' + set.image)"
                    width="80%"
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
                    cols="6"
                  >
                    <v-card flat>
                      <div class="d-flex justify-space-between">
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
                        <v-img
                          class="flex-grow-0 mx-3"
                          :src="require(`~/assets/images/tracks/${track.id}.jpg`)"
                          width="160"
                          height="120"
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
            RSL 夢想盃本季聯賽邀請到知名聯賽主播「蛋蛋」、跑跑卡丁車專業講評「爆哥」、校園五速嘴解說「SpaceQ」，為參與賽事的各位帶來精采的播報內容。
          </template>
          <v-row no-gutters>
            <v-col
              v-for="(host, i) in hosts"
              :key="i"
              cols="4"
            >
              <v-img
                class="host-avatar"
                :src="require(`~/assets/images/host/${host.avatar}`)"
                gradient="to bottom, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, .8) 100%"
                width="360"
                height="360"
                :alt="host.name"
              >
                <v-row class="px-8 py-2 fill-height white--text" align="end">
                  <v-col>
                    <div class="subheading">
                      {{ host.title }}
                    </div>
                    <div class="headline font-weight-bold">
                      {{ host.name }}
                      <span v-if="host.alias">{{ host.alias }}</span>
                    </div>
                  </v-col>
                </v-row>
              </v-img>
            </v-col>
          </v-row>
        </category>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Particles from '~/components/common/particles'
import Category from '~/components/home/section/league/category'
import LinkCard from '~/components/home/section/league/link-card'
import tracks from '~/assets/data/season1/tracks'

export default {
  name: 'League',
  components: {
    Particles,
    Category,
    LinkCard
  },
  props: {},
  data: () => ({
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
      { name: '蛋蛋', alias: 'DanDan', title: '知名聯賽賽評', avatar: 'dandan.jpg' },
      { name: '爆哥', alias: 'NeaL', title: '競速專業講評', avatar: 'baoger.jpg' },
      { name: 'Space Q', alias: '', title: '校園五速嘴解說', avatar: 'spaceq.jpg' }
    ]
  }),
  computed: {},
  watch: {},
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
#league {
  background: #F2F2F2;
  position: relative;
}
.particles {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}
.left > *,
.right {
  position: relative;
}
.host-avatar {
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
}
</style>
