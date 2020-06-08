<template>
  <div id="cooperate" class="py-12 grey lighten-4">
    <v-container>
      <h3 class="section-title display-1 font-weight-bold primary--text pl-5">
        合作品牌
      </h3>
      <v-row
        v-for="(cooperator, i) in cooperators"
        :key="i"
      >
        <v-col class="d-flex align-center" cols="2">
          {{ cooperator.title }}
        </v-col>
        <v-col class="d-flex flex-wrap align-center py-0">
          <a
            v-for="(company, j) in cooperator.data"
            :key="j"
            class="d-block"
            :title="company.name"
            :href="company.link"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              class="mx-5 my-3"
              :src="require(`~/assets/images/cooperator/${company.logo.file}`)"
              :height="company.logo.height"
              :alt="company.name"
            >
          </a>
        </v-col>
      </v-row>
      <v-alert
        class="mt-8"
        color="secondary"
        outlined
        dense
      >
        <v-row align="center" no-gutters>
          <v-col class="grow">
            <fa class="mr-2" :icon="['fas', 'info-circle']" />
            想在「RSL 夢想盃跑跑跑跑聯賽」中曝光您的產品或業務嗎？RSL 賽事聯盟持續招商中，歡迎與我們合作！
          </v-col>
          <v-col class="shrink">
            <v-btn color="secondary">
              合作洽詢
            </v-btn>
          </v-col>
        </v-row>
      </v-alert>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Cooperate',
  components: {},
  props: {},
  data: () => ({
    cooperators: [
      {
        title: '指導單位',
        data: [
          {
            name: '南台科技大學資訊傳播系',
            logo: {
              file: 'stust.png',
              height: 60
            },
            link: 'https://www.facebook.com/231508650386604'
          },
          {
            name: '靜宜大學資訊傳播工程學系',
            logo: {
              file: 'pu.png',
              height: 60
            },
            link: 'https://www.facebook.com/pucsceofficalpage'
          },
          {
            name: '競及電競',
            logo: {
              file: 'ulevelup.png',
              height: 80
            },
            link: 'https://ulevelup.com'
          },
          {
            name: '中華電子競技教育學會',
            logo: {
              file: 'ceeatw.png',
              height: 80
            },
            link: 'http://www.ceeatw.org'
          }
        ]
      },
      {
        title: '協辦單位',
        data: [
          {
            name: '遊戲橘子',
            logo: {
              file: 'gamania.png',
              height: 60
            },
            link: 'https://www.facebook.com/kartriderTW'
          }
        ]
      },
      {
        title: '執行單位',
        data: [
          {
            name: 'RSL 賽事聯盟',
            logo: {
              file: 'rsl.png',
              height: 100
            },
            link: 'https://rsl.tw'
          }
        ]
      },
      {
        title: '合作夥伴',
        data: [
          {
            name: '掠奪者',
            logo: {
              file: 'predator.png',
              height: 80
            },
            link: 'https://www.facebook.com/PredatorGamingTW'
          },
          {
            name: 'Acer',
            logo: {
              file: 'acer.png',
              height: 35
            },
            link: 'https://www.acer.com'
          },
          {
            name: 'Cooler Master',
            logo: {
              file: 'coolermaster.png',
              height: 60
            },
            link: 'https://apac.coolermaster.com/tw/peripheral/mice/mm710/'
          }
        ]
      }
    ]
  }),
  computed: {},
  watch: {},
  mounted () {
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.section-title {
  border-left: 5px solid currentColor;
}
</style>
