<template>
  <post-layout
    :title="mainTitle"
    :content="post.content.rendered"
    :breadcrumb="breadcrumb"
  >
    <template #toolbar>
      <div class="grey--text">
        發表於 {{ post.date | moment(DATETIME_FORMAT) }}
      </div>
    </template>
    <template
      v-if="type === 'post'"
      #actions
    >
      <v-btn
        text
        @click="backToList"
      >
        <v-icon left>
          $angleLeft
        </v-icon>
        返回列表
      </v-btn>
    </template>
  </post-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import PostLayout from '~/components/post/layout'
import { DATETIME_FORMAT } from '~/assets/data/const'

export default {
  name: 'PostSingle',
  components: {
    PostLayout
  },
  props: {
    type: {
      type: String,
      default: 'post'
    },
    // Override original title
    title: {
      type: String,
      default: ''
    },
    post: {
      type: Object,
      default: () => {}
    },
    listPath: {
      type: String,
      default: ''
    },
    listLabel: {
      type: String,
      default: ''
    },
    fromRoute: {
      type: Object,
      default: () => {}
    }
  },
  data: () => ({
    DATETIME_FORMAT
  }),
  computed: {
    ...mapGetters('news', [
      'getCategoryById'
    ]),
    mainTitle () {
      if (this.title) {
        return this.title
      }
      if (this.post && this.post.title) {
        return this.post.title.rendered
      }
      return '404 Not Found'
    },
    categoryName () {
      if (this.post) {
        const catId = this.post.categories[0]
        const category = this.getCategoryById(catId)
        if (category.name) {
          return category.name
        }
      }
      return '未分類'
    },
    breadcrumb () {
      const base = [{
        text: '首頁',
        to: '/'
      }]
      if (this.listPath && this.listLabel) {
        base.push({
          text: this.listLabel,
          to: this.listPath,
          exact: true
        })
      }
      if (this.type === 'post') {
        base.push({
          text: this.categoryName,
          disabled: true
        })
      }
      base.push({
        text: '',
        disabled: true
      })
      return base
    }
  },
  watch: {},
  mounted () {
  },
  methods: {
    backToList () {
      if (this.fromRoute && this.fromRoute.name === 'news') {
        this.$router.push(this.fromRoute)
      } else {
        this.$router.push('/news')
      }
    }
  },
  head: self => ({
    title: self.mainTitle
  })
}
</script>

<style lang="scss" scoped>
</style>
