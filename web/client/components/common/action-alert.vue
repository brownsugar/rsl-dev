<template>
  <v-alert v-bind="$attrs">
    <v-row
      align="center"
      no-gutters
    >
      <v-col
        v-if="$slots.icon"
        class="shrink pr-2"
        :class="{ 'pl-2': 'colored-border' in $attrs }"
      >
        <slot name="icon" />
      </v-col>
      <v-col class="grow mr-2">
        <slot />
      </v-col>
      <v-col
        class="d-flex justify-end d-sm-block pt-2 pt-sm-0"
        cols="12"
        sm="auto"
      >
        <slot name="button" />
      </v-col>
    </v-row>
  </v-alert>
</template>

<script>
export default {
  name: 'ActionAlert'
}
</script>
