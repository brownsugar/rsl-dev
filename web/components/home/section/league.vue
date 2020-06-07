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
                    class="mx-auto"
                    :src="require('~/assets/images/home/' + set.imageFile)"
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
          TEST
        </category>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Particles from '~/components/common/particles'
import Category from '~/components/home/section/league/category'
import LinkCard from '~/components/home/section/league/link-card'

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
</style>
