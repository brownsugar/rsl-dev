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
          class="mt-8 mb-2"
          :items="children"
          base-path="/season2/stats"
        />
        <div class="d-flex justify-end mb-2">
          <v-chip-group
            v-model="topGroups"
            color="primary"
            mandatory
          >
            <v-chip
              v-for="rank in topRanks"
              :key="rank"
              :value="rank"
              :disabled="!currentType.topRanksSelector"
              filter
              outlined
            >
              TOP {{ rank }}
            </v-chip>
          </v-chip-group>
        </div>
        <v-fade-transition mode="out-in">
          <nuxt-child
            keep-alive
            v-bind="childBindings"
          />
        </v-fade-transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SubTitle from '~/components/season2/common/sub-title'
import LinkTabs from '~/components/season2/common/link-tabs'

const children = [
  {
    slug: 'tracks',
    name: '賽道記錄榜'
  },
  {
    slug: 'teams',
    name: '隊伍賽道數據',
    topRanksSelector: true
  },
  {
    slug: 'players',
    name: '選手首位數據',
    topRanksSelector: true
  }
]

const topRanks = [4, 8, 16]

export default {
  name: 'Stats',
  components: {
    SubTitle,
    LinkTabs
  },
  layout: 'season2',
  middleware ({ route: { query, matched }, redirect }) {
    if (matched.length === 1) {
      const defaultSlug = children[0].slug
      return redirect({
        path: '/season2/stats/' + defaultSlug,
        query
      })
    }
  },
  data: () => ({
    children,
    topRanks,
    topGroups: topRanks[0]
  }),
  head () {
    const title = this.currentType.name + ' - S2 聯賽數據記錄'

    return {
      title,
      meta: [
        { property: 'og:title', content: title, hid: 'og:title' }
      ]
    }
  },
  computed: {
    slug () {
      const path = this.$route.path
      const pattern = /stats\/(.+)/i
      if (pattern.test(path)) {
        return path.match(pattern)[1]
      }
      return null
    },
    currentType () {
      const item = this.children.find(type => type.slug === this.slug)
      return item || {}
    },
    childBindings () {
      const bindings = {}
      if (this.currentType.topRanksSelector) {
        bindings['top-groups'] = this.topGroups
      }
      return bindings
    }
  },
  watch: {
    'currentType.name': {
      handler (val) {
        if (!val) {
          this.$router.replace('/season2/stats/' + this.children[0].slug)
        }
      },
      immediate: true
    }
  }
}
</script>
