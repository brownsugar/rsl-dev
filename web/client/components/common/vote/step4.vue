<template>
  <div class="vote">
    <link-alert
      :href="`/${category}/stats`"
      type="info"
      dense
    >
      還無法決定要選擇哪{{ voteTarget.unit }}{{ voteTarget.label }}嗎？不妨先來參考看看隊伍及選手的聯賽數據！
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
        :label="`支持${voteTarget.label}`"
        :placeholder="`可輸入${voteTarget.label}名稱篩選名單`"
        :item-text="selectionField"
        :item-value="selectionField"
        required
      >
        <template #item="{ item }">
          <v-list-item-avatar tile>
            <team-mark
              :category="category"
              :team="item.team"
            />
          </v-list-item-avatar>
          <v-list-item-content>
            <template v-if="voteTarget.type === 'player'">
              <v-list-item-title>
                {{ item.name }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ item.team }}
              </v-list-item-subtitle>
            </template>
            <template v-else>
              <v-list-item-title>
                {{ item.team }}
              </v-list-item-title>
            </template>
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
import TeamMark from '~/components/common/team-mark'
import teamsS2 from '~/data/season2/teams'
import teamsS3 from '~/data/season3/teams'
import voteErrorMessages from '~/data/common/vote-error-messages'

const teams = {
  season2: teamsS2,
  season3: teamsS3
}

export default {
  name: 'VoteStep4',
  components: {
    LinkAlert,
    TeamMark
  },
  props: {
    category: {
      type: String,
      required: true
    },
    payload: {
      type: Object,
      default: () => ({})
    },
    voteTarget: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    busy: false,
    error: null,
    valid: false,
    selection: ''
  }),
  computed: {
    selectionRules () {
      const { label, unit } = this.voteTarget

      return [
        v => !!v || `請選擇一${unit}${label}`
      ]
    },
    selectionField () {
      return this.voteTarget.type === 'player'
        ? 'name'
        : 'team'
    },
    candidates () {
      const top8 = teams[this.category].filter(team => team.top <= 8)
      return top8.reduce((result, team) => {
        if (this.voteTarget.type === 'player') {
          result.push(
            ...team.players.map(player => ({
              team: team.name,
              name: player
            }))
          )
        } else {
          result.push({
            team: team.name
          })
        }
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
          .param('category', this.category)
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
