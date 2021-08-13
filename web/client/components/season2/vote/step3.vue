<template>
  <div class="vote">
    <v-fade-transition mode="out-in">
      <v-alert
        v-if="request.busy"
        key="info"
        type="info"
        text
        dense
      >
        <template #prepend>
          <v-progress-circular
            class="mr-4"
            color="info"
            size="24"
            width="2"
            indeterminate
          />
        </template>
        正在發送簡訊驗證碼中，請稍候...
      </v-alert>
      <v-alert
        v-else-if="request.success"
        key="success"
        type="success"
        dense
      >
        已發送簡訊驗證碼至 {{ payload.phone }}，可能需要一些時間才會收到，請耐心等候。
      </v-alert>
      <v-alert
        v-else-if="errorMessage"
        key="error"
        type="error"
        dense
      >
        {{ errorMessage }}
      </v-alert>
      <v-alert
        v-else-if="request.already"
        key="success"
        type="success"
        dense
      >
        您所輸入的手機已申請過簡訊驗證碼，請輸入收到的 6 位數字驗證碼。
      </v-alert>
    </v-fade-transition>
    <v-form
      ref="form"
      v-model="formValid"
      :disabled="request.busy || submit.busy"
      @submit.prevent="validateCode"
    >
      <v-text-field
        ref="input"
        v-model="code"
        :rules="codeRules"
        name="code"
        inputmode="numeric"
        autocomplete="off"
        maxlength="6"
        label="簡訊驗證碼"
        hint="請輸入簡訊驗證碼 6 位數字"
        placeholder="000000"
        autofocus
        required
      >
        <template #prepend-inner>
          <fa
            class="mt-1 mr-1"
            icon="far-regular fa-message-lines"
          />
        </template>
      </v-text-field>
      <div class="mt-4">
        <v-btn
          color="primary"
          :loading="submit.busy"
          :disabled="!formValid || request.busy || submit.busy"
          @click="validateCode"
        >
          下一步
        </v-btn>
        <v-dialog
          v-model="request.dialogVisible"
          max-width="320"
        >
          <template #activator="{ on, attrs }">
            <v-btn
              text
              :disabled="request.busy || submit.busy"
              v-bind="attrs"
              v-on="on"
            >
              沒收到驗證碼？
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="text-h6">
              請求簡訊驗證碼
            </v-card-title>
            <v-card-text>
              若您尚未收到簡訊驗證碼，建議您等候一段時間，通常 5 分鐘內可以收到，有時候可能需要等候至最多 24 個小時。<br>
              請注意，每個手機號碼的簡訊驗證碼請求上限為 2 次（發送失敗時不計入次數），達到上限時就無法再度請求。<br><br>
              確認要再度請求簡訊驗證碼嗎？
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn
                text
                @click="request.dialogVisible = false"
              >
                先不要
              </v-btn>
              <v-btn
                color="primary"
                @click="confirmRequestCode"
              >
                請求新的驗證碼
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-form>
  </div>
</template>

<script>
import voteErrorMessages from '~/data/season2/voteErrorMessages'

export default {
  name: 'VoteStep3',
  components: {},
  props: {
    payload: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    request: {
      busy: false,
      already: false,
      success: false,
      dialogVisible: false
    },
    submit: {
      busy: false
    },
    error: null,
    formValid: false,
    code: '',
    codeRules: [
      v => !!v || '請輸入簡訊驗證碼',
      v => /[\d]{6}/.test(v) || '簡訊驗證碼格式錯誤'
    ]
  }),
  computed: {
    errorMessage () {
      const error = this.error
      if (error === null) {
        return ''
      }
      return voteErrorMessages[error] || error || '發生未知錯誤，請重試。'
    }
  },
  mounted () {
    this.autoRequestCode()
  },
  methods: {
    autoRequestCode () {
      if (this.payload.requested) {
        this.request.already = true
      } else {
        this.requestCode()
      }
    },
    async requestCode () {
      this.request.busy = true
      this.request.success = false
      this.error = null
      try {
        const response = await this.$wp.vote()
          .action('request')
          .create({
            phone: this.payload.phone
          })

        const data = response.data
        if (data) {
          if (data.codeSent) {
            this.request.success = true
          } else {
            this.error = response.message || '簡訊驗證碼發送失敗，請重試。'
          }
        } else {
          this.error = '發生未知錯誤，請重試。'
        }
      } catch (e) {
        this.error = e.message || ''
      } finally {
        this.request.busy = false
        await this.$nextTick()
        this.$refs.input.focus()
      }
    },
    confirmRequestCode () {
      this.request.dialogVisible = false
      this.requestCode()
    },
    async validateCode (e) {
      if (e.type === 'submit') {
        this.$refs.form.validate()
        if (!this.formValid) {
          return
        }
      }
      this.submit.busy = true
      this.request.success = false
      this.request.already = false
      this.error = null
      try {
        const response = await this.$wp.vote()
          .action('submit')
          .update({
            phone: this.payload.phone,
            code: this.code
          })

        const data = response.data
        if (data) {
          if (data.success) {
            this.$emit('next', {
              code: this.code
            })
          } else {
            const message = response.message
            this.error = message === 'CODE_ERROR'
              ? '很抱歉，您所輸入的簡訊驗證碼錯誤，請確認後重試。已嘗試次數：' + data.attempted + ' 次。'
              : message || ''
          }
        } else {
          this.error = '發生未知錯誤，請重試。'
        }
      } catch (e) {
        this.error = e.message || ''
      } finally {
        this.submit.busy = false
        if (this.errorMessage) {
          await this.$nextTick()
          this.$refs.input.focus()
        }
      }
    }
  }
}
</script>
