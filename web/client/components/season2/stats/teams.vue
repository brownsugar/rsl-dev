<template>
  <div class="teams">
    <v-tabs
      :vertical="$breakpoint.is.mdAndUp"
      show-arrows
    >
      <template v-for="(stat, i) in trackStats">
        <v-divider
          v-if="i > 0 && i % 4 === 0"
          :key="'divider-' + stat.team"
        />
        <v-tab
          :key="'tab-' + stat.team"
          class="justify-start"
        >
          <Mark
            class="flex-grow-0 mr-2"
            category="season2"
            :team="stat.team"
            small
          />
          {{ stat.team }}
        </v-tab>
        <v-tab-item
          :key="'tab-item-' + stat.team"
          class="pt-6 pb-4 px-2 px-md-4"
          eager
        >
          <two-line-title
            :top="'TOP 16 Group ' + getGroup(i)"
          >
            <template #bottom>
              <div class="d-flex align-center">
                <Mark
                  class="mr-2"
                  category="season2"
                  :team="stat.team"
                  width="48"
                />
                {{ stat.team }}
              </div>
            </template>
          </two-line-title>
          <v-sheet
            class="mt-4"
            outlined
            rounded
          >
            <v-data-table
              :headers="headers"
              :items="stat.data"
              :items-per-page="stat.data.length"
              group-by="mode"
              show-group-by
              hide-default-footer
            >
              <template #group.header="{ group, groupBy, isOpen, toggle }">
                <th :colspan="headers.length">
                  <v-btn
                    icon
                    small
                    @click="toggle"
                  >
                    <fa
                      :icon="isOpen ? 'fa-solid fa-minus' : 'fa-solid fa-plus'"
                    />
                  </v-btn>
                  {{ getHeader(groupBy[0]).text }}：{{ group }}
                </th>
              </template>
              <template #item.track="{ item, value }">
                {{ tracks[item.modeKey][value] }}
              </template>
              <template #item.rate="{ value }">
                <span
                  v-if="value === -1"
                  class="grey--text text--lighten-1"
                >N/A</span>
                <span
                  v-else
                >{{ value }}%</span>
              </template>
            </v-data-table>
          </v-sheet>
          <v-alert
            class="mt-6"
            type="info"
            dense
            outlined
            prominent
          >
            <template #prepend>
              <v-icon class="v-alert__icon">
                $notes
              </v-icon>
            </template>
            以上數據僅包含團體賽出賽記錄。
          </v-alert>
        </v-tab-item>
      </template>
    </v-tabs>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Mark from '~/components/common/mark'
import TwoLineTitle from '~/components/season2/common/two-line-title'
import tracks from '~/data/season2/tracks'

export default {
  name: 'Teams',
  components: {
    Mark,
    TwoLineTitle
  },
  data: () => ({
    headers: [
      {
        text: '賽道名稱',
        value: 'track',
        sortable: false,
        groupable: false
      },
      {
        text: '賽道類型',
        value: 'mode'
      },
      {
        text: '勝場數',
        value: 'wins',
        groupable: false
      },
      {
        text: '敗場數',
        value: 'loses',
        groupable: false
      },
      {
        text: '總場數',
        value: 'total',
        groupable: false
      },
      {
        text: '賽道勝率',
        value: 'rate',
        groupable: false
      }
    ],
    groups: ['A', 'B', 'C', 'D']
  }),
  computed: {
    ...mapState({
      trackStatsRaw: state => state.config.season2.track_stats
    }),
    tracks () {
      return {
        speed: tracks.speed.reduce((result, track) => {
          result[track.id] = track.name
          return result
        }, {}),
        item: tracks.item.reduce((result, track) => {
          result[track.id] = track.name
          return result
        }, {})
      }
    },
    trackStats () {
      let obj = []
      try {
        obj = JSON.parse(this.trackStatsRaw)
      } catch (e) {}
      return obj.map((stat) => {
        stat.data = stat.data.map((track) => {
          const isSpeed = track.track in this.tracks.speed
          const total = track.wins + track.loses

          return {
            ...track,
            modeKey: isSpeed ? 'speed' : 'item',
            mode: isSpeed ? '競速賽道' : '道具賽道',
            total,
            rate: total === 0 ? -1 : Math.ceil(track.wins / total * 100)
          }
        })
        return stat
      })
    }
  },
  methods: {
    getGroup (i) {
      const index = Math.ceil((i + 1) / 4) - 1
      return this.groups[index]
    },
    getHeader (value) {
      return this.headers.find(header => header.value === value) || {}
    }
  }
}
</script>
