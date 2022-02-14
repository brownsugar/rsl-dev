<template>
  <section class="awards py-16">
    <section-title
      text="賽事獎項"
    />
    <div
      v-for="(award, i) in awards"
      :key="i"
      :class="[ i > 0 ? 'mt-16' : 'mt-8' ]"
    >
      <sub-title
        :text="award.title"
      />
      <div class="mt-8">
        <v-row class="px-xl-16">
          <v-col
            v-for="detail in award.details"
            :key="detail.title"
            cols="12"
            xl="10"
          >
            <v-card shaped>
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
                      :src="require(`~/assets/images/kart15th/cooperator/products/${detail.image}.png`)"
                      :alt="detail.title"
                    />
                  </v-col>
                  <v-col
                    class="d-flex flex-column justify-center px-4 px-md-6 pb-10 pt-0 pt-md-10"
                    cols="12"
                    md="8"
                  >
                    <h3 class="text-h3 text-lg-h2 font-weight-black">
                      {{ detail.title }}
                    </h3>
                    <p
                      v-if="detail.description"
                      class="mt-3 mt-lg-5"
                    >
                      <fa
                        class="mr-2"
                        icon="fa-duotone fa-angles-right"
                      />
                      {{ detail.description }}
                    </p>
                    <ul class="text-body-1 text-lg-h6 font-weight-regular mt-5">
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
    </div>
  </section>
</template>

<script>
import SectionTitle from '~/components/kart15th/common/section-title'
import SubTitle from '~/components/kart15th/common/sub-title'

export default {
  name: 'Awards',
  components: {
    SectionTitle,
    SubTitle
  },
  data: () => ({
    awards: [
      {
        title: '榮譽獎項',
        details: [
          {
            title: '冠軍',
            image: 'TT_1',
            content: [
              '獎金：NTD $10,000',
              '遊戲虛寶：復仇者 V1 (永久)、報復者 V1 (永久)、車款蒐藏品寶箱 Ⅲ (10 個)',
              '遊戲橘子提供：睏寶娃娃、舒適 SR 模型、跑跑周邊禮袋（各 1 組）',
              'TT 曜越科技提供：幻銀 ARGENT K5 RGB Cherry 青軸機械式鍵盤（1 把）'
            ]
          },
          {
            title: '亞軍',
            image: 'TT_2',
            content: [
              '獎金：NTD $8,000',
              '遊戲虛寶：復仇者 V1 (永久)、車款蒐藏品寶箱 Ⅲ (10 個)',
              '遊戲橘子提供：睏寶娃娃、舒適 SR 模型、跑跑周邊禮袋（各 1 組）',
              'TT 曜越科技提供：TT Premium Level 20 RGB Cherry MX 機械式銀軸電競鍵盤（1 把）'
            ]
          },
          {
            title: '季軍',
            image: 'TT_3',
            content: [
              '獎金：NTD $5,000',
              '遊戲虛寶：報復者 V1 (永久)、車款蒐藏品寶箱 Ⅲ (10 個)',
              '遊戲橘子提供：睏寶娃娃、舒適 SR 模型、跑跑周邊禮袋（各 1 組）',
              'TT 曜越科技提供：幻銀 ARGENT M5 RGB 三模無線電競滑鼠（1 隻）'
            ]
          },
          {
            title: '殿軍',
            image: 'Gamania_1',
            content: [
              '獎金：NTD $3,000',
              '遊戲橘子提供：睏寶娃娃、舒適 SR 模型、跑跑周邊禮袋（各 1 組）'
            ]
          },
          {
            title: '第 5~8 名',
            image: 'Gamania_2',
            content: [
              '獎金：NTD $1,000',
              '遊戲橘子提供：跑跑周邊禮袋（1 組）'
            ]
          }
        ]
      },
      {
        title: '特殊獎項',
        details: [
          {
            title: '賽道紀錄霸主',
            description: '15 周年經典賽賽程結束後，保有最多張賽道最佳記錄的選手。',
            image: 'TT_4',
            content: [
              '遊戲橘子提供：睏寶娃娃、舒適 SR 模型（各 1 個）',
              'TT 曜越科技提供：幻銀 ARGENT H5 RGB 7.1 環繞音效電競耳機（1 副）'
            ]
          },
          {
            title: '冠軍 x 賽道紀錄霸主雙料王',
            description: '當 15 周年經典賽冠軍選手同時為賽道紀錄霸主時即可擁有獲獎資格。',
            image: 'TT_5',
            content: [
              'TT 曜越科技提供：幻銀 ARGENT E700 真皮電競椅（競速綠）'
            ]
          },
          {
            title: '選手參賽獎',
            description: '報名成功且至少出賽一場的選手皆有獲獎資格。',
            image: 'Gamania_3',
            content: [
              '遊戲虛寶：車款蒐藏品寶箱 Ⅲ (5 個)'
            ]
          }
        ]
      },
      {
        title: '觀眾福利',
        details: [
          {
            title: '直播互動抽獎',
            description: '關注 Twitch 頻道並在賽事直播期間於聊天室中留下關鍵字就有機會獲得。',
            image: 'PredatorShot',
            content: [
              'PredatorShot 提供：[PredatorShot 掠奪者能量飲] 一箱 24 罐（共 5 名）',
              '遊戲橘子提供：睏寶娃娃、舒適 SR 模型（共 4 名）'
            ]
          },
          {
            title: '總決賽終極獎勵',
            description: '2/19 總決賽當日賽程結束後，當「冠軍 x 賽道紀錄霸主雙料王」獎項無選手獲得時，該獎項將以抽獎方式回饋觀眾。',
            image: 'TT_5',
            content: [
              'TT 曜越科技提供：幻銀 ARGENT E700 真皮電競椅（競速綠）'
            ]
          }
        ]
      }
    ]
  })
}
</script>
