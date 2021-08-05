<template>
  <div class="post-single">
    <v-img
      id="banner"
      :src="require('~/assets/images/' + banner)"
      height="300"
      eager
    >
      <v-container class="fill-height" fluid>
        <v-row
          class="fill-height text-center"
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            md="10"
            lg="6"
          >
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
              <slot v-if="$slots.title" name="title" />
              <span v-else>{{ title }}</span>
            </h1>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
    <v-container
      class="py-0"
      fluid
    >
      <v-row
        align="center"
        justify="center"
        no-gutters
      >
        <v-col
          cols="12"
          md="10"
          lg="8"
          xl="7"
        >
          <v-card
            class="mx-auto mt-n14 mt-md-n16 mb-12"
          >
            <v-toolbar flat>
              <slot name="toolbar" />
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
                        icon="fa-solid fa-check"
                        class="green--text"
                      />
                      <fa
                        v-else
                        key="copied-false"
                        icon="fa-solid fa-link"
                      />
                    </v-scale-transition>
                  </v-btn>
                </template>
                <span>複製文章連結</span>
              </v-tooltip>
            </v-toolbar>
            <v-divider />
            <div
              v-if="$slots.content"
              :class="postContentClass"
            >
              <slot name="content" />
            </div>
            <post-content
              v-else
              :class="postContentClass"
              :content="content"
            />
            <template v-if="$slots.actions">
              <v-divider />
              <v-card-actions>
                <slot name="actions" />
              </v-card-actions>
            </template>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PostContent from '~/components/post/content'

/**
 * Available slots: title, toolbar, content, actions
 *  - title, content can be passed by props. [slot priority > prop]
 */
export default {
  name: 'PostLayout',
  components: {
    PostContent
  },
  props: {
    banner: {
      type: String,
      default: 'common/background/race.png'
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    breadcrumb: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    postContentClass: 'post-content pa-4 pa-md-6',
    copied: {
      value: false,
      timeout: null
    }
  }),
  computed: {
    ...mapState([
      'site'
    ])
  },
  beforeDestroy () {
    clearTimeout(this.copied.timeout)
  },
  methods: {
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
</style>
