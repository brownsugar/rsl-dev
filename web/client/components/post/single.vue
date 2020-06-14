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
          <v-breadcrumbs
            class="justify-center py-1"
            :items="breadcrumb"
            dark
            large
          >
            <template #divider>
              <v-icon>$angleRight</v-icon>
            </template>
          </v-breadcrumbs>
          <h1 class="white--text text-h4 font-weight-bold">
            {{ title }}
          </h1>
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
          <template v-if="type === 'post'">
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
          </template>
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
    title () {
      return this.post.title ? this.post.title.rendered : '404 Not Found'
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
  },
  head: self => ({
    title: self.title
  })
}
</script>

<style lang="scss" scoped>
#banner {
  @include img-cover() {
    background-image: image('common/background/dark-cover.png');
  }
}
.post-content {
  ::v-deep {
    img {
      max-width: 100%;
      height: auto;
    }
    p:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
