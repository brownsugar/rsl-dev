<template>
  <div class="players">
    <v-tabs
      :vertical="$breakpoint.is.mdAndUp"
      :grow="$breakpoint.is.smAndDown"
      center-active
      show-arrows
    >
      <template v-for="(group, i) in groupStats">
        <v-tab
          :key="'tab-' + i"
          class="justify-md-start"
        >
          {{ group.name }}
        </v-tab>
        <v-tab-item
          :key="'tab-item-' + i"
          class="pt-6 pb-4 px-2 px-md-6"
          eager
        >
          <v-row>
            <v-col
              v-for="team in group.teams"
              :key="team.name"
              cols="12"
              md="6"
            >
              <v-sheet
                outlined
                rounded
              >
                <v-simple-table>
                  <thead>
                    <tr>
                      <th
                        class="grey lighten-3"
                        :colspan="headers.length"
                      >
                        <div class="d-flex justify-space-between">
                          <div class="text-body-2 font-weight-bold d-flex justify-center align-center">
                            <Mark
                              class="mr-2"
                              category="season2"
                              :team="team.name"
                              small
                            />
                            {{ team.name }}
                          </div>
                          <div class="text-right grey--text text--darken-1">
                            總出賽 {{ playerStats[team.name].total }} 張
                            <br v-if="$breakpoint.is.smAndDown">
                            <span v-else>，</span>
                            隊伍首位率 {{ playerStats[team.name].rateTotal === -1 ? 'N/A' : (playerStats[team.name].rateTotal + '%') }}
                          </div>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <th
                        v-for="header in headers"
                        :key="header.value"
                      >
                        {{ header.text }}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="row in playerStats[team.name].data"
                      :key="row.player"
                    >
                      <template v-for="header in headers">
                        <td
                          :key="header.value"
                        >
                          <span
                            v-if="header.value === 'rate'"
                          >
                            {{ row[header.value] === -1 ? 'N/A' : (row[header.value] + '%') }}
                          </span>
                          <span
                            v-else
                          >
                            {{ row[header.value] }}
                          </span>
                        </td>
                      </template>
                    </tr>
                  </tbody>
                </v-simple-table>
              </v-sheet>
            </v-col>
            <v-col cols="12">
              <v-alert
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
                以上數據僅包含團體競速賽出賽記錄。
              </v-alert>
            </v-col>
          </v-row>
        </v-tab-item>
      </template>
    </v-tabs>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Mark from '~/components/common/mark'
import teams from '~/data/season2/teams'

export default {
  name: 'Players',
  components: {
    Mark
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
        text: '選手名稱',
        value: 'player'
      },
      {
        text: '首位數',
        value: 'count'
      },
      {
        text: '首位率',
        value: 'rate'
      }
    ],
    groups: ['A', 'B', 'C', 'D']
  }),
  computed: {
    ...mapState({
      playerStatsRaw: state => state.config.season2.player_stats
    }),
    playerStats () {
      let obj = []
      try {
        obj = JSON.parse(this.playerStatsRaw)
      } catch (e) {}
      return obj.reduce((result, stat) => {
        let sum = 0
        const total = stat.total
        const data = stat.data.map((player) => {
          sum += player.count || 0

          return {
            ...player,
            rate: total === 0 ? -1 : Math.ceil(player.count / total * 100)
          }
        })
        const rateTotal = total === 0 ? -1 : Math.ceil(sum / total * 100)
        result[stat.team] = {
          total,
          data,
          rateTotal
        }
        return result
      }, {})
    },
    topTeams () {
      return teams.filter(team => team.top <= this.topGroups)
    },
    groupStats () {
      const tops = this.topGroups
      const groupCount = tops / 4
      const groups = []
      const topTeams = [...this.topTeams]
      for (let i = 0; i < groupCount; i++) {
        let name = ''
        if (tops > 4) {
          name = 'Group ' + this.groups[i]
        } else {
          name = 'TOP ' + tops
        }
        groups.push({
          name,
          teams: topTeams.splice(0, 4)
        })
      }
      return groups
    }
  }
}
</script>
