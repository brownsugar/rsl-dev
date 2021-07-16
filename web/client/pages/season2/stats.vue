<template>
  <v-container class="stats py-16" fluid>
    <v-row justify="center">
      <v-col
        cols="12"
        md="10"
        lg="8"
      >
        <sub-title
          text="賽道/隊伍數據"
        />
        <link-tabs
          class="mt-8 mb-4"
          :items="statTypes"
          base-path="/season2/stats"
        />
        <component
          :is="currentType.component"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SubTitle from '~/components/season2/common/sub-title'
import LinkTabs from '~/components/season2/common/link-tabs'
import TrackRecords from '~/components/season2/stats/track-records'
import TeamStats from '~/components/season2/stats/team-stats'

export default {
  name: 'Stats',
  components: {
    SubTitle,
    LinkTabs
  },
  layout: 'season2',
  middleware ({ route, redirect }) {
    const defaultSlug = 'track-records'
    if (!route.params.slug) {
      return redirect('/season2/stats/' + defaultSlug)
    }
  },
  computed: {
    statTypes () {
      const types = [
        {
          slug: 'track-records',
          name: '賽道記錄榜',
          component: TrackRecords
        },
        {
          slug: 'track-stats',
          name: '隊伍賽道數據',
          component: TeamStats
        }
      ]
      return types
    },
    slug () {
      return this.$route.params.slug
    },
    currentType () {
      const item = this.statTypes.find(type => type.slug === this.slug)
      return item || {}
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
