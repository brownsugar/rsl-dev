<template>
  <v-container class="vote py-16">
    <v-row justify="center">
      <v-col
        cols="12"
        md="10"
        lg="8"
      >
        <sub-title
          text="S3 人氣王票選"
          shrink-below-sm
        />
        <vote-stepper
          category="season3"
          :config="config"
          :message="message"
          vote-for-team
        >
          <template #intro>
            <p>RSL 夢想盃跑跑聯賽第三季人氣王正式開始票選，所有觀眾都能透過投票來支持自己喜愛的隊伍，幫助他們拿下本季聯賽人氣王獎項！</p>
            <p>為了保障票選活動公平性，人氣王票選活動採用實名制計票，所有投票參與人需先完成手機號碼驗證後方可進行投票，每個手機號碼可以投下一票，僅支援台灣手機號碼投票，此驗證流程費用由 RSL 賽事聯盟承擔，參與人不需額外支付費用。</p>
            <p>最終人氣王票選結果將於 8/27 總決賽轉播時公佈，敬請準時收看！</p>
          </template>
          <template #success>
            <p>人氣王最終票選結果將於 8/27 總決賽直播期間公佈，我們到時候見！</p>
          </template>
        </vote-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import SubTitle from '~/components/season3/common/sub-title'
import VoteStepper from '~/components/common/vote'

export default {
  name: 'Vote',
  components: {
    SubTitle,
    VoteStepper
  },
  layout: 'season3',
  data: () => ({
    message: {
      voteEndedAddition: '，最終結果將於 8/27 冠軍賽當日公佈，敬請關注！'
    }
  }),
  head () {
    const title = 'S3 人氣王票選'

    return {
      title,
      meta: [
        { property: 'og:title', content: title, hid: 'og:title' }
      ]
    }
  },
  computed: {
    ...mapState({
      config: state => state.config.season3.vote
    })
  }
}
</script>
