<template>
  <v-img
    :src="require('~/assets/images/marks/' + markId + (small ? '_s' : '') + '.png')"
  />
</template>

<script>
import marksS2 from '~/data/season2/marks'

const categories = {
  season2: marksS2
}
const defaultId = 48 // [?] mark

export default {
  name: 'Mark',
  props: {
    category: {
      type: String,
      default: ''
    },
    id: {
      type: [Number, String],
      default: defaultId
    },
    team: {
      type: [Number, String],
      default: ''
    },
    small: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    marks () {
      if (this.category in categories) {
        return categories[this.category]
      }
      return null
    },
    markIds () {
      if (this.marks) {
        return this.marks.map(mark => mark.id)
      }
      return []
    },
    markId () {
      const marks = this.marks
      if (marks) {
        if (this.team) {
          const mark = this.marks.find(m => m.team === this.team)
          if (mark) {
            return mark.id
          }
        } else {
          const id = Number(this.id)
          if (this.markIds.includes(id)) {
            return id
          }
        }
      }
      return defaultId
    }
  }
}
</script>
