<template>
  <v-container class="team-stats">
    <coming-soon
      message="16 強隊伍決定後公佈。"
    />
  </v-container>
</template>

<script>
import ComingSoon from '~/components/common/coming-soon'

export default {
  name: 'TeamStats',
  components: {
    ComingSoon
  },
  props: {},
  data: () => ({
  }),
  computed: {},
  watch: {},
  mounted () {
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
