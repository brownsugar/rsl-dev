<template>
  <div
    id="cooperate"
    class="py-12"
  >
    <v-container>
      <primary-title text="合作品牌" />
      <v-row
        v-for="(cooperator, i) in cooperators"
        :key="i"
        class="my-4"
      >
        <v-col
          class="d-flex justify-center justify-sm-start align-center pb-0 pb-sm-3"
          cols="12"
          sm="2"
        >
          {{ cooperator.title }}
        </v-col>
        <v-col
          class="d-flex flex-wrap justify-center justify-sm-start align-center"
        >
          <a
            v-for="(company, j) in cooperator.data"
            :key="j"
            v-ripple
            class="cooperator d-flex justify-center align-center px-5 py-2"
            :title="company.name"
            :href="company.link"
            target="_blank"
            rel="noreferrer noopener"
          >
            <v-lazy>
              <img
                class="d-block"
                :src="require(`~/assets/images/season1/cooperator/${company.logo.file}`)"
                :height="company.logo.height * ($breakpoint.is.smAndDown ? 0.75 : 1)"
                :alt="company.name"
              >
            </v-lazy>
          </a>
        </v-col>
      </v-row>
      <action-alert
        class="mt-8"
        color="secondary"
        outlined
        dense
      >
        <template #icon>
          <fa :icon="['fas', 'info-circle']" />
        </template>
        <template #button>
          <v-btn
            color="secondary"
            to="/season1/contact"
            nuxt
          >
            合作洽詢
          </v-btn>
        </template>
        想在「RSL 夢想盃跑跑跑跑聯賽」中曝光您的產品或業務嗎？RSL 賽事聯盟持續招商中，歡迎與我們合作！
      </action-alert>
    </v-container>
  </div>
</template>

<script>
import PrimaryTitle from '~/components/common/primary-title'
import ActionAlert from '~/components/common/action-alert'
import cooperators from '~/data/season1/cooperators'

export default {
  name: 'Cooperate',
  components: {
    PrimaryTitle,
    ActionAlert
  },
  data: () => ({
    cooperators
  })
}
</script>

<style lang="scss" scoped>
.cooperator {
  position: relative;
  min-height: 100px;

  &::before {
    position: absolute;
    bottom: 0;
    display: block;
    width: 100%;
    height: 100%;
    content: '';
    background: rgba(#000, .05);
    opacity: 0;
    transition: opacity .1s ease-in;
  }
  &:hover::before {
    opacity: 1;
  }
}
</style>
