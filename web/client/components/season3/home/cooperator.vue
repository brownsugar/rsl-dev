<template>
  <section class="cooperator py-16">
    <two-line-title
      top="夢想盃跑跑聯賽 SEASON 3"
      bottom="合作夥伴"
      center
    />
    <v-container>
      <v-row justify="center">
        <v-col
          v-for="(cooperator, i) in cooperators"
          :key="i"
          class="d-flex flex-column align-center mt-16"
          cols="12"
          :sm="i < 2 ? 6 : 12"
          :lg="i < 2 ? 4 : 12"
        >
          <sub-title
            :text="cooperator.title"
          />
          <div class="d-flex flex-wrap justify-center align-center">
            <a
              v-for="(company, j) in cooperator.data"
              :key="j"
              v-ripple="{ class: 'tertiary--text' }"
              class="company pa-2 ma-8 mb-0"
              :title="company.name"
              :href="company.link"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                loading="lazy"
                class="d-block"
                :src="require(`~/assets/images/season3/cooperator/${company.logo.file}`)"
                :style="{ maxHeight: company.logo.height + 'px' }"
                :alt="company.name"
              >
            </a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import TwoLineTitle from '~/components/season3/common/two-line-title'
import SubTitle from '~/components/season3/common/sub-title'
import cooperators from '~/data/season3/cooperators'

export default {
  name: 'Cooperator',
  components: {
    TwoLineTitle,
    SubTitle
  },
  data: () => ({
    cooperators
  })
}
</script>

<style lang="scss" scoped>
.company {

  img {

    @include breakpoint(sm) {
      max-width: 100%;
      height: auto;
    }
  }
}
</style>
