<template>
  <v-container class="summary py-16" fluid>
    <v-row justify="center">
      <v-col
        class="d-none d-md-block"
        md="2"
      >
        <affix
          :key="$breakpoint.is.mdAndUp"
          relative-element-selector="#summary-content"
          :offset="affixOffset"
          :enabled="$breakpoint.is.mdAndUp"
        >
          <div
            v-scroll-spy-link
            class="menus"
          >
            <a
              v-for="(menu, i) in menus"
              :key="i"
              class="menu text-h5 grey-dark--text d-flex align-center"
              :class="{ 'mt-2': i > 0, active: activeSection === i }"
            >
              {{ menu }}
            </a>
          </div>
        </affix>
      </v-col>
      <v-col
        id="summary-content"
        v-scroll-spy="{
          sectionSelector: 'section',
          data: 'activeSection',
          offset: 112 // height 80 + padding 32
        }"
        cols="12"
        md="10"
        lg="8"
      >
        <prizes />
        <modes class="mt-16" />
        <schedules class="mt-16" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Prizes from '~/components/season2/summary/prizes'
import Modes from '~/components/season2/summary/modes'
import Schedules from '~/components/season2/summary/schedules'

export default {
  name: 'Summary',
  components: {
    Prizes,
    Modes,
    Schedules
  },
  layout: 'season2',
  data: () => ({
    menus: [
      '榮譽獎項',
      '特殊獎項',
      '觀眾福利',
      '比賽模式',
      '聯賽時程'
    ],
    activeSection: 0
  }),
  computed: {
    affixOffset () {
      const navHeight = this.$vuetify.application.top
      const padding = 64

      return {
        top: navHeight + padding,
        bottom: padding
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {

  &::before {
    display: inline-block;
    width: 0;
    height: 2px;
    margin-right: 0;
    content: '';
    background: var(--v-primary-base);
    transition: all .3s;
  }
  &.active {
    font-weight: bold;

    &::before {
      width: 40px;
      margin-right: 15px;
    }
  }
}
</style>
