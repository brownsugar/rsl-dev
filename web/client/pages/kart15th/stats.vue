<template>
  <v-container class="stats py-16">
    <v-row justify="center">
      <v-col
        cols="12"
        md="10"
        lg="8"
      >
        <sub-title
          text="15 周年經典賽數據記錄"
        />
        <v-sheet
          class="my-6 px-6 py-8"
          outlined
          rounded
        >
          <coming-soon
            message="後續公佈，敬請持續關注。"
          />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SubTitle from '~/components/season2/common/sub-title'
import ComingSoon from '~/components/common/coming-soon'

export default {
  name: 'Stats',
  components: {
    SubTitle,
    ComingSoon
  },
  layout: 'kart15th',
  head: () => ({
    title: '15 周年經典賽數據記錄'
  })
}
</script>
