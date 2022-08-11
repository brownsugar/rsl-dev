<template>
  <div class="vote">
    <h4 class="text-h6 font-weight-bold mb-2">
      活動說明
    </h4>
    <slot name="intro" />
    <h4 class="text-h6 font-weight-bold mb-2">
      活動時間
    </h4>
    <p>{{ eventDuration }}</p>
    <h4 class="text-h6 font-weight-bold mb-2">
      驗證規則
    </h4>
    <ul class="mb-4">
      <li>每個手機號碼擁有一次投票資格。</li>
      <li>每個手機號碼的簡訊驗證碼請求次數上限為 <b>{{ getConfigField('max_request') }} 次</b>，達到上限時無法再請求簡訊驗證碼。</li>
      <li>每個手機號碼的簡訊驗證碼回填錯誤次數上限為 <b>{{ getConfigField('max_attempt') }} 次</b>，達到上限時喪失投票資格。</li>
    </ul>
    <h4 class="text-h6 font-weight-bold mb-2">
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
import { DATETIME_SIMPLE_FORMAT } from '~/assets/utils/const'

export default {
  name: 'VoteStep1',
  props: {
    config: {
      type: Object,
      default: () => ({})
    },
    message: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    eventDuration () {
      if (!this.config) {
        return '敬請期待'
      }
      const durations = [
        new Date(this.config.from_datetime),
        new Date(this.config.to_datetime)
      ]
      return durations
        .map(date => this.$dateFns.format(date, DATETIME_SIMPLE_FORMAT))
        .join(' ~ ')
    },
    closedReason () {
      if (!this.config) {
        return '人氣王投票活動正在準備中，敬請關注 RSL 賽事聯盟官方公告。'
      } else if (this.config.maintenance_mode) {
        return '目前人氣王投票功能正在維護中，請稍候再來。'
      } else {
        const now = new Date()
        const start = new Date(this.config.from_datetime)
        const end = new Date(this.config.to_datetime)
        if (this.$dateFns.isBefore(now, start)) {
          return '目前人氣王投票活動尚未開始，敬請持續關注！'
        } else if (this.$dateFns.isAfter(now, end)) {
          return `目前人氣王投票活動已結束，感謝大家熱情參與${this.message.voteEndedAddition || ''}！`
        }
      }
      return null
    }
  },
  methods: {
    getConfigField (field) {
      return this.config ? this.config[field] : '-'
    }
  }
}
</script>
