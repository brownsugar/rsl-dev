<template>
  <div class="summary">
    Not yet.
  </div>
</template>

<script>
export default {
  name: 'Summary',
  components: {
  },
  layout: 'season2',
  props: {},
  data: () => ({
    applyInfo: [
      {
        title: '報名時間',
        content: '2021/07/10 19:00 ~ 2021/08/29 23:59'
      },
      {
        title: '報名費用',
        content: '每隊新台幣 200 元整'
      },
      {
        title: '開放名額',
        content: '共 32 組隊伍'
      },
      {
        title: '報名網址',
        content: '<a href="https://www.accupass.com/go/restartkartriderS2" target="_blank" rel="noreferrer noopener">https://www.accupass.com/go/restartkartriderS2</a>'
      },
      {
        title: '報名須知',
        content: '報名及付款完成後可獲得專屬 QRcode，報名人員需完成資料回傳表單填寫後，由主辦單位核准並發送信件通知才算報名成功。'
      }
    ]
  }),
  computed: {},
  watch: {},
  mounted () {
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
