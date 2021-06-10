<template>
  <v-container class="py-6" fluid>
    <v-row justify="center">
      <v-col
        cols="12"
        md="10"
        lg="8"
      >
        <primary-title text="最新消息" />
        <v-chip-group
          class="mt-3"
          mandatory
        >
          <v-chip
            v-for="category in categoryChips"
            :key="category.slug"
            :class="{ 'primary--text': catSlug === category.slug }"
            :to="category.slug ? '/season1/news/category/' + category.slug : '/season1/news'"
          >
            {{ category.name }}
          </v-chip>
        </v-chip-group>
        <v-row>
          <template v-if="loading">
            <v-col
              v-for="i in 3"
              :key="i"
              cols="12"
              sm="6"
              md="4"
            >
              <v-skeleton-loader type="card" />
            </v-col>
          </template>
          <template v-else-if="current.length">
            <v-col
              v-for="post in current"
              :key="post.id"
              cols="12"
              sm="6"
              md="4"
            >
              <v-card>
                <n-link :to="'/season1/news/' + post.id">
                  <v-img
                    :aspect-ratio="1280 / 628"
                    :src="featuredImage(post._embedded)"
                    width="100%"
                  />
                </n-link>

                <v-card-title class="post-title">
                  {{ post.title.rendered }}
                </v-card-title>

                <v-card-subtitle>
                  <v-chip
                    v-if="isNew(post.date)"
                    color="primary"
                    x-small
                  >
                    NEW
                  </v-chip>
                  <span :title="formatPostDate(post.date)">
                    發表於 {{ formatPostDate(post.date, true) }}
                  </span>
                  •
                  {{ categoryName(post.categories[0]) }}
                </v-card-subtitle>

                <v-card-actions>
                  <v-spacer />
                  <v-btn
                    :to="'/season1/news/' + post.id"
                    color="primary"
                    text
                    nuxt
                  >
                    閱讀內文
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </template>
          <template v-else>
            <v-col class="my-2" align="center">
              <v-img
                class="mx-auto"
                aspected-ratio="576 / 600"
                src="~/assets/images/common/climb.png"
                width="300"
              />
              <p class="mt-6">
                還沒有相關消息，稍後再來看看吧！
              </p>
            </v-col>
          </template>
        </v-row>
        <v-pagination
          v-if="totalPage > 1"
          v-model="page"
          class="mt-4"
          :length="totalPage"
          prev-icon="$angleLeft"
          next-icon="$angleRight"
          :disabled="loading"
          @input="switchPage"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import PrimaryTitle from '~/components/common/primary-title'
import { DATE_FORMAT, DATETIME_FORMAT } from '~/assets/utils/const'
import postUtils from '~/assets/utils/post'

export default {
  name: 'NewsList',
  components: {
    PrimaryTitle
  },
  layout: 'season1',
  async asyncData ({ store, route }) {
    const catSlug = route.params.slug
    const page = Number(route.query.page || 1)
    const params = {
      catSlug,
      page
    }

    await store.dispatch('news/load', params)
    return params
  },
  data () {
    return {
      catSlug: this.$route.params.slug,
      page: 1
    }
  },
  head () {
    const category = this.currentCategory.name
    const title = (category ? '「' + category + '」分類的' : '') + '最新消息'

    return {
      title
    }
  },
  computed: {
    ...mapState('news', [
      'categories',
      'current',
      'totalPage',
      'loading'
    ]),
    ...mapGetters('news', [
      'getCategoryById'
    ]),
    categoryChips () {
      const categories = [
        {
          slug: undefined,
          name: '全部'
        },
        ...this.categories
      ]
      return categories.filter(cat => cat.slug !== 'uncategorized')
    },
    currentCategory () {
      return this.catSlug ? this.categories.find(cat => cat.slug === this.catSlug) : {}
    }
  },
  watch: {
    '$route.query.page' (page) {
      this.$store.dispatch('news/load', {
        page
      })
    }
  },
  methods: {
    featuredImage (embedded) {
      const image = postUtils.getFeaturedImage(embedded)
      return image || this.$config.rsl.cover
    },
    isNew (date) {
      const posted = new Date(date)
      const now = new Date()
      return this.$dateFns.differenceInDays(now, posted) <= 7
    },
    formatPostDate (date, relative = false) {
      const posted = new Date(date)
      if (!relative) {
        return this.$dateFns.format(posted, DATETIME_FORMAT)
      }

      const now = new Date()
      const diff = this.$dateFns.differenceInMonths(now, posted)
      // use original date if more than 1 month
      if (diff >= 1) {
        return this.$dateFns.format(posted, DATE_FORMAT)
      } else {
        return this.$dateFns.formatDistance(posted, now, {
          addSuffix: true
        })
      }
    },
    categoryName (catId) {
      const category = this.getCategoryById(catId)
      return category.name || '未分類'
    },
    switchPage (page) {
      this.$router.push({
        query: {
          ...this.$route.query,
          page
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.post-title {
  margin-bottom: .3em;
  line-height: 1.2;
}
</style>
