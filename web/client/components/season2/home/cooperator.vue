<template>
  <section class="sponsor py-16">
    <v-container class="py-4">
      <two-line-title
        top="第二賽季"
        bottom="合作夥伴"
      />
      <div
        v-for="(cooperator, i) in cooperators"
        :key="i"
        class="mt-14"
      >
        <sub-title
          :text="cooperator.title"
        />
        <v-row
          class="mx-4 my-6"
          no-gutters
        >
          <v-col cols="12">
            <div class="d-block d-sm-flex flex-wrap">
              <a
                v-for="(company, j) in cooperator.data"
                :key="j"
                v-ripple="{ class: 'tertiary--text' }"
                class="cooperator d-flex justify-center align-center mx-auto mx-sm-0 px-4 py-2"
                :title="company.name"
                :href="company.link"
                target="_blank"
                rel="noreferrer noopener"
              >
                <v-lazy>
                  <img
                    class="d-block"
                    :src="require(`~/assets/images/season2/cooperator/${company.logo.file}`)"
                    :style="{ maxHeight: company.logo.height + 'px' }"
                    :alt="company.name"
                  >
                </v-lazy>
              </a>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </section>
</template>

<script>
import TwoLineTitle from '~/components/season2/common/two-line-title'
import SubTitle from '~/components/season2/common/sub-title'
import cooperators from '~/data/season2/cooperators'

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
.cooperator {
  position: relative;
  width: fit-content;
  min-height: 120px;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    content: '';
    background: rgba($s2-tertiary, .15);
    opacity: 0;
    transition: opacity .1s ease-in;
  }
  &:hover::before {
    opacity: 1;
  }
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
