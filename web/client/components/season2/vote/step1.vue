<template>
  <div class="vote">
    <h4 class="text-h6 mb-2">
      活動說明
    </h4>
    <p>RSL 夢想盃跑跑聯賽正式進入 8 強賽環節，所有 8 強賽隊伍所屬選手都將成為人氣王候選人，而所有觀眾都能透過投票來支持自己喜愛的選手，幫助他拿下本季聯賽人氣王獎項！</p>
    <p>為了保障票選活動公平性，本季人氣王票選活動採用實名制計票，所有投票參與人需先完成手機號碼驗證後方可進行投票，每個手機號碼可以投下一票，僅支援台灣手機號碼投票，此驗證流程費用由 RSL 賽事聯盟承擔，參與人不需額外支付費用。</p>
    <h4 class="text-h6 mb-2">
      活動時間
    </h4>
    <p>{{ eventDuration }}</p>
    <h4 class="text-h6 mb-2">
      驗證規則
    </h4>
    <ul class="mb-4">
      <li>每個手機號碼擁有一次投票資格。</li>
      <li>每個手機號碼的簡訊驗證碼請求次數上限為 <b>{{ vote.max_request }} 次</b>，達到上限時無法再請求簡訊驗證碼。</li>
      <li>每個手機號碼的簡訊驗證碼回填次數上限為 <b>{{ vote.max_attempt }} 次</b>，達到上限時喪失投票資格。</li>
    </ul>
    <h4 class="text-h6 mb-2">
      個人資料保護聲明
    </h4>
    <p>您所提供的手機號碼僅限於本投票活動驗證使用，所有資料將於活動結束後統一消除。</p>
    <v-alert
      v-if="closedReason"
      type="info"
      text
      dense
    >
      {{ closedReason }}
    </v-alert>
    <v-btn
      color="primary"
      :disabled="!!closedReason"
      @click="$emit('next')"
    >
      同意並繼續
    </v-btn>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { DATETIME_SIMPLE_FORMAT } from '~/assets/utils/const'

export default {
  name: 'VoteStep1',
  computed: {
    ...mapState({
      vote: state => state.config.season2.vote
    }),
    eventDuration () {
      const durations = [
        new Date(this.vote.from_datetime),
        new Date(this.vote.to_datetime)
      ]
      return durations
        .map(date => this.$dateFns.format(date, DATETIME_SIMPLE_FORMAT))
        .join(' ~ ')
    },
    closedReason () {
      if (this.vote.maintenance_mode) {
        return '目前人氣王投票功能正在維護中，請稍候再來。'
      } else {
        const now = new Date()
        const start = new Date(this.vote.from_datetime)
        const end = new Date(this.vote.to_datetime)
        if (this.$dateFns.isBefore(now, start)) {
          return '目前人氣王投票活動尚未開始，敬請持續關注！'
        } else if (this.$dateFns.isAfter(now, end)) {
          return '目前人氣王投票活動已結束，感謝大家熱情參與，最終結果敬請關注 8/29 總決賽轉播！'
        }
      }
      return null
    }
  }
}
</script>
