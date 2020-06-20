<template>
  <v-container class="py-6" fluid>
    <v-row justify="center">
      <v-col
        cols="12"
        md="10"
        lg="8"
      >
        <primary-title text="最新消息" />
        <v-row
          class="mt-4"
        >
          <template v-if="loading">
            <v-col
              v-for="i in 3"
              :key="i"
              cols="12"
              sm="6"
              md="4"
            >
              <v-skeleton-loader
                type="card"
              />
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
                <n-link :to="'/news/' + post.id">
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
                  <span :title="formatPostDate(post.date)">
                    <fa :icon="['far', 'clock']" /> 發表於 {{ formatPostDate(post.date, true) }}
                  </span>
                  •
                  {{ categoryName(post.categories[0]) }}
                </v-card-subtitle>

                <v-card-actions>
                  <v-spacer />
                  <v-btn
                    :to="'/news/' + post.id"
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
            <v-col align="center">
              還沒有最新消息 T_T
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
  props: {},
  async asyncData ({ store, route }) {
    const page = Number(route.query.page || 1)
    await store.dispatch('news/load', {
      page
    })
    return {
      page
    }
  },
  data: () => ({
    page: 1
  }),
  computed: {
    ...mapState([
      'site'
    ]),
    ...mapState('news', [
      'current',
      'totalPage',
      'loading'
    ]),
    ...mapGetters('news', [
      'getCategoryById'
    ])
  },
  watch: {
    '$route.query.page' (page) {
      this.$store.dispatch('news/load', {
        page
      })
    }
  },
  mounted () {
  },
  methods: {
    featuredImage (embedded) {
      const image = postUtils.getFeaturedImage(embedded)
      return image || this.$config.rsl.cover
    },
    formatPostDate (date, relative = false) {
      const posted = this.$moment(date)
      if (!relative) {
        return posted.format(DATETIME_FORMAT)
      }

      const now = this.$moment()
      const diff = posted.diff(now, 'months')
      if (diff > 2) {
        return posted.format(DATE_FORMAT)
      } else {
        return posted.fromNow()
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
  },
  head: () => ({
    title: '最新消息'
  })
}
</script>

<style lang="scss" scoped>
.post-title {
  line-height: 1.2;
  margin-bottom: .3em;
}
</style>
