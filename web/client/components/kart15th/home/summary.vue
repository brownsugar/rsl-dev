<template>
  <section class="summary py-16">
    <v-container>
      <section-title
        text="賽事懶人包"
      />
      <v-sheet
        class="mt-10 px-6 py-8"
        outlined
        rounded
      >
        <coming-soon
          message="懶人包就在路上了，請稍候再來..."
        />
      </v-sheet>
    </v-container>
  </section>
</template>

<script>
import SectionTitle from '~/components/kart15th/common/section-title'
import ComingSoon from '~/components/common/coming-soon'

export default {
  name: 'Summary',
  components: {
    SectionTitle,
    ComingSoon
  }
}
</script>
