<template>
  <div class="intro">
    <section
      v-for="(section, i) in sections"
      :key="i"
      :class="{ 'mt-16': i > 0 }"
    >
      <sub-title
        :text="section.title"
      />
      <div class="mt-8">
        <p
          v-if="section.description"
          class="text-body-1"
        >
          {{ section.description }}
        </p>
        <v-row
          v-else-if="section.cards"
        >
          <v-col
            v-for="(card, j) in section.cards"
            :key="j"
            cols="12"
          >
            <card
              :data="card"
            />
          </v-col>
        </v-row>
      </div>
    </section>
  </div>
</template>

<script>
import SubTitle from '~/components/season2/common/sub-title'
import Card from '~/components/season2/vs-korea/card'
import lsb from '~/data/season2/lsb'

export default {
  name: 'Intro',
  components: {
    SubTitle,
    Card
  },
  data: () => ({
    sections: [
      {
        title: '台韓服交流賽',
        description: lsb.event.description
      },
      {
        title: '韓國隊伍介紹',
        cards: [
          lsb.profile
        ]
      },
      {
        title: '韓國選手介紹',
        cards: lsb.members
      },
      {
        title: '賽制介紹',
        cards: lsb.modes
      }
    ]
  })
}
</script>
