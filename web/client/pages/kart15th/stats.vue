<template>
  <v-container class="stats py-16" fluid>
    <v-row justify="center">
      <v-col
        cols="12"
        md="10"
        lg="8"
      >
        <sub-title
          text="15 周年經典賽數據記錄"
        />
        <link-tabs
          class="mt-8 mb-2"
          :items="children"
          slider-color="primary"
          base-path="/kart15th/stats"
        />
        <div class="d-flex justify-end mb-2">
          <v-chip-group
            v-model="topPlayers"
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
import SubTitle from '~/components/kart15th/common/sub-title'
import LinkTabs from '~/components/common/link-tabs'

const children = [
  {
    slug: 'tracks',
    name: '賽道記錄榜'
  },
  {
    slug: 'players',
    name: '選手個人數據',
    topRanksSelector: true
  }
]

const topRanks = [8, 16, 32]

export default {
  name: 'Stats',
  components: {
    SubTitle,
    LinkTabs
  },
  layout: 'kart15th',
  middleware ({ route: { query, matched }, redirect }) {
    if (matched.length === 1) {
      const defaultSlug = children[0].slug
      return redirect({
        path: '/kart15th/stats/' + defaultSlug,
        query
      })
    }
  },
  data: () => ({
    children,
    topRanks,
    topPlayers: topRanks[0]
  }),
  head () {
    const title = this.currentType.name + ' - 15 周年經典賽數據記錄'

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
        bindings['top-players'] = this.topPlayers
      }
      return bindings
    }
  },
  watch: {
    'currentType.name': {
      handler (val) {
        if (!val) {
          this.$router.replace('/kart15th/stats/' + this.children[0].slug)
        }
      },
      immediate: true
    }
  }
}
</script>
