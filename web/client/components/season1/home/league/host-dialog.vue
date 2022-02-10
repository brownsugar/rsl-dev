<template>
  <v-dialog
    max-width="360"
    :value="visible"
    scrollable
    @input="onInput"
  >
    <v-card v-if="host.name">
      <div>
        <v-list-item>
          <v-list-item-avatar
            class="mt-3"
            size="50"
          >
            <v-img
              :src="require(`~/assets/images/season1/host/${host.avatar}`)"
              eager
            />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="text-h5">
              {{ host.name }}
              <span v-if="host.alias">{{ host.alias }}</span>
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ host.title }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </div>
      <v-card-text
        class="host-exp mt-2"
        v-text="host.experience"
      />
      <v-card-actions>
        <v-btn
          v-if="host.link"
          color="youtube"
          :href="host.link"
          target="_blank"
          rel="noreferrer noopener"
          icon
        >
          <fa icon="fa-brands fa-youtube" />
        </v-btn>
        <v-spacer />
        <v-btn
          text
          @click="onInput(false)"
        >
          關閉
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'HostDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    host: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    onInput (visible) {
      this.$emit('update:visible', visible)
    }
  }
}
</script>

<style lang="scss" scoped>
.host-exp {
  max-height: 300px;
  white-space: pre-line;
}
</style>
