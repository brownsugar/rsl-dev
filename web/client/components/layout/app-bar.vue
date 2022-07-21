<template>
  <v-app-bar
    class="app-bar"
    :class="{
      transparent: useTransparent && appBarTransparent,
      blur: useBlur
    }"
    :color="color"
    :height="height"
    :dark="useDark && appBarTransparent"
    elevate-on-scroll
    fixed
    app
    @click="appBarClickHandler"
  >
    <v-toolbar-title class="main-logo">
      <n-link :to="rootPath">
        <v-img
          src="~/assets/images/rsl/rsl-color-full.svg"
          :width="(height * 194) / 150"
          :height="height"
          :title="site.name"
          :alt="site.name"
        />
      </n-link>
    </v-toolbar-title>

    <v-spacer />

    <div class="d-none d-md-flex">
      <template v-for="(item, i) in sortedItems">
        <v-menu
          v-if="item.hidden !== true"
          :key="i"
          transition="slide-y-transition"
          open-on-hover
          offset-y
        >
          <template #activator="{ on, attrs }">
            <v-btn
              active-class="primary"
              :color="isChildActive(item) ? 'primary' : ''"
              :to="item.to"
              :exact="item.to === rootPath && $route.path !== rootPath"
              :target="item.blank ? '_blank' : ''"
              :rel="item.blank ? 'noreferrer noopener' : ''"
              :disabled="item.disabled"
              text
              nuxt
              v-bind="item.children ? attrs : {}"
              v-on="item.children ? on : {}"
            >
              <v-badge
                :color="item.badge"
                :value="!!item.badge"
                dot
              >
                {{ item.label }}
              </v-badge>
              <fa
                v-if="item.blank"
                class="ml-1"
                icon="fa-regular fa-up-right-from-square"
                size="sm"
              />
              <fa
                v-else-if="item.children"
                class="ml-1"
                size="sm"
                icon="fa-light fa-chevron-down"
              />
            </v-btn>
          </template>
          <v-list v-if="item.children">
            <v-list-item
              v-for="(child, j) in item.children"
              :key="j"
              active-class="primary--text"
              :to="child.to"
              :target="child.blank ? '_blank' : ''"
              :rel="child.blank ? 'noreferrer noopener' : ''"
              :disabled="child.disabled"
              nuxt
            >
              <v-list-item-content class="pt-0">
                <v-list-item-title>
                  <v-badge
                    :color="child.badge"
                    :value="!!child.badge"
                    dot
                  >
                    {{ child.label }}
                  </v-badge>
                  <fa
                    v-if="child.blank"
                    class="ml-2"
                    icon="fa-regular fa-up-right-from-square"
                    size="sm"
                  />
                </v-list-item-title>
                <v-list-item-subtitle
                  v-if="child.note"
                >
                  {{ child.note }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </div>
    <v-btn
      class="d-inline-flex d-md-none"
      depressed
      icon
      @click="setDrawerVisible(true)"
    >
      <fa
        icon="fa-regular fa-bars"
        size="lg"
      />
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import navigation from '~/assets/mixins/navigation'

export default {
  name: 'AppBar',
  mixins: [
    navigation
  ],
  props: {
    color: {
      type: String,
      default: ''
    },
    height: {
      type: [String, Number],
      default: '80'
    },
    useTransparent: {
      type: Boolean,
      default: false
    },
    useDark: {
      type: Boolean,
      default: false
    },
    useBlur: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    scrollTop: 0
  }),
  computed: {
    ...mapState([
      'site'
    ]),
    isHome () {
      return this.$route.path === this.rootPath
    },
    appBarTransparent () {
      return this.isHome && this.scrollTop === 0
    }
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.scrollHandler)
  },
  mounted () {
    window.addEventListener('scroll', this.scrollHandler)
    this.scrollHandler()
  },
  methods: {
    ...mapMutations('drawer', {
      setDrawerVisible: 'setVisible'
    }),
    scrollHandler () {
      this.scrollTop = window.scrollY
    },
    appBarClickHandler (e) {
      if (e.target.classList.contains('v-toolbar__content')) {
        this.$vuetify.goTo(0, {
          duration: 300,
          easing: 'easeInOutCubic'
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.v-app-bar.app-bar {
  transition: background-color .2s, backdrop-filter .2s;

  &.blur {
    backdrop-filter: blur(20px);
  }
  &.transparent {
    background-color: transparent !important;
    backdrop-filter: blur(0);

    .main-logo {
      visibility: hidden;
      opacity: 0;
    }
  }
}
.main-logo {
  visibility: visible;
  transition: opacity .2s;
}
</style>
