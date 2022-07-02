<template>
  <div class="home">
    <v-container class="py-12">
      <v-img
        class="mx-auto"
        src="~/assets/images/season3/coming-soon.png"
        alt="Season 3 賽事官網即將發佈"
        max-width="1200"
        :aspect-ratio="1200 / 628"
        eager
      />
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Index',
  components: {
  },
  layout: 'season3'
}
</script>

<style lang="scss" scoped>
</style>
