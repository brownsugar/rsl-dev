<template>
  <div class="vote">
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
      <v-text-field
        v-model="phone"
        :rules="phoneRules"
        name="phone"
        type="tel"
        inputmode="tel"
        autocomplete="tel"
        maxlength="10"
        label="手機號碼"
        hint="請輸入 09 開頭手機號碼 10 碼"
        placeholder="09XXXXXXXX"
        required
      >
        <template #prepend-inner>
          <div class="mt-1 mr-1">
            🇹🇼
          </div>
        </template>
      </v-text-field>
      <v-btn
        class="mt-4"
        color="primary"
        :loading="busy"
        :disabled="!valid || busy"
        @click="checkVoteStatus"
      >
        下一步
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import voteErrorMessages from '~/data/season2/voteErrorMessages'

export default {
  name: 'VoteStep2',
  data: () => ({
    busy: false,
    error: null,
    valid: false,
    phone: '',
    phoneRules: [
      v => !!v || '請輸入您的手機號碼',
      v => /09[\d]{8}/.test(v) || '手機號碼格式錯誤'
    ]
  }),
  computed: {
    ...mapState({
      vote: state => state.config.season2.vote
    }),
    errorMessage () {
      const error = this.error
      if (error === null) {
        return ''
      }
      return voteErrorMessages[error] || error || '發生未知錯誤，請重試。'
    }
  },
  methods: {
    async checkVoteStatus () {
      this.busy = true
      this.error = null
      try {
        const response = await this.$wp.vote()
          .action('status')
          .param('phone', this.phone)

        const data = response.data
        if (data) {
          if (data.eligible) {
            this.$emit('next', response.data)
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
