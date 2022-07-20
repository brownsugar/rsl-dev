<template>
  <div class="benefits py-8 py-sm-16">
    <v-container>
      <template
        v-for="(award, i) in awards"
      >
        <bordered-box
          :key="'section-' + i"
          class="section mt-12"
        >
          <bordered-box
            class="section-title"
            small
          >
            <h3 class="gradient-text text-h5 text-sm-h4 text-md-h3 font-weight-bold">
              {{ award.title }}
            </h3>
          </bordered-box>
          <div class="mt-0 mt-sm-6 mb-0 mb-lg-n10">
            <template v-for="(detail, j) in award.details">
              <v-container :key="'container-' + j">
                <v-row>
                  <v-col
                    class="pa-6"
                    cols="12"
                    lg="4"
                    order="0"
                    :order-lg="j % 2 === 0 ? 0 : 1"
                  >
                    <v-img
                      class="ml-auto mr-auto ml-lg-0"
                      aspect-ratio="1"
                      :src="require(`~/assets/images/season3/cooperator/products/${detail.image}.png`)"
                      :alt="detail.title"
                    />
                  </v-col>
                  <v-col
                    class="d-flex flex-column justify-center pa-4 pa-sm-6 pt-0 pt-lg-6"
                    cols="12"
                    lg="8"
                  >
                    <two-line-title
                      :top="detail.subtitle"
                      :bottom="detail.title"
                    />
                    <p
                      v-if="detail.description"
                      class="mt-5"
                    >
                      <fa
                        class="mr-2"
                        icon="fa-duotone fa-angles-right"
                      />
                      {{ detail.description }}
                    </p>
                    <ul class="text-sm-h6 font-weight-regular mt-5">
                      <li
                        v-for="(item, k) in detail.content"
                        :key="k"
                      >
                        {{ item }}
                      </li>
                    </ul>
                  </v-col>
                </v-row>
              </v-container>
              <v-divider
                v-if="j < award.details.length - 1"
                :key="'divider-' + j"
                class="mx-4 mx-sm-0"
              />
            </template>
          </div>
        </bordered-box>
        <section-break
          v-if="i < awards.length - 1"
          :key="'section-break-' + i"
          class="pb-8"
        />
      </template>
    </v-container>
  </div>
</template>

<script>
import BorderedBox from '~/components/season3/common/bordered-box'
import TwoLineTitle from '~/components/season3/common/two-line-title'
import SectionBreak from '~/components/season3/common/section-break'
import awards from '~/data/season3/awards'

export default {
  name: 'Benefits',
  components: {
    BorderedBox,
    TwoLineTitle,
    SectionBreak
  },
  layout: 'season3',
  data: () => ({
    awards
  }),
  head: () => ({
    title: 'S3 聯賽福利'
  })
}
</script>

<style lang="scss" scoped>
.section {
  position: relative;
}
.section-title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%) translateY(-100%);
}
</style>
