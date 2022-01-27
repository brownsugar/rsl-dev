import overallSeasons from '~/data/overall-seasons'

export default {
  props: {
    rootPath: {
      type: String,
      default: '/'
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    sortedItems () {
      const seasonsMenuItem = {
        label: '歷屆聯賽',
        children: overallSeasons
          .map(season => ({
            label: season.name,
            to: '/' + season.code,
            blank: true
          }))
          .filter(child => child.to !== this.rootPath)
      }
      return this.items.concat(seasonsMenuItem)
    }
  },
  methods: {
    isChildActive (item) {
      if (item.children && Array.isArray(item.children)) {
        return item.children.some(item => this.$route.path.startsWith(item.to))
      }
      return false
    }
  }
}
