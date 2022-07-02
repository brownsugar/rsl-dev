<template>
  <v-navigation-drawer
    :value="visible"
    temporary
    app
    @input="drawerInputHandler"
  >
    <v-list dense>
      <template v-for="(item, i) in sortedItems">
        <template v-if="item.hidden !== true">
          <v-list-group
            v-if="item.children"
            :key="i"
            :value="isChildActive(item)"
          >
            <template #activator>
              <v-list-item-content class="pt-0">
                <v-list-item-title>
                  <v-badge
                    class="mt-2"
                    :color="item.badge"
                    :value="!!item.badge"
                    dot
                  >
                    {{ item.label }}
                  </v-badge>
                </v-list-item-title>
              </v-list-item-content>
            </template>
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
                    class="mt-2"
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
          </v-list-group>
          <v-list-item
            v-else
            :key="i"
            active-class="primary white--text"
            :to="item.to"
            :target="item.blank ? '_blank' : ''"
            :exact="item.to === rootPath && $route.path !== rootPath"
            :rel="item.blank ? 'noreferrer noopener' : ''"
            :disabled="item.disabled"
            nuxt
          >
            <v-list-item-content class="pt-0">
              <v-list-item-title>
                <v-badge
                  class="mt-2"
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
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import navigation from '~/assets/mixins/navigation'

export default {
  name: 'NavDrawer',
  mixins: [
    navigation
  ],
  computed: {
    ...mapState('drawer', [
      'visible'
    ])
  },
  methods: {
    ...mapMutations('drawer', [
      'setVisible'
    ]),
    drawerInputHandler (visible) {
      if (!visible) {
        this.setVisible(false)
      }
    }
  }
}
</script>
