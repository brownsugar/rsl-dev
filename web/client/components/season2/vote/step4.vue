<template>
  <div class="vote">
    <link-alert
      href="/season2/stats"
      type="info"
      dense
    >
      還無法決定要選擇哪位選手嗎？不妨先來參考看看隊伍及選手的聯賽數據！
    </link-alert>
    <v-fade-transition>
      <v-alert
        v-if="errorMessage"
        type="error"
        dense
      >
        {{ errorMessage }}
      </v-alert>
    </v-fade-transition>
    <v-form
      v-model="valid"
      :disabled="busy"
      @submit.prevent
    >
      <v-autocomplete
        v-model="selection"
        :rules="selectionRules"
        :disabled="busy"
        :items="candidates"
        label="支持選手"
        placeholder="可輸入選手名稱篩選名單"
        item-text="name"
        item-value="name"
        required
      >
        <template #item="{ item }">
          <v-list-item-avatar tile>
            <Mark
              category="season2"
              :team="item.team"
            />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.name }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ item.team }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </template>
      </v-autocomplete>
      <v-btn
        class="mt-4"
        color="primary"
        :loading="busy"
        :disabled="!valid || busy"
        @click="submitSelection"
      >
        確認投票
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import LinkAlert from '~/components/common/link-alert'
import Mark from '~/components/common/mark'
import teams from '~/data/season2/teams'
import voteErrorMessages from '~/data/season2/vote-error-messages'

export default {
  name: 'VoteStep4',
  components: {
    LinkAlert,
    Mark
  },
  props: {
    payload: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    busy: false,
    error: null,
    valid: false,
    selection: '',
    selectionRules: [
      v => !!v || '請選擇一名選手'
    ]
  }),
  computed: {
    candidates () {
      const top8 = teams.filter(team => team.top <= 8)
      return top8.reduce((result, team) => {
        result.push(
          ...team.players.map(player => ({
            team: team.name,
            name: player
          }))
        )
        return result
      }, [])
    },
    errorMessage () {
      const error = this.error
      if (error === null) {
        return ''
      }
      return voteErrorMessages[error] || error || '發生未知錯誤，請重試。'
    }
  },
  methods: {
    async submitSelection () {
      this.busy = true
      this.error = null
      try {
        const response = await this.$wp.vote()
          .action('submit')
          .param('validateSelection', 1)
          .update({
            phone: this.payload.phone,
            code: this.payload.code,
            selection: this.selection || undefined // remove param if empty
          })

        const data = response.data
        if (data) {
          if (data.success) {
            this.$emit('next')
          } else {
            this.error = response.message
          }
        } else {
          this.error = ''
        }
      } catch (e) {
        this.error = e.message || ''
      } finally {
        this.busy = false
      }
    }
  }
}
</script>
