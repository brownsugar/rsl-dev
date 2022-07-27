<template>
  <v-img
    class="flex-grow-0"
    :width="markWidth"
    aspect-ratio="1"
    :src="require('~/assets/images/marks/' + markId + (small ? '_s' : '') + '.png')"
  />
</template>

<script>
import marksS2 from '~/data/season2/marks'
import teamsS3 from '~/data/season3/teams'

const categories = {
  season2: marksS2,
  season3: teamsS3.map(team => ({
    team: team.name,
    id: team.markId
  }))
}
const defaultId = 48 // [?] mark

export default {
  name: 'TeamMark',
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
    width: {
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
    },
    markWidth () {
      if (this.width) {
        return this.width
      }
      return this.small ? 20 : 100
    }
  }
}
</script>
