<template>
  <v-app-bar
    class="app-bar"
    :color="color"
    :height="height"
    elevate-on-scroll
    fixed
    app
    @click="appBarClickHandler"
  >
    <v-toolbar-title class="main-logo">
      <n-link to="/season2">
        <v-img
          src="~/assets/images/rsl/rsl-color-full.svg"
          width="95"
          :aspect-ratio="194 / 150"
          :title="site.name"
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
      default: 'white'
    },
    height: {
      type: [String, Number],
      default: '80'
    }
  },
  computed: {
    ...mapState([
      'site'
    ])
  },
  methods: {
    ...mapMutations('drawer', {
      setDrawerVisible: 'setVisible'
    }),
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
