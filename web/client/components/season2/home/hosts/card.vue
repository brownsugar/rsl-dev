<template>
  <v-card>
    <v-img
      class="white--text align-end"
      height="500px"
      :src="require('~/assets/images/season2/host/' + host.avatar)"
      gradient="to bottom, rgba(0, 0, 0, .1) 0%, rgba(0, 0, 0, .1) 70%, rgba(0, 0, 0, .7)"
      eager
    >
      <v-fade-transition>
        <v-row
          v-if="!panelVisible"
          class="pa-4"
          no-gutters
        >
          <v-col cols="10">
            <v-card-title class="text-h4 font-weight-bold text-uppercase pb-0">
              {{ host.name }}
            </v-card-title>
            <v-card-text
              v-if="host.alias"
              class="text-h6 grey--text text--lighten-2 pb-0"
            >
              {{ host.alias }}
            </v-card-text>
          </v-col>
          <v-col
            class="d-flex justify-end align-end"
            cols="2"
          >
            <v-scale-transition origin="center center">
              <v-btn
                v-if="showInfoButton"
                color="tertiary"
                large
                icon
                dark
                @click="panelVisible = true"
              >
                <fa
                  icon="fa-solid fa-circle-info"
                  size="lg"
                />
              </v-btn>
            </v-scale-transition>
          </v-col>
        </v-row>
      </v-fade-transition>
      <v-expand-transition>
        <div
          v-if="panelVisible"
          class="info-panel transition-fast-in-fast-out d-flex flex-column fill-width fill-height"
        >
          <div class="flex-fill ma-2 ma-sm-6 mb-0 overflow-auto">
            <template
              v-for="(section, j) in host.experience"
            >
              <v-card-title
                :key="'h5-' + j"
                class="text-h5 font-weight-bold"
              >
                {{ section.title }}
              </v-card-title>
              <v-card-text
                :key="'content-' + j"
              >
                <ul>
                  <li
                    v-for="(item, k) in section.content"
                    :key="k"
                  >
                    {{ item }}
                  </li>
                </ul>
              </v-card-text>
            </template>
          </div>
          <v-card-actions class="pa-4 justify-end">
            <v-btn
              v-if="host.link"
              :href="host.link"
              target="_blank"
              rel="noreferrer noopener"
              large
              dark
              text
            >
              相關連結
              <fa
                class="ml-2"
                icon="fa-solid fa-up-right-from-square"
              />
            </v-btn>
            <v-btn
              large
              icon
              dark
              @click="panelVisible = false"
            >
              <fa icon="fa-solid fa-xmark" />
            </v-btn>
          </v-card-actions>
        </div>
      </v-expand-transition>
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: 'HostCard',
  props: {
    host: {
      type: Object,
      default: () => ({})
    },
    showInfoButton: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    panelVisible: false
  }),
  watch: {
    showInfoButton (value) {
      if (!value) {
        this.panelVisible = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.info-panel {
  position: absolute;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  background: rgba($s2-secondary, .85);
}
</style>
