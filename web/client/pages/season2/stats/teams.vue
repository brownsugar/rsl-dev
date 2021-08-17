<template>
  <div class="teams">
    <v-tabs
      :vertical="$breakpoint.is.mdAndUp"
      :grow="$breakpoint.is.smAndDown"
      center-active
      show-arrows
    >
      <template v-for="(team, i) in topTeams">
        <v-divider
          v-if="i > 0 && i % 4 === 0"
          :key="'divider-' + team.name"
          :vertical="$breakpoint.is.smAndDown"
        />
        <v-tab
          :key="'tab-' + team.name"
          class="justify-md-start"
        >
          <Mark
            class="flex-grow-0 mr-2"
            category="season2"
            :team="team.name"
            small
          />
          {{ team.name }}
        </v-tab>
        <v-tab-item
          :key="'tab-item-' + team.name"
          class="pt-6 pb-4 px-2 px-md-6"
          eager
        >
          <two-line-title
            :top="getTeamTitle(i)"
          >
            <template #bottom>
              <div class="d-flex align-center">
                <Mark
                  class="mr-2"
                  category="season2"
                  :team="team.name"
                  width="48"
                />
                {{ team.name }}
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
              :items="trackStats[team.name]"
              :items-per-page="trackStats[team.name].length"
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
import teams from '~/data/season2/teams'
import tracks from '~/data/season2/tracks'

export default {
  name: 'Teams',
  components: {
    Mark,
    TwoLineTitle
  },
  layout: 'season2',
  props: {
    topGroups: {
      type: Number,
      default: 16
    }
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
      return obj.reduce((result, stat) => {
        result[stat.team] = stat.data.map((track) => {
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
        return result
      }, {})
    },
    topTeams () {
      return teams.filter(team => team.top <= this.topGroups)
    }
  },
  methods: {
    getTeamTitle (i) {
      const tops = this.topGroups
      const result = ['TOP ' + tops]
      const index = Math.ceil((i + 1) / 4) - 1
      const group = tops > 4 ? this.groups[index] : ''
      if (group) {
        result.push('Group ' + group)
      }
      return result.join(' ')
    },
    getHeader (value) {
      return this.headers.find(header => header.value === value) || {}
    }
  }
}
</script>
