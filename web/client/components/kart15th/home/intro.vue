<template>
  <section class="intro py-16">
    <v-container>
      <section-title
        text="賽事資訊"
      />
      <div class="text-h6 font-weight-regular mt-10">
        <p>
          在準備邁向農曆虎年之際，跑跑卡丁車也同步迎接 15 周年的到來，為了和玩家一同慶祝這不朽的時刻，RSL 賽事聯盟再度攜手遊戲橘子聯合舉辦《RSL 跑跑卡丁車 15 周年經典賽》！
        </p>
        <p>
          不知不覺中，玩家也伴隨跑跑卡丁車一起成長了 15 歲，在這個特別的一年，RSL 賽事聯盟也規劃了與以往不同的個人賽賽制，除了提供玩家舞台公開相互交流切磋，藉此磨練出更精實的個人實力外，也希望能藉此喚起新老朋友的記憶一同回歸參與，不需要煩惱沒有隊友，一人就能出戰！
        </p>
      </div>
      <div class="text-body-1 mt-8">
        <p>
          <fa
            class="fa-rotate-180 mr-2"
            icon="fa-solid fa-reply"
          />
          報名時間：2022/01/25（二）18:00～2022/02/05（六）23:55
        </p>
        <p>
          <fa
            class="fa-rotate-180 mr-2"
            icon="fa-solid fa-reply"
          />
          賽事期間：2022/02/12（六）、2022/02/13（日）、2022/02/19（六）
        </p>
        <p>
          <fa
            class="fa-rotate-180 mr-2"
            icon="fa-solid fa-reply"
          />
          賽事地點：2022/02/12、2022/02/13 線上賽；2022/02/19 線下賽（地點另行公佈）
        </p>
      </div>
      <div class="text-h6 font-weight-regular">
        <v-btn
          class="mt-6"
          color="primary"
          to="/kart15th/rules"
          large
          dark
        >
          查看詳細賽事規章
          <fa
            class="ml-2"
            icon="fa-duotone fa-chevrons-right"
          />
        </v-btn>
      </div>
    </v-container>
  </section>
</template>

<script>
import SectionTitle from '~/components/kart15th/common/section-title'

export default {
  name: 'Intro',
  components: {
    SectionTitle
  }
}
</script>
