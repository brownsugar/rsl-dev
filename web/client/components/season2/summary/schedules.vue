<template>
  <section class="schedules">
    <sub-title
      text="Season 2 聯賽時程"
    />
    <v-card class="mt-8 px-0 px-sm-4">
      <v-timeline
        class="pt-10 pb-2"
        align-top
        dense
      >
        <v-timeline-item
          v-for="(schedule, i) in schedules"
          :key="i"
          :color="getScheduleDotColor(schedule)"
          class="pb-8"
          small
        >
          <v-container>
            <v-row>
              <v-col
                class="mb-2 mb-lg-0 py-0 d-flex align-center d-lg-block"
                cols="12"
                lg="3"
                xl="2"
              >
                <div class="text-subtitle-1 font-weight-bold">
                  {{ schedule.dates }}
                </div>
                <div class="text-subtitle-2 ml-2 ml-lg-0">
                  {{ schedule.time }}
                </div>
              </v-col>
              <v-col class="py-0">
                <div class="text-subtitle-1 font-weight-bold">
                  {{ schedule.title }}
                </div>
                <div
                  v-if="schedule.content"
                  class="text-body-1 mt-2"
                  v-html="schedule.content"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-timeline-item>
      </v-timeline>
    </v-card>
  </section>
</template>

<script>
import SubTitle from '~/components/season2/common/sub-title'

export default {
  name: 'Schedules',
  components: {
    SubTitle
  },
  data: () => ({
    schedules: [
      {
        dates: '07/10~07/11',
        time: '19:00',
        title: '海選賽 I',
        content: '從所有參賽隊伍中決定晉級 16 強的組別，採單淘汰賽制，每個場次進行 1 回合，搶 5 勝晉級。'
      },
      {
        dates: '07/17~07/18',
        time: '19:00',
        title: '海選賽 II',
        content: ''
      },
      {
        dates: '07/24~07/25',
        time: '19:00',
        title: '16 強賽 I',
        content: '將 16 強隊伍抽籤分配至 A/B/C/D 四個組別，每個組別分別進行循環賽，各組別戰績前二名之隊伍晉級 8 強（A/B 組晉級至 8 強 A 組、C/D 組晉級至 8 強 B 組）。<br>每個場次進行三個回合，分別為團體競速賽、團體道具賽，以及個人競速賽單挑，每個回合皆為五戰三勝。'
      },
      {
        dates: '07/31~08/01',
        time: '19:00',
        title: '16 強賽 II',
        content: ''
      },
      {
        dates: '08/07~08/08',
        time: '19:00',
        title: '16 強賽 III',
        content: ''
      },
      {
        dates: '08/14~08/15',
        time: '19:00',
        title: '8 強賽',
        content: '8 強賽 A/B 兩個組別分別進行循環賽，A 組戰績第一名隊伍晉級 4 強 A 組、第二名隊伍進入 4 強 B 組；B 組戰績第一名隊伍晉級 4 強 B 組、第二名隊伍進入 4 強 A 組。<br>每個場次進行三個回合，分別為團體競速賽、團體道具賽，以及個人競速賽單挑，每個回合皆為五戰三勝。'
      },
      {
        dates: '08/21~08/22',
        time: '19:00',
        title: '休戰一週',
        content: '看了這麼多場刺激的對決後，為了能讓觀眾喘口氣，也讓選手有充分的時間做最後衝刺和練習，請大家休息一下，屏息以待，一起期待下週的最終之戰！'
      },
      {
        dates: '08/28',
        time: '19:00',
        title: '4 強賽',
        content: '4 強賽採雙敗淘汰賽制，A/B 兩個組別分別進行對決，各組勝利隊伍晉級勝組準決賽、落敗隊伍進入敗組；敗組對決後勝出隊伍進入敗組準決賽、落敗隊伍則為本次聯賽殿軍。<br>每個場次進行三個回合，分別為團體競速賽、團體道具賽七戰四勝，以及個人競速賽單挑五戰三勝。'
      },
      {
        dates: '08/29',
        time: '後續公佈',
        title: '總決賽 / 準決賽 / 台韓交流賽',
        content: '首先進行勝組準決賽，勝利隊伍晉級總決賽、落敗隊伍進入敗組準決賽，接著進行敗組準決賽，勝出隊伍晉級總決賽、落敗隊伍則為本次聯賽季軍。<br>總決賽由兩隊隊伍進行最終對決，勝利隊伍即為 RSL 夢想盃跑跑聯賽第二季冠軍，落敗隊伍則為亞軍。<br>每個場次進行三個回合，分別為團體競速賽、團體道具賽七戰四勝，以及個人競速賽單挑五戰三勝。<br>台韓交流賽將由本季聯賽冠軍隊伍對上韓國職業聯賽隊伍，於總決賽後精彩登場，採用專屬賽制，更多資訊請關注 RSL 賽事聯盟官網公告。'
      }
    ]
  }),
  methods: {
    getScheduleDotColor (schedule) {
      const [begin, end] = schedule.dates.split('~')

      const endDate = new Date('2021/' + (end || begin))
      const now = new Date()
      if (this.$dateFns.isAfter(now, endDate)) {
        return 'primary'
      } else {
        return 'grey lighten-1'
      }
    }
  }
}
</script>
