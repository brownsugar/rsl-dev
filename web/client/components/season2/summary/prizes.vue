<template>
  <div class="prizes">
    <section
      v-for="(prize, i) in prizes"
      :key="i"
      :class="{ 'mt-16': i > 0 }"
    >
      <sub-title
        :text="prize.title"
      />
      <div class="mt-8">
        <v-row>
          <v-col
            v-for="detail in prize.details"
            :key="detail.title"
            cols="12"
          >
            <v-card>
              <v-container>
                <v-row>
                  <v-col
                    class="pa-6"
                    cols="12"
                    md="4"
                  >
                    <v-img
                      class="ml-auto mr-auto ml-md-0"
                      aspect-ratio="1"
                      :src="require(`~/assets/images/season2/cooperator/products/${detail.image}.png`)"
                      :alt="detail.title"
                    />
                  </v-col>
                  <v-col
                    class="d-flex flex-column justify-center pa-6 pt-0 pt-md-6"
                    cols="12"
                    md="8"
                  >
                    <two-line-title
                      :top="detail.subtitle"
                      :bottom="detail.title"
                    />
                    <p
                      v-if="detail.description"
                      class="mt-5"
                    >
                      <fa
                        class="mr-2"
                        icon="fa-duotone fa-angles-right"
                      />
                      {{ detail.description }}
                    </p>
                    <ul class="text-sm-h6 font-weight-regular mt-5">
                      <li
                        v-for="(item, j) in detail.content"
                        :key="j"
                      >
                        {{ item }}
                      </li>
                    </ul>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </section>
  </div>
</template>

<script>
import SubTitle from '~/components/season2/common/sub-title'
import TwoLineTitle from '~/components/season2/common/two-line-title'

export default {
  name: 'Prizes',
  components: {
    SubTitle,
    TwoLineTitle
  },
  data: () => ({
    prizes: [
      {
        title: 'Season 2 榮譽獎項',
        details: [
          {
            title: 'Champion',
            subtitle: '冠軍',
            image: 'TT-1',
            content: [
              '獎金：NTD $30,000',
              '遊戲虛寶：烈焰馬拉松 V1 (永久)、黃金遊俠 X (永久)、尼歐的新品車款齒輪9代 (40 個)',
              '跑跑實體週邊：遊戲橘子提供 [睏寶娃娃]、[舒適 SR 模型]（各 3 個）',
              '專業電競週邊：TT 曜越科技提供 [幻銀 ARGENT K5 RGB Cherry 銀軸機械式鍵盤]（4 組）'
            ]
          },
          {
            title: '2nd Place',
            subtitle: '亞軍',
            image: 'Philips',
            content: [
              '獎金：NTD $15,000',
              '遊戲虛寶：烈焰馬拉松 V1 (永久)、黃金遊俠 X (永久)、尼歐的新品車款齒輪9代 (30 個)',
              '跑跑實體週邊：遊戲橘子提供 [睏寶娃娃]、[舒適 SR 模型]（各 3 個）',
              '專業電競週邊：Philips Monitors 提供 [PHILIPS 24型 VA 144Hz 電競螢幕 (242E1GAJ)]（4 組）'
            ]
          },
          {
            title: '3rd Place',
            subtitle: '季軍',
            image: 'HyperX-1',
            content: [
              '獎金：NTD $5,000',
              '遊戲虛寶：烈焰馬拉松 V1 (永久)、黃金遊俠 X (永久)、尼歐的新品車款齒輪9代 (20 個)',
              '跑跑實體週邊：遊戲橘子提供 [睏寶娃娃]、[舒適 SR 模型]（各 3 個）',
              '專業電競週邊：HyperX 提供 [HyperX Cloud Revolver 7.1 電競耳機]（4 組）'
            ]
          },
          {
            title: '4th Place',
            subtitle: '殿軍',
            image: 'Gamania',
            content: [
              '跑跑實體週邊：遊戲橘子提供 [睏寶娃娃]、[舒適 SR 模型]（各 3 個）'
            ]
          }
        ]
      },
      {
        title: 'Season 2 特殊獎項',
        details: [
          {
            title: '冠軍賽 MVP',
            subtitle: 'Championship MVP',
            description: '冠軍賽結束並產生最終勝利隊伍後，由主播賽評團評選即時公佈。',
            image: 'TT-2',
            content: [
              '獎金：NTD $5,000',
              '專業電競週邊：TT 曜越科技提供 [RIING Pro RGB 7.1 電競耳機]'
            ]
          },
          {
            title: '賽道紀錄霸主',
            subtitle: 'Track Master',
            description: 'S2 賽季結束後（不包含台韓交流賽），保有最多張競速賽道最佳記錄的選手。',
            image: 'TT-3',
            content: [
              '獎金：NTD $3,000',
              '專業電競週邊：TT 曜越科技提供 [鋼影TOUGHRAM XG RGB 記憶體 DDR4 3600MHz 16GB (8GB x 2)]'
            ]
          },
          {
            title: '觀眾票選人氣王',
            subtitle: 'Most Popular Player',
            description: '打進 8 強之隊伍所屬成員皆可成為候選人，由觀眾票選支持，獲得最高票者，投票方式請關注後續公告。',
            image: 'TT-4',
            content: [
              '獎金：NTD $2,000',
              '專業電競週邊：TT 曜越科技提供 [幻銀 ARGENT M5 RGB 三模無線電競滑鼠]'
            ]
          },
          {
            title: '隊伍手速獎',
            subtitle: 'Special',
            description: '本季聯賽前 20 隊報名成功的隊伍皆可獲得。',
            image: 'PredatorShot',
            content: [
              '電競能量飲料：PredatorShot 提供 [PredatorShot 掠奪者能量飲]（每隊 8 罐）'
            ]
          },
          {
            title: '選手參賽獎',
            subtitle: 'Special',
            description: '報名成功且至少出賽一場的隊伍所屬成員皆有獲獎/抽獎資格，不包含失格、棄權或無故未到者。',
            image: 'Gamania',
            content: [
              '遊戲虛寶：尼歐的新品車款齒輪9代 (5 個)',
              '跑跑實體週邊：遊戲橘子提供 [睏寶娃娃]、[舒適 SR 模型]（各抽 2 名，共 4 名）'
            ]
          }
        ]
      },
      {
        title: 'Season 2 觀眾福利',
        details: [
          {
            title: 'RRR 幣兌換',
            subtitle: 'Redeem by Channel Points',
            description: '於賽事直播期間在 RSL 官方 Twitch 頻道互動累積忠誠點數，就能兌換抽獎券。',
            image: 'HyperX-2',
            content: [
              '跑跑實體週邊：遊戲橘子提供 [睏寶娃娃]、[舒適 SR 模型]（各抽 4 名，共 8 名）',
              '電競能量飲料：PredatorShot 提供 [PredatorShot 掠奪者能量飲] 一箱 24 罐（共 3 名）',
              '專業電競週邊：HyperX 提供 [HyperX Cloud Alpha S 電競耳機]（共 4 名）'
            ]
          },
          {
            title: '直播互動抽獎',
            subtitle: 'Chat & Redeem by Channel Points',
            description: '關注賽事直播並在 Twitch 頻道留下關鍵字抽獎或是累積忠誠點數兌換抽獎券。',
            image: 'Twitch',
            content: [
              '限量品牌週邊：Twitch 提供 [Twitch 後扣帽]、[Twitch Stream T-Shirt]（共 9 名）'
            ]
          },
          {
            title: '冠軍賽終極獎勵',
            subtitle: 'Championship Lottery',
            description: '活動方式後續公開，敬請關注 RSL 官方消息。',
            image: 'TT-5',
            content: [
              '專業電競週邊：TT 曜越科技提供 [CyberChair E500 雪白版 人體工學椅]（共 1 名）'
            ]
          },
          {
            title: '台韓交流賽終極獎勵',
            subtitle: 'Friendly Match Lottery',
            description: '活動方式後續公開，敬請關注 RSL 官方消息。',
            image: 'HyperX-3',
            content: [
              '專業電競週邊：HyperX 提供 [HyperX Alloy Elite 2 機械式電競鍵盤]（共 4 名）'
            ]
          }
        ]
      }
    ]
  })
}
</script>
