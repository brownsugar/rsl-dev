<template>
  <section class="intro py-16">
    <section-title
      text="賽事資訊"
    />
    <v-row class="mt-4">
      <v-col
        cols="12"
        lg="5"
        xl="4"
      >
        <v-sheet
          class="overflow-hidden"
          outlined
          shaped
        >
          <v-lazy>
            <v-responsive :aspect-ratio="3 / 2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4378.755234632307!2d120.35032493442446!3d22.65081850833894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e1ad670a77b39%3A0xd5e63e802beb4dc0!2z5q2j5L-u56eR5oqA5aSn5a24!5e0!3m2!1szh-TW!2stw!4v1644516622066!5m2!1szh-TW!2stw"
                width="100%"
                height="100%"
                allowfullscreen
              />
            </v-responsive>
          </v-lazy>
        </v-sheet>
      </v-col>
      <v-col
        cols="12"
        lg="7"
        xl="8"
      >
        <div class="text-h6 font-weight-regular">
          <p>
            在準備邁向農曆虎年之際，跑跑卡丁車也同步迎接 15 周年的到來，為了和玩家一同慶祝這不朽的時刻，RSL 賽事聯盟再度攜手遊戲橘子聯合舉辦《RSL 跑跑卡丁車 15 周年經典賽》！
          </p>
          <p>
            不知不覺中，玩家也伴隨跑跑卡丁車一起成長了 15 歲，在這個特別的一年，RSL 賽事聯盟也規劃了與以往不同的個人賽賽制，除了再度提供玩家公開相互交流切磋的舞台，藉此磨練出更精實的個人實力外，也希望能藉此喚起新老朋友的記憶一同回歸參與，不需要煩惱沒有隊友，一人就能出戰！
          </p>
          <p>
            除此之外，本次賽事特別和「正修科技大學」合作，將總決賽移師線下開戰，建立了更完善、更公平的競技環境，讓一路闖蕩到最後的高手們可以更專注在競賽內容，發揮更卓越的實力，也能帶給觀眾更有臨場感的賽事饗宴。
          </p>
        </div>
        <div class="text-body-1 mt-8">
          <p
            v-for="(content, i) in details"
            :key="i"
          >
            <fa
              class="fa-rotate-180 mr-2"
              icon="fa-solid fa-reply"
            />
            {{ content }}
          </p>
        </div>
        <v-btn
          class="mt-6"
          color="twitch"
          :to="$config.rsl.twitch.url"
          target="_blank"
          rel="noreferrer noopener"
          large
          dark
        >
          立即關注 Twitch 頻道
          <fa
            class="ml-2"
            icon="fa-regular fa-up-right-from-square"
          />
        </v-btn>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import SectionTitle from '~/components/kart15th/common/section-title'

export default {
  name: 'Intro',
  components: {
    SectionTitle
  },
  data: () => ({
    details: [
      '報名期間：01/25（二）18:00～02/05（六）23:55',
      '賽事期間：02/12（六）、02/13（日）、02/19（六）',
      '賽事地點：02/12、02/13 線上賽；02/19 線下賽（不開放觀眾入場）',
      '線下賽地點：正修科技大學－進化基地（高雄市鳥松區澄清路840號）'
    ]
  })
}
</script>
