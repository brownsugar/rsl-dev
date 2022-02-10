<template>
  <v-row
    class="my-12"
    align="center"
    justify="center"
  >
    <v-col
      cols="10"
      sm="6"
      md="4"
    >
      <v-img
        class="mx-auto"
        aspected-ratio="601 / 328"
        src="~/assets/images/common/broken.png"
        width="500"
      />
      <div class="content mb-5">
        <h1 class="text-h4 primary--text my-5">
          {{ title }}
        </h1>
        <p>很抱歉，你正嘗試訪問一個不存在或是你沒有權限訪問的頁面，請確認網址後重試。</p>
        <p>以下是本次錯誤的偵錯訊息，若你希望將此問題回報給我們，請連帶附上此訊息：</p>
        <v-alert
          outlined
          type="error"
        >
          Page: {{ $route.fullPath }}<br>
          Error code: {{ error.statusCode }}<br>
          Error message: {{ error.message }}
        </v-alert>
      </div>
      <div class="actions">
        <v-btn
          color="primary"
          outlined
          @click="$router.go(-1)"
        >
          回上一頁
        </v-btn>
        <v-btn
          class="ml-2"
          color="primary"
          outlined
          @click="reload"
        >
          重新整理
        </v-btn>
        <v-btn
          class="ml-2"
          color="primary"
          to="/"
          nuxt
        >
          返回首頁
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Error',
  layout: 'kart15th',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head: self => ({
    title: self.title
  }),
  computed: {
    title () {
      const title = this.error.statusCode === 404 ? '頁面不存在' : `發生內部錯誤 (Error ${this.error.statusCode})`
      return title
    }
  },
  methods: {
    reload () {
      window.location.reload()
    }
  }
}
</script>
