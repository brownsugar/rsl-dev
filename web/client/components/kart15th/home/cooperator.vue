<template>
  <section class="sponsor py-16">
    <v-container class="py-4">
      <section-title
        text="合作伙伴"
      />
      <v-row
        class="mx-4 mt-n6"
        no-gutters
      >
        <v-col
          v-for="(cooperator, i) in cooperators"
          :key="i"
          class="mt-16"
          cols="12"
          md="6"
          xl="3"
        >
          <sub-title
            :text="cooperator.title"
          />
          <div class="d-block mt-6">
            <a
              v-for="(company, j) in cooperator.data"
              :key="j"
              v-ripple="{ class: 'primary--text' }"
              class="link d-flex justify-center align-center mt-2 px-4 py-2"
              :title="company.name"
              :href="company.link"
              target="_blank"
              rel="noreferrer noopener"
            >
              <v-lazy>
                <img
                  class="d-block"
                  :src="require(`~/assets/images/kart15th/cooperator/${company.logo.file}`)"
                  :style="{ maxHeight: company.logo.height + 'px' }"
                  :alt="company.name"
                >
              </v-lazy>
            </a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import SectionTitle from '~/components/kart15th/common/section-title'
import SubTitle from '~/components/season2/common/sub-title'
import cooperators from '~/data/kart15th/cooperators'

export default {
  name: 'Cooperator',
  components: {
    SectionTitle,
    SubTitle
  },
  data: () => ({
    cooperators
  })
}
</script>

<style lang="scss" scoped>
.link {
  position: relative;
  width: fit-content;
  min-height: 120px;

  > div {
    position: relative;
  }
  img {

    @include breakpoint(sm) {
      max-width: 100%;
      height: auto;
    }
  }
}
</style>
