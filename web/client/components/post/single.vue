<template>
  <div class="post-single">
    <v-img
      id="banner"
      src="~/assets/images/common/background/race.png"
      height="300"
    >
      <v-row
        class="fill-height text-center"
        align="center"
        justify="center"
      >
        <v-col cols="8">
          <h1 class="white--text display-1 font-weight-bold">
            {{ post.title.rendered }}
          </h1>
          <v-breadcrumbs
            class="justify-center"
            :items="breadcrumb"
            dark
            large
          >
            <template #divider>
              <v-icon>$angleRight</v-icon>
            </template>
          </v-breadcrumbs>
        </v-col>
      </v-row>
    </v-img>
    <v-row
      align="center"
      justify="center"
      no-gutters
    >
      <v-col cols="6">
        <v-card
          class="mx-auto mb-12"
          style="margin-top: -64px;"
        >
          <v-toolbar flat>
            <div class="grey--text">
              發表於 {{ post.date | moment(DATETIME_FORMAT) }}
            </div>
            <v-spacer />
            <v-tooltip left>
              <template #activator="{ on, attrs }">
                <v-btn
                  icon
                  :disabled="copied.value"
                  v-bind="attrs"
                  v-on="on"
                  @click="copyUrl"
                >
                  <v-scale-transition mode="out-in" origin="center">
                    <fa
                      v-if="copied.value"
                      key="copied-true"
                      :icon="['fas', 'check']"
                    />
                    <fa
                      v-else
                      key="copied-false"
                      :icon="['fas', 'link']"
                    />
                  </v-scale-transition>
                </v-btn>
              </template>
              <span>複製文章連結</span>
            </v-tooltip>
          </v-toolbar>
          <v-divider />
          <div
            class="post-content px-6 py-5"
            v-html="post.content.rendered"
          />
          <v-divider />
          <v-card-actions>
            <v-btn
              text
              @click="backToList"
            >
              <v-icon left>
                $angleLeft
              </v-icon>
              返回列表
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { DATETIME_FORMAT } from '~/assets/data/const'

export default {
  name: 'NewsSingle',
  components: {},
  props: {
    type: {
      type: String,
      default: 'post'
    },
    post: {
      type: Object,
      default: () => {}
    },
    fromRoute: {
      type: Object,
      default: () => {}
    }
  },
  data: () => ({
    DATETIME_FORMAT,
    copied: {
      value: false,
      timeout: null
    }
  }),
  computed: {
    ...mapState([
      'site'
    ]),
    ...mapGetters('news', [
      'getCategoryById'
    ]),
    categoryName () {
      const catId = this.post.categories[0]
      const category = this.getCategoryById(catId)
      return category.name || '未分類'
    },
    breadcrumb () {
      return this.post ? [
        {
          text: '首頁',
          to: '/'
        },
        {
          text: '最新消息',
          to: '/news',
          exact: true
        },
        {
          text: this.categoryName,
          disabled: true
        }
      ] : []
    }
  },
  watch: {},
  mounted () {
  },
  beforeDestroy () {
    clearTimeout(this.copied.timeout)
  },
  methods: {
    backToList () {
      if (this.fromRoute && this.fromRoute.name === 'news') {
        this.$router.push(this.fromRoute)
      } else {
        this.$router.push('/news')
      }
    },
    copyUrl () {
      clearTimeout(this.copied.timeout)
      const url = this.site.url + this.$route.path
      this.$copyText(url).then(() => {
        this.copied.value = true
        this.copied.timeout = setTimeout(() => {
          this.copied.value = false
        }, 2000)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#banner {
  @include img-cover() {
    background-image: image('common/background/dark-cover.png');
  }
}
.post-content {
  line-height: 1.75;

  ::v-deep {
    img {
      max-width: 100%;
    }
    p:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
