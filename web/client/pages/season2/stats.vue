<template>
  <v-container class="stats py-16" fluid>
    <v-row justify="center">
      <v-col
        cols="12"
        md="10"
        lg="8"
      >
        <sub-title
          text="Season 2 數據記錄"
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
import Tracks from '~/components/season2/stats/tracks'
import Teams from '~/components/season2/stats/teams'
import Players from '~/components/season2/stats/players'

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
  head: self => ({
    title: self.currentType.name + ' - S2 聯賽數據記錄'
  }),
  computed: {
    statTypes () {
      const types = [
        {
          slug: 'tracks',
          name: '賽道記錄榜',
          component: Tracks
        },
        {
          slug: 'teams',
          name: '隊伍賽道數據',
          component: Teams
        },
        {
          slug: 'players',
          name: '選手首位數據',
          component: Players
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
  },
  watch: {
    'currentType.name': {
      handler (val) {
        if (!val) {
          this.$router.replace({
            params: {
              slug: this.statTypes[0].slug
            }
          })
        }
      },
      immediate: true
    }
  }
}
</script>
