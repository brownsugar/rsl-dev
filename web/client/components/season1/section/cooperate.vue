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
            to="/contact"
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

export default {
  name: 'Cooperate',
  components: {
    PrimaryTitle,
    ActionAlert
  },
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
            name: '掠奪者 Predator',
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
          },
          {
            name: 'HyperX',
            logo: {
              file: 'hyperx.png',
              height: 55
            },
            link: 'https://hyperx.gg/kerdinter'
          },
          {
            name: '賽德斯 Sades',
            logo: {
              file: 'sades.png',
              height: 80
            },
            link: 'https://www.sades.com.tw'
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
.cooperator {
  position: relative;
  min-height: 100px;

  &:before {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(#000, .05);
    opacity: 0;
    transition: opacity .1s ease-in;
  }
  &:hover:before {
    opacity: 1;
  }
}
</style>
