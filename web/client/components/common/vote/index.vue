<template>
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
        >
          <template
            v-for="(_, slot) in $scopedSlots"
            #[slot]="props"
          >
            <slot
              :name="slot"
              v-bind="props"
            />
          </template>
        </component>
      </v-stepper-content>
    </template>
  </v-stepper>
</template>

<script>
import Step1 from './step1'
import Step2 from './step2'
import Step3 from './step3'
import Step4 from './step4'
import Step5 from './step5'

export default {
  name: 'VoteIndex',
  props: {
    category: {
      type: String,
      required: true
    },
    config: {
      type: Object,
      default: () => ({})
    },
    message: {
      type: Object,
      default: () => ({})
    },
    voteForTeam: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    step: 1,
    payload: {},
    transitionEnded: true,
    timeout: null
  }),
  computed: {
    voteTarget () {
      if (this.voteForTeam) {
        return {
          type: 'team',
          label: '隊伍',
          unit: '支'
        }
      }
      return {
        type: 'player',
        label: '選手',
        unit: '名'
      }
    },
    steppers () {
      return [
        {
          title: '活動說明',
          component: Step1,
          binding: {
            config: this.config,
            message: this.message
          }
        },
        {
          title: '輸入手機號碼',
          component: Step2,
          binding: {
            category: this.category
          }
        },
        {
          title: '回填簡訊驗證碼',
          component: Step3,
          binding: {
            category: this.category,
            config: this.config,
            payload: this.payload
          }
        },
        {
          title: `選擇支持${this.voteTarget.label}`,
          component: Step4,
          binding: {
            category: this.category,
            payload: this.payload,
            voteTarget: this.voteTarget
          }
        },
        {
          title: '投票完成',
          component: Step5,
          binding: {
            voteTarget: this.voteTarget
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
.v-stepper__step--active + .v-stepper__content {

  &.static :deep(.v-stepper__wrapper) {
    overflow: visible; // Fix element shadow got cutted off in wrapper
  }
}
</style>
