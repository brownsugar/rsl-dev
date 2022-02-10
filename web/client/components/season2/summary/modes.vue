<template>
  <section class="modes">
    <sub-title
      text="Season 2 比賽模式"
    />
    <v-container class="mt-8">
      <v-row>
        <v-col
          v-for="(mode, i) in modes"
          :key="i"
          cols="12"
          lg="4"
        >
          <v-card class="pa-2">
            <div class="d-flex flex-column flex-sm-row justify-space-between">
              <div>
                <v-card-title
                  class="text-h5 font-weight-bold"
                >
                  SET {{ i + 1 }} / {{ mode.title }}
                </v-card-title>
                <v-card-subtitle>
                  {{ mode.channel }}
                </v-card-subtitle>
                <v-card-text>
                  {{ mode.description }}
                </v-card-text>
              </div>
              <v-avatar
                class="mx-auto mx-sm-3 my-3"
                size="125"
                tile
              >
                <v-img
                  aspect-ratio="1"
                  :src="require(`~/assets/images/season2/common/${mode.image}.png`)"
                  :alt="mode.title"
                  eager
                />
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import SubTitle from '~/components/season2/common/sub-title'

export default {
  name: 'Modes',
  components: {
    SubTitle
  },
  data: () => ({
    modes: [
      {
        title: '團體競速',
        channel: '快速（S2）',
        description: '4 vs 4 團體競速賽。精選 16 張指定賽道，經典模式，刺激又熱血。',
        image: 'mode-1'
      },
      {
        title: '團體道具',
        channel: '超快速（S3）',
        description: '4 vs 4 團體道具賽。精選 15 張指定賽道，八人亂鬥，鬥智比默契。',
        image: 'mode-2'
      },
      {
        title: '個人競速',
        channel: '快速（S2）',
        description: '1 vs 1 個人競速賽。這一次，自己奮戰，單挑決勝，比實力更比穩定。',
        image: 'mode-3'
      }
    ]
  })
}
</script>
