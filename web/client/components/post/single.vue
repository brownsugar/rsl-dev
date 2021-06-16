<template>
  <post-layout
    :banner="banner"
    :title="mainTitle"
    :content="post.content.rendered"
    :breadcrumb="breadcrumb"
  >
    <template #toolbar>
      <div class="grey--text">
        <span v-if="type === 'post'">發表於 {{ $dateFns.format(post.date, DATETIME_FORMAT) }}</span>
        <span v-else>最後更新於 {{ $dateFns.format(post.modified, DATETIME_FORMAT) }}</span>
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
import { DATETIME_FORMAT } from '~/assets/utils/const'
import postUtils from '~/assets/utils/post'

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
    banner: {
      type: String,
      default: undefined
    },
    // Override original title
    title: {
      type: String,
      default: ''
    },
    post: {
      type: Object,
      default: () => ({})
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
      default: () => ({})
    }
  },
  data: () => ({
    DATETIME_FORMAT
  }),
  head () {
    const metaInfo = {
      title: this.mainTitle,
      meta: [
        { property: 'og:title', content: this.mainTitle, hid: 'og:title' }
      ]
    }
    const desc = this.post.excerpt.rendered
    if (desc) {
      metaInfo.meta.push({ property: 'og:description', content: desc, hid: 'og:description' })
      metaInfo.meta.push({ property: 'description', content: desc, hid: 'description' })
    }
    const image = postUtils.getFeaturedImage(this.post._embedded, true)
    if (image) {
      metaInfo.meta.push({ property: 'og:image', content: image, hid: 'og:image' })
    }
    return metaInfo
  },
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
    season () {
      // Currently season name is same as layout name, so this condition is fine.
      return this.$nuxt.layoutName
    },
    category () {
      if (this.post) {
        const catId = this.post.categories[0]
        const category = this.getCategoryById(catId)
        if (category.name) {
          return category
        }
      }
      return {
        name: 'Unknown'
      }
    },
    breadcrumb () {
      const base = [{
        text: '首頁',
        to: '/' + this.season,
        exact: true
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
          text: this.category.name,
          to: '/' + this.season + '/news/category/' + this.category.slug
        })
      }
      base.push({
        text: '',
        disabled: true
      })
      return base
    }
  },
  methods: {
    backToList () {
      const routeName = this.fromRoute ? this.fromRoute.name : ''
      if (routeName && routeName.startsWith(this.season + '-news')) {
        this.$router.push({
          path: this.fromRoute.path,
          query: this.fromRoute.query
        })
      } else {
        this.$router.push('/' + this.season + '/news')
      }
    }
  }
}
</script>
