<template>
  <div class="players">
    <v-sheet
      class="mt-4"
      outlined
      rounded
    >
      <v-data-table
        :headers="headers"
        :items="playerStats"
        :items-per-page="topPlayers"
        hide-default-footer
      />
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
      以上數據不含單挑賽、同分加賽等記錄。
    </v-alert>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import players from '~/data/kart15th/players'

export default {
  name: 'Players',
  layout: 'kart15th',
  props: {
    topPlayers: {
      type: Number,
      default: 32
    }
  },
  computed: {
    ...mapState({
      playerStatsRaw: state => state.config.kart15th.player_stats
    }),
    headers () {
      const rankData = []
      for (let i = 0; i < 8; i++) {
        rankData.push({
          text: (i + 1) + ' 位次數',
          value: `rankStats[${i}].count`
        })
      }

      return [{
        text: '選手名稱',
        value: 'name',
        sortable: false
      },
      ...rankData,
      {
        text: '失敗次數',
        value: 'rankStats[8].count'
      },
      {
        text: '總出賽場數',
        value: 'trackTotal'
      },
      {
        text: '平均單場積分',
        value: 'scoreAvg'
      }]
    },
    players () {
      const result = players.filter(player => player.top <= this.topPlayers)
      return result.map(player => player.name)
    },
    playerStats () {
      let stats = []
      try {
        stats = JSON.parse(this.playerStatsRaw)
      } catch (e) {}
      return stats.filter(stat => this.players.includes(stat.name))
    }
  }
}
</script>
