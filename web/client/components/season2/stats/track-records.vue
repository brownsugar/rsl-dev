<template>
  <v-container class="track-records white">
    <v-row
      v-for="(track, i) in tracks.speed"
      :key="track.id"
      class="track"
      :class="{ 'grey lighten-5': i % 2 !== 0 }"
    >
      <v-col
        class="px-4"
        cols="12"
        md="2"
      >
        <v-img
          class="ml-auto mr-auto ml-md-0"
          :src="require(`~/assets/images/tracks/${track.id}.jpg`)"
          :aspect-ratio="4 / 3"
          :width="150"
          :alt="track.name"
        />
      </v-col>
      <v-col
        class="text-md-h6 d-flex justify-center justify-md-start align-center py-0 py-md-3"
        cols="12"
        md="3"
      >
        {{ track.name }}
      </v-col>
      <v-col
        class="text-h6 font-weight-regular d-flex justify-center justify-md-start align-center py-0 py-md-3"
        cols="12"
        md="2"
      >
        {{ trackBest[track.id].time }}
      </v-col>
      <v-col
        class="d-flex flex-column justify-center align-center align-md-start py-2 py-md-3"
        cols="12"
        md="4"
      >
        <div class="text-h6 font-weight-bold">
          {{ trackBest[track.id].player }}
        </div>
        <div class="d-flex align-center">
          <Mark
            category="season2"
            :team="trackBest[track.id].team"
            small
          />
          <span class="grey--text text--darken-2 ml-1">
            {{ trackBest[track.id].team }}
          </span>
        </div>
      </v-col>
      <v-col
        class="font-weight-light d-flex justify-center justify-md-start align-center"
        cols="12"
        md="1"
      >
        {{ trackBest[track.id].stage }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import Mark from '~/components/common/mark'
import tracks from '~/data/season2/tracks'

export default {
  name: 'TrackRecords',
  components: {
    Mark
  },
  data: () => ({
    tracks
  }),
  computed: {
    ...mapState({
      config: state => state.config.season2
    }),
    trackBest () {
      return this.config.track_record.reduce((result, track) => {
        result[track.id] = track
        return result
      }, {})
    }
  }
}
</script>
