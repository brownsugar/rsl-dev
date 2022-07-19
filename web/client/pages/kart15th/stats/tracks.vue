<template>
  <div class="tracks">
    <v-data-table
      :headers="headers"
      :items="trackRecords"
      :items-per-page="trackRecords.length"
      disable-sort
      hide-default-footer
    >
      <template #item.id="{ item, value }">
        <v-img
          class="mt-4 mt-md-3 mb-1 mb-md-3 mr-md-4"
          :src="require(`~/assets/images/tracks/${value}.jpg`)"
          :aspect-ratio="4 / 3"
          :width="150"
          :alt="item.name"
        />
      </template>
      <template #item.player="{ item, value }">
        <div class="text-body-1">
          {{ value }}
        </div>
        <div class="d-flex align-center">
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
import tracks from '~/data/kart15th/tracks'

export default {
  name: 'Tracks',
  components: {
  },
  layout: 'kart15th',
  data: () => ({
    headers: [
      {
        text: '',
        value: 'id',
        width: 220
      },
      {
        text: '賽道名稱',
        value: 'name'
      },
      {
        text: '最佳記錄',
        value: 'time'
      },
      {
        text: '記錄保持人',
        value: 'player'
      },
      {
        text: '刷新階段',
        value: 'stage'
      }
    ]
  }),
  computed: {
    ...mapState({
      trackRecordsRaw: state => state.config.kart15th.track_record
    }),
    tracks () {
      return tracks.reduce((result, track) => {
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

<style lang="scss" scoped>
.v-data-table {

  :deep(.v-data-table-header) {
    @include breakpoint(md) {
      display: none;
    }
  }
  :deep(.v-data-table__mobile-row:first-child) {

    .v-data-table__mobile-row__header {
      display: none;
    }
    .v-data-table__mobile-row__cell {
      display: flex;
      flex-grow: 1;
    }
  }
}
</style>
