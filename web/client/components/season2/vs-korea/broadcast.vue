<template>
  <section class="mt-16">
    <sub-title
      text="轉播資訊"
    />
    <div class="text-body-1 mt-8">
      <p>
        08/29 19:00（台北時間）、20:00（KST）起，RSL 夢想盃跑跑聯賽冠軍賽開始轉播，在冠軍隊伍出爐後後台韓服交流賽緊接著登場，具體時間將根據冠軍賽賽程而異動，敬請準時鎖定，不錯過精彩比賽。
      </p>
      <v-btn
        color="twitch"
        :href="$config.rsl.twitch.url"
        target="_blank"
        rel="noreferrer noopener"
        depressed
        large
        dark
      >
        <fa
          class="mr-2"
          icon="fa-brands fa-twitch"
          size="lg"
        />
        立即追蹤 Twitch 頻道
        <fa
          class="ml-2"
          icon="fa-regular fa-up-right-from-square"
          size="sm"
        />
      </v-btn>
    </div>
  </section>
</template>

<script>
import SubTitle from '~/components/season2/common/sub-title'

export default {
  name: 'Support',
  components: {
    SubTitle
  }
}
</script>
