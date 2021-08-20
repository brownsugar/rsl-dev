<template>
  <section class="mt-16">
    <sub-title
      text="beanfun! APP 集氣活動"
    />
    <div class="text-body-1 mt-8">
      <p>
        即日起至 08/27 09:59 為止，掃描活動 QRCode 或開啓 beanfun! APP 前往遊戲專區參加 RSL 台韓服交流賽集氣活動，就能獲得集氣獎勵「V1 零件碎片 100 個」！
      </p>
      <p>
        活動詳情請點擊下方橫幅圖片前往跑跑卡丁車官方網站查看。
      </p>
      <a
        v-ripple="{ class: 'tertiary--text' }"
        class="d-block"
        href="https://kinf.cc/Xp17Q"
        target="_blank"
        rel="noreferrer noopener"
      >
        <v-img
          :aspect-ratio="1200 / 628"
          src="~/assets/images/season2/lsb/support.png"
          alt="台韓服交流賽集氣活動"
          eager
        />
      </a>
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
