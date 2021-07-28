<template>
  <div class="tracks white">
    <v-data-table
      :headers="headers"
      :items="trackRecords"
      :items-per-page="trackRecords.length"
      hide-default-footer
    >
      <template #item.name="{ item, value }">
        <div class="d-md-flex align-center">
          <v-img
            class="flex-grow-0 mt-3 mb-1 mb-md-3 mr-md-4"
            :src="require(`~/assets/images/tracks/${item.id}.jpg`)"
            :aspect-ratio="4 / 3"
            :width="150"
            :alt="value"
          />
          {{ value }}
        </div>
      </template>
      <template #item.player="{ item, value }">
        <div class="text-body-1 font-weight-bold">
          {{ value }}
        </div>
        <div class="d-flex align-center">
          <Mark
            category="season2"
            :team="item.team"
            small
          />
          <span class="grey--text text--darken-2 ml-1">
            {{ item.team }}
          </span>
        </div>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Mark from '~/components/common/mark'
import tracks from '~/data/season2/tracks'

export default {
  name: 'Tracks',
  components: {
    Mark
  },
  data: () => ({
    headers: [
      {
        text: '賽道名稱',
        value: 'name',
        sortable: false
      },
      {
        text: '最佳記錄',
        value: 'time',
        sortable: false
      },
      {
        text: '記錄保持人',
        value: 'player',
        sortable: false
      },
      {
        text: '刷新階段',
        value: 'stage',
        sortable: false
      }
    ]
  }),
  computed: {
    ...mapState({
      trackRecordsRaw: state => state.config.season2.track_record
    }),
    tracks () {
      return tracks.speed.reduce((result, track) => {
        result[track.id] = track.name
        return result
      }, {})
    },
    trackRecords () {
      return this.trackRecordsRaw.map(track => ({
        ...track,
        name: this.tracks[track.id]
      }))
    }
  }
}
</script>
