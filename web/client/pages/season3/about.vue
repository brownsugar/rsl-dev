<template>
  <meet-rsl
    root-path="/season3"
    banner="season3/common/post-banner.jpg"
  >
    <div id="intro" class="section mb-12">
      <link-title
        text="關於 RSL 賽事聯盟"
        target="intro"
      />
      <h2 class="primary--text mb-2">
        重啟賽事，創造舞台
      </h2>
      <p class="text-body-1">
        RSL 賽事聯盟，全名為「RE:START LEAGUE」，由三名兼具賽事舉辦經驗、玩家社群經營與遊戲領域影響力的核心玩家所組成。<br>
        我們致力於打造完善的電競聯賽環境、建立公平的賽事舞台，希望藉由 RSL 聯賽讓玩家重新燃起心目中的電競選手夢想。
      </p>
      <h2 class="primary--text mb-2">
        聯賽初衷，組織使命
      </h2>
      <p class="text-body-1">
        我們擁有多次線上及線下的賽事舉辦經驗，我們建立社群平台、深入玩家社群，透過分析玩家的文章觀看習性、影片喜好程度，以及註冊年齡層的範圍掌握，建立我們的品牌受眾群。<br>
        而這次 RSL 品牌的誕生，有重新啟動聯賽的使命。
      </p>
      <p class="text-body-1">
        我們為了熱愛的遊戲領域付諸行動，全力投入努力與堅持並致力於傾聽多方的需求及聲音，我們能夠成為合作夥伴的橋梁，服務合作夥伴的需求並給予賽事平台資源，我們著手孕育賽事完整體系，透過與合作夥伴建立長期與緊密的合作關係，培養賽事玩家群體及觀賽群眾，為賽事品牌奠定根基，為所有參與者永續經營。
      </p>
    </div>

    <v-divider class="mb-12" />

    <div id="members" class="section mb-12">
      <link-title
        text="團隊成員"
        target="members"
      />
      <p class="text-body-1 mb-10">
        RSL 賽事聯盟目前共有三名核心成員，共同規劃及執行聯賽相關環節。
      </p>
      <v-row
        v-for="(member, i) in members"
        :key="i"
        justify="center"
      >
        <v-col
          cols="12"
          md="10"
        >
          <v-card
            class="fill-height"
            color="grey lighten-5 elevation-2"
            rounded="lg"
          >
            <v-row no-gutters>
              <v-col
                cols="12"
                md="5"
              >
                <v-img
                  class="mx-auto"
                  :src="require('~/assets/images/' + member.avatar)"
                  aspect-ratio="1"
                  :alt="member.name"
                  eager
                />
              </v-col>
              <v-col
                cols="12"
                md="7"
              >
                <v-card-text class="py-8">
                  <div class="text-body-1 mb-1">
                    {{ member.title }}
                  </div>
                  <p class="text-h4 text--primary font-weight-bold mb-4">
                    {{ member.name }}
                  </p>
                  <div class="text--primary text-body-1">
                    <ul>
                      <li
                        v-for="(exp, j) in member.experiences"
                        :key="j"
                      >
                        {{ exp }}
                      </li>
                    </ul>
                  </div>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <v-divider class="mb-12" />

    <div id="history" class="section">
      <link-title
        text="團隊沿革"
        target="history"
      />
      <p class="text-body-1 mb-10">
        在過去六年間，RSL 團隊成員已組織過許多跑跑卡丁車相關賽事，從玩家社群小型線上交流賽至夢時代演藝廳大型線下賽，共同創造許多令人印象深刻且膾炙人口的賽事，較為知名的賽事如下表所示。
      </p>
      <v-timeline
        :dense="!$breakpoint.is.smAndUp"
      >
        <v-timeline-item
          v-for="(highlight, i) in highlights"
          :key="i"
          small
        >
          <template #opposite>
            <span class="grey--text">
              {{ highlight.date }}
            </span>
          </template>
          <v-card
            color="grey lighten-5"
            rounded="lg"
          >
            <v-card-subtitle class="grey--text pb-0 d-block d-sm-none">
              {{ highlight.date }}
            </v-card-subtitle>
            <v-card-title class="pt-1 pt-sm-4 text-h6 text-sm-h5">
              {{ highlight.title }}
            </v-card-title>
            <v-card-text
              :class="{ 'pb-0': !!highlight.link }"
            >
              {{ highlight.content }}
            </v-card-text>
            <v-card-actions
              v-if="highlight.link"
              class="pt-0"
            >
              <v-spacer />
              <v-tooltip
                top
              >
                <template #activator="{ on, attrs }">
                  <v-btn
                    :href="highlight.link"
                    target="_blank"
                    rel="noreferrer noopener"
                    icon
                    v-bind="attrs"
                    v-on="on"
                  >
                    <fa icon="fa-solid fa-up-right-from-square" />
                  </v-btn>
                </template>
                <span>查看</span>
              </v-tooltip>
            </v-card-actions>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </div>
  </meet-rsl>
</template>

<script>
import MeetRsl from '~/components/common/about/meet-rsl'
import LinkTitle from '~/components/common/about/link-title'
import members from '~/data/common/rsl-members'
import highlights from '~/data/common/rsl-highlights'

export default {
  name: 'About',
  components: {
    MeetRsl,
    LinkTitle
  },
  layout: 'season3',
  data: () => ({
    members,
    highlights
  })
}
</script>

<style lang="scss" scoped>
</style>
