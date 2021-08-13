<template>
  <v-container class="vote py-16">
    <v-row justify="center">
      <v-col
        cols="12"
        md="10"
        lg="8"
      >
        <sub-title
          text="S2 人氣王票選"
        />
        <v-stepper
          v-model="step"
          class="mt-10"
          vertical
        >
          <template v-for="(stepper, i) in steppers">
            <v-stepper-step
              :id="'step-' + (i + 1)"
              :key="'step-' + (i + 1)"
              :complete="step > i + 1"
              :step="i + 1"
            >
              {{ stepper.title }}
            </v-stepper-step>
            <v-stepper-content
              :key="'content-' + i"
              :step="i + 1"
              class="pt-0"
              :class="{ static: transitionEnded }"
            >
              <component
                :is="stepper.component"
                v-if="i + 1 === step"
                v-bind="stepper.binding || {}"
                class="pa-0 pa-md-4"
                @prev="prevHandler"
                @next="nextHandler"
              />
            </v-stepper-content>
          </template>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SubTitle from '~/components/season2/common/sub-title'
import Step1 from '~/components/season2/vote/step1'
import Step2 from '~/components/season2/vote/step2'
import Step3 from '~/components/season2/vote/step3'
import Step4 from '~/components/season2/vote/step4'
import Step5 from '~/components/season2/vote/step5'

export default {
  name: 'Vote',
  components: {
    SubTitle
  },
  layout: 'season2',
  props: {},
  data: () => ({
    step: 1,
    payload: {},
    transitionEnded: true,
    timeout: null
  }),
  head () {
    const title = 'S2 人氣王票選'

    return {
      title,
      meta: [
        { property: 'og:title', content: title, hid: 'og:title' }
      ]
    }
  },
  computed: {
    steppers () {
      return [
        {
          title: '活動說明',
          component: Step1
        },
        {
          title: '輸入手機號碼',
          component: Step2
        },
        {
          title: '回填簡訊驗證碼',
          component: Step3,
          binding: {
            payload: this.payload
          }
        },
        {
          title: '選擇支持選手',
          component: Step4,
          binding: {
            payload: this.payload
          }
        },
        {
          title: '投票完成',
          component: Step5,
          binding: {
            payload: this.payload
          }
        }
      ]
    }
  },
  watch: {
    async step () {
      clearTimeout(this.timeout)
      this.transitionEnded = false
      await this.$nextTick()
      // Wait until transition is completed
      this.timeout = setTimeout(() => {
        this.$vuetify.goTo('#step-' + this.step)
        this.transitionEnded = true
      }, 300 * 2) // previous one closed, next one opened
    }
  },
  beforeDestroy () {
    clearTimeout(this.timeout)
  },
  methods: {
    prevHandler () {
      this.step--
    },
    nextHandler (payload) {
      this.payload = {
        ...this.payload,
        ...payload
      }
      this.step++
    }
  }
}
</script>

<style lang="scss" scoped>
.v-stepper__content {

  &.static::v-deep .v-stepper__wrapper {
    overflow: visible; // Fix element shadow got cutted off in wrapper
  }
}
</style>
