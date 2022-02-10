<template>
  <section class="rules py-16">
    <section-title
      text="賽制說明"
    />
    <v-row class="ml-n10 ml-lg-n3">
      <v-col
        class="pl-0 pl-lg-3"
        cols="12"
        xl="10"
      >
        <v-timeline
          class="pt-6"
          :dense="$breakpoint.is.mdAndDown"
        >
          <v-timeline-item
            v-for="(rule, i) in rules"
            :key="i"
            :color="getRuleDotColor(rule)"
            class="pb-8"
            small
          >
            <template #opposite>
              <span>{{ rule.title }}</span>
            </template>
            <v-card class="elevation-4">
              <v-card-title class="text-h5">
                {{ $breakpoint.is.mdAndDown ? rule.title : rule.date }}
              </v-card-title>
              <v-card-subtitle>
                <span v-if="$breakpoint.is.mdAndDown">
                  {{ rule.date }}<span class="mr-1">•</span>
                </span>
                {{ rule.time }}
              </v-card-subtitle>
              <v-card-text class="text-body-1">
                <div>
                  <fa
                    class="mr-2"
                    icon="fa-solid fa-location-dot"
                  /> {{ rule.location }}
                </div>
                <div>
                  <fa
                    class="mr-2"
                    icon="fa-duotone fa-book"
                  /> {{ rule.promotion }}
                </div>
                <div
                  v-for="(detail, j) in rule.details"
                  :key="j"
                  class="mt-2"
                >
                  <div class="text-subtitle-1">
                    {{ detail.title }}
                  </div>
                  <ul>
                    <li
                      v-for="(item, k) in detail.items"
                      :key="k"
                    >
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </v-card-text>
              <div class="pa-2 pa-md-4 pt-0 pt-md-0">
                <v-sheet
                  class="overflow-hidden"
                  outlined
                  shaped
                >
                  <a
                    v-ripple="{ class: 'primary--text' }"
                    class="d-block"
                    :href="require(`~/assets/images/kart15th/rules/${rule.flow}.png`)"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <v-img
                      aspect-ratio="1"
                      :src="require(`~/assets/images/kart15th/rules/${rule.flow}.png`)"
                      :alt="rule.title"
                    />
                  </a>
                </v-sheet>
              </div>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import SectionTitle from '~/components/kart15th/common/section-title'

export default {
  name: 'Rules',
  components: {
    SectionTitle
  },
  data: () => ({
    rules: [
      {
        date: '02/12（六）',
        time: '13:00 初賽、17:00 複賽',
        location: '線上賽（不轉播）',
        title: '海選賽',
        promotion: '單淘汰賽制，初賽 N 進 64、複賽 64 進 32',
        flow: 'top_128',
        details: [
          {
            title: '晉級制度：',
            items: [
              '每組 8 人，搶 50 分',
              '各組別積分前四名晉級、後四名淘汰'
            ]
          }
        ]
      },
      {
        date: '02/13（日）',
        time: '19:00',
        location: '線上賽（轉播）',
        title: '32 強賽',
        promotion: '復活賽制，取 16 名選手晉級 16 強',
        flow: 'top_32',
        details: [
          {
            title: '晉級制度：',
            items: [
              '晉級選手重新抽籤分組',
              '共 4 組，每組 8 人，搶 50 分',
              '正規賽各組別積分前兩名晉級、末兩名淘汰，其餘玩家進入復活賽',
              '復活賽各組積分前四名晉級、後四名淘汰'
            ]
          }
        ]
      },
      {
        date: '02/19（六）',
        time: '時段後續公佈',
        location: '線下賽（轉播）',
        title: '16 強賽',
        promotion: '復活賽制，取 8 名選手晉級決賽',
        flow: 'top_16',
        details: [
          {
            title: '晉級制度：',
            items: [
              '共 2 組，每組 8 人，搶 50 分',
              '正規賽各組別積分前兩名晉級、末兩名淘汰，其餘玩家進入復活賽',
              '復活賽各組積分前四名晉級、後四名淘汰'
            ]
          }
        ]
      },
      {
        date: '02/19（六）',
        time: '時段後續公佈',
        location: '線下賽（轉播）',
        title: '總決賽',
        promotion: '8 強賽單淘汰賽制、4 強賽冒泡賽制',
        flow: 'top_8',
        details: [
          {
            title: '8 強賽晉級制度：',
            items: [
              '搶 80 分，積分前四名晉級，後四名依積分決定名次'
            ]
          },
          {
            title: '4 強賽晉級制度：',
            items: [
              '各組皆為五戰三勝制',
              '先由積分第四名對決第三名，決出勝者後對決第二名，再勝者對決第一名',
              '最後勝利者即為本次 15 周年經典賽冠軍，其餘選手則依照勝利順序決定名次'
            ]
          }
        ]
      }
    ]
  }),
  methods: {
    getRuleDotColor (schedule) {
      const [begin] = schedule.date.split('(')

      const endDate = new Date('2022/' + begin)
      const now = new Date()
      if (this.$dateFns.isAfter(now, endDate)) {
        return 'primary'
      } else {
        return 'grey lighten-1'
      }
    }
  }
}
</script>
