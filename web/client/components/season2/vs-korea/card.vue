<template>
  <v-card>
    <v-container>
      <v-row>
        <v-col
          class="pa-6"
          cols="12"
          md="4"
        >
          <v-img
            class="ml-auto mr-auto ml-md-0"
            position="top center"
            :aspect-ratio="data.imageRatio || (2 / 3)"
            :src="require(`~/assets/images/season2/${data.image}`)"
            :alt="title"
            eager
          />
        </v-col>
        <v-col
          class="d-flex flex-column justify-center pa-6 pt-0 pt-md-6"
          cols="12"
          md="8"
        >
          <two-line-title
            :top="topTitle"
            :bottom="bottomTitle"
          />
          <p
            v-if="data.description || data.playerId"
            class="mt-5"
          >
            <fa
              class="mr-2"
              icon="fa-duotone fa-angles-right"
            />
            <span v-if="data.description">{{ data.description }}</span>
            <span v-else>使用角色名稱：{{ data.playerId }}</span>
          </p>
          <div
            v-if="data.honors"
            class="mt-4"
          >
            <div class="text-h6 font-weight-bold">
              <fa
                class="mr-1"
                icon="fa-duotone fa-award"
              />
              得獎記錄 Honors
            </div>
            <template v-for="type in honorTypes">
              <div
                v-if="data.honors[type.key]"
                :key="type.key"
                class="mt-2"
                :class="type.key"
              >
                <div class="font-weight-bold">
                  {{ type.title }}
                </div>
                <ul class="mt-1">
                  <li
                    v-for="(honor, i) in data.honors[type.key]"
                    :key="i"
                  >
                    {{ honor.name }}<br>
                    {{ getRankText(honor.rank) }}
                  </li>
                </ul>
              </div>
            </template>
          </div>
          <div
            v-else-if="data.rules"
            class="mt-4"
          >
            <div class="text-h6 font-weight-bold">
              <fa
                class="mr-1"
                icon="fa-duotone fa-book"
              />
              比賽規則 Rules
            </div>
            <ul class="text-body-1 mt-2">
              <li
                v-for="(rule, i) in data.rules"
                :key="i"
              >
                {{ rule }}
              </li>
            </ul>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import TwoLineTitle from '~/components/season2/common/two-line-title'

export default {
  name: 'Card',
  components: {
    TwoLineTitle
  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    honorTypes: [
      {
        key: 'individual',
        title: '個人獎項 Individual'
      },
      {
        key: 'team',
        title: '團體獎項 Team'
      }
    ]
  }),
  computed: {
    bottomTitle () {
      if (this.data.title) {
        return this.data.title
      }
      const { chinese, english } = this.data.name
      return chinese || english
    },
    topTitle () {
      if (this.data.subTitle) {
        return this.data.subTitle
      }
      const { chinese, english, korean } = this.data.name
      if (chinese) {
        return `${korean} (${english})`
      }
      return korean
    }
  },
  methods: {
    getRankText (rank) {
      const rankText = [
        '🥇 冠軍 1st',
        '🥈 亞軍 2nd',
        '🥉 季軍 3rd',
        '🎖️ 殿軍 4th'
      ]
      return rankText[rank - 1] || '？？？'
    }
  }
}
</script>
