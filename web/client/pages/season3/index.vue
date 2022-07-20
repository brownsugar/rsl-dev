<template>
  <div class="home">
    <banner />
    <league />
    <section-break />
    <hosts />
    <div class="text-center py-12">
      <fa
        icon="fa-regular fa-hyphen"
        size="3x"
      />
    </div>
    <cooperator />
  </div>
</template>

<script>
import Banner from '~/components/season3/home/banner'
import League from '~/components/season3/home/league'
import Hosts from '~/components/season3/home/hosts'
import Cooperator from '~/components/season3/home/cooperator'
import SectionBreak from '~/components/season3/common/section-break'

export default {
  name: 'Index',
  components: {
    Banner,
    League,
    Hosts,
    Cooperator,
    SectionBreak
  },
  layout: 'season3'
}
</script>

<style lang="scss" scoped>
</style>
