<template>
  <meet-rsl
    root-path="/season2"
    banner="season2/common/post-banner.jpg"
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
            class="member-card fill-height"
            color="grey lighten-5"
          >
            <v-row no-gutters>
              <v-col
                cols="12"
                md="5"
              >
                <v-img
                  class="member-avatar mx-auto"
                  :src="require('~/assets/images/' + member.avatar)"
                  width="250"
                  height="250"
                  :alt="member.name"
                  eager
                />
              </v-col>
              <v-col
                cols="12"
                md="7"
              >
                <v-card-text>
                  <div class="mb-1">
                    {{ member.title }}
                  </div>
                  <p class="text-h4 text--primary mb-3">
                    {{ member.name }}
                  </p>
                  <div class="text--primary">
                    <ul class="exp-list ma-0">
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
        在過去五年間，RSL 團隊成員已組織過許多跑跑卡丁車相關賽事，從玩家社群小型線上交流賽至夢時代演藝廳大型線下賽，共同創造許多令人印象深刻且膾炙人口的賽事，較為知名的賽事如下表所示。
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
          <v-card>
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
import LinkTitle from '~/components/season1/about/link-title'

export default {
  name: 'About',
  components: {
    MeetRsl,
    LinkTitle
  },
  layout: 'season2',
  data: () => ({
    members: [
      {
        name: '爆哥',
        title: 'RSL 核心發起人 / 聯賽規劃',
        avatar: 'season1/host/neal.jpg',
        experiences: [
          '「華義 SPIDER」職業隊跑跑卡丁車選手',
          '「J Team 遊戲娛樂」簽約實況主',
          '「極速領域」官方賽事指定主播賽評',
          '「Nonolive」簽約實況主',
          'YouTube 頻道逾 20 萬人訂閱，總點閱數近兩億',
          'Facebook 粉絲團超過 4 萬粉絲追蹤'
        ]
      },
      {
        name: '魚魚',
        title: 'RSL 聯賽企劃 / 業務執行',
        avatar: 'member/minru.jpg',
        experiences: [
          'TRY 賽事聯盟台灣地區跑跑賽事活動總執行策劃',
          '台中靜宜大學校園電競戰隊領隊兼負責人',
          '2017 MSI BYOC 區跑跑擂台挑戰賽活動策劃',
          '2017 AKEL 曜越網咖盃跑跑聯賽總執行策劃',
          '2018 TKL 夢想盃跑跑聯賽夢時代決賽總執行策劃',
          '2019 TT 曜越跑跑卡丁車車神競速賽賽評/裁判'
        ]
      },
      {
        name: 'Brownsugar',
        title: 'RSL 技術開發 / 聯賽轉播',
        avatar: 'member/brownsugar.jpg',
        experiences: [
          '全台最大跑跑社群「跑跑資訊站」站長',
          '2016 跑跑卡丁車全國菁英賽上下半季線上轉播',
          '2017 跑跑十周年車隊邀請賽主辦及線上轉播',
          '2018 TKL 夢想盃跑跑聯賽協辦及線上、線下轉播',
          '2019 TT 曜越跑跑卡丁車車神競速賽線下轉播',
          '2020 RSL 夢想盃跑跑聯賽第一季轉播'
        ]
      }
    ],
    highlights: [
      {
        date: '2016/05',
        title: '跑跑資訊站交流賽',
        content: '跑跑資訊站會員線上交流賽，以 SR 懷舊車種為主題，仿造跑跑卡丁車職業聯賽的模式進行，在職業賽事結束多時後讓許多前職業選手紛紛回歸出賽，吸引了許多老玩家的目光，並打造電競迷的美好回憶。',
        link: 'https://kartinfo.me/thread-3808-1-1.html'
      },
      {
        date: '2017/01',
        title: '十周年車隊邀請賽',
        content: '為慶祝跑跑卡丁車登台營運十周年，爆哥與跑跑資訊站特別舉辦台服車隊團體賽事，邀請前職業選手回娘家進行表演賽，還有國服明星選手跨服較勁，吸引數萬名玩家關注，並創造 Twitch 直播最高 8,000 人同時觀看的佳績。',
        link: 'https://kartinfo.me/kart10y/'
      },
      {
        date: '2017/07',
        title: 'AKEL 曜越網咖盃跑跑聯賽',
        content: '由 AKEL 與 Tt eSPORTS 所舉辦的線下實體跑跑聯賽，分別於台灣北中南網咖內進行賽事，合計超過 200 位選手報名參賽，每場賽事平均近 6,000 名不重覆線上觀眾收看。',
        link: 'https://www.youtube.com/watch?v=1Jn8wajBG7k'
      },
      {
        date: '2018/03',
        title: 'TKL 夢想盃跑跑聯賽',
        content: '由 TRY 賽事聯盟、AKEL、熊貓 TV 以及跑跑資訊站聯合舉辦的跑跑卡丁車線上個人賽事，總決賽移師高雄夢時代演藝廳舉行，吸引超過 300 名玩家蒞臨共襄盛舉，並於熊貓 TV 及 Twitch 同步轉播賽事，創下最高逾 120,000 名觀眾同時在線觀看。',
        link: 'https://www.youtube.com/watch?v=pWSmvIYGiJo'
      },
      {
        date: '2020/06',
        title: 'RSL 夢想盃跑跑聯賽 S1',
        content: '2020 年，RSL 賽事聯盟全新出擊，第一季賽事以「重啟夢想，重燃渴望」為口號，為跑跑玩家打造了專屬的大型電競舞台，除了有公平的競賽環境、豐富的賽制內容，還有精彩的播報以及專業的轉播，一共吸引了超過 35 萬個觀賽次數。',
        link: 'https://www.youtube.com/watch?v=yN4q_SvTAW4'
      },
      {
        date: '2021/07',
        title: 'RSL 夢想盃跑跑聯賽 S2',
        content: '2021 年，RSL 賽事聯盟團隊不被疫情阻撓，再度聯手為跑跑卡丁車玩家打造更專業的電競舞台，除了正規的聯賽賽事外，還特別規劃了台韓隊伍交流賽，促進國際友誼交流，也讓選手有機會挑戰韓國職業隊伍、互相切磋實力，更多精彩賽事內容，敬請關注本季 RSL 夢想盃跑跑聯賽！'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.member-avatar {
  clip-path: polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%);
}
.exp-list {
  line-height: 1.5;
}
</style>
