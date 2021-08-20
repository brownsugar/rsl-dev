const lsb = {
  event: {
    description: 'RSL 夢想盃跑跑聯賽第二季總決賽將於 8/29（日）登場，當天除了有眾所期待的冠軍賽最終對決之外，還重磅邀請到韓國跑跑卡丁車職業聯賽知名戰隊 Liiv SANDBOX 蒞臨本季聯賽，在線上和台灣粉絲互動，並且還將與本季聯賽「冠軍隊伍」線上交戰，不僅有團體競速賽巔峰對戰，還有道具賽八人大亂鬥，震撼人心的精彩比拼即將在冠軍賽賽程結束後隆重獻映，保證值回票價。'
  },
  profile: {
    name: {
      english: 'Liiv SANDBOX',
      korean: '리브 샌드박스'
    },
    image: 'lsb/icon.svg',
    imageRatio: 1,
    description: 'Liiv SANDBOX 是一支韓國電子競技團隊，於 2018 年成立，過去曾使用名稱 SANDBOX Gaming，旗下擁有跑跑卡丁車（KartRider）、英雄聯盟（League of Legends）以及 FIFA Online 等遊戲戰隊。其中跑跑卡丁車戰隊在 2021 年韓國跑跑卡丁車職業聯賽第一季中拿下了團體賽冠軍的殊榮。',
    honors: {
      team: [
        { name: '2019 KT 5G MULTIVEW KartRider League Season 2', rank: 1 },
        { name: '2020 SKT JUMP KartRider League Season 1', rank: 4 },
        { name: '2020 SKT 5GX JUMP KartRider League Season 2', rank: 3 },
        { name: '2021 SHINHANBANK HEY YOUNG KartRider League Season 1', rank: 1 }
      ]
    }
  },
  members: [
    {
      name: {
        chinese: '朴仁秀',
        english: 'Park In Soo',
        korean: '박인수'
      },
      image: 'lsb/PIS.png',
      playerId: 'LSB_PIS',
      honors: {
        individual: [
          { name: '2020 SKT 5GX JUMP KartRider League Season 2', rank: 3 },
          { name: '2020 SKT JUMP KartRider League Season 1', rank: 3 },
          { name: '2021 SHINHANBANK HEY YOUNG KartRider League Season 1', rank: 2 }
        ],
        team: [
          { name: '2019 KT 5G MULTIVEW KartRider League Season 2', rank: 1 },
          { name: '2020 SKT 5GX JUMP KartRider League Season 2', rank: 3 },
          { name: '2021 SHINHANBANK HEY YOUNG KartRider League Season 1', rank: 1 }
        ]
      }
    },
    {
      name: {
        chinese: '金勝泰',
        english: 'Kim Seung Tae',
        korean: '김승태'
      },
      image: 'lsb/KST.png',
      playerId: 'LSB_KST',
      honors: {
        individual: [
          { name: '2016 KARTRIDER LEAGUE DUALRACE', rank: 2 },
          { name: '2017 KARTRIDER LEAGUE DUALRACE SEASON 2', rank: 1 }
        ],
        team: [
          { name: '2019 KT 5G MULTIVEW KartRider League Season 2', rank: 1 },
          { name: '2020 SKT 5GX JUMP KartRider League Season 2', rank: 3 },
          { name: '2021 SHINHANBANK HEY YOUNG KartRider League Season 1', rank: 1 }
        ]
      }
    },
    {
      name: {
        chinese: '鄭勝河',
        english: 'Jeong Seung Ha',
        korean: '정승하'
      },
      image: 'lsb/JSH.png',
      playerId: 'LSB_JSH',
      honors: {
        team: [
          { name: '2020 SKT JUMP KartRider League Season 1 (w/ Afreeca Freecs)', rank: 4 },
          { name: '2020 SKT 5GX JUMP KartRider League Season 2', rank: 3 },
          { name: '2021 SHINHANBANK HEY YOUNG KartRider League Season 1', rank: 1 }
        ]
      }
    },
    {
      name: {
        chinese: '朴賢秀',
        english: 'Park Hyun Su',
        korean: '박현수'
      },
      image: 'lsb/PHS.png',
      playerId: 'LSB_PHS',
      honors: {
        individual: [
          { name: '2021 SHINHANBANK HEY YOUNG KartRider League Season 1 3rd', rank: 3 }
        ],
        team: [
          { name: '2019 KT 5G MULTIVEW KartRider League Season 2', rank: 1 },
          { name: '2020 SKT 5GX JUMP KartRider League Season 2', rank: 3 },
          { name: '2021 SHINHANBANK HEY YOUNG KartRider League Season 1', rank: 1 }
        ]
      }
    }
  ],
  modes: [
    {
      title: '競速賽 Speed Mode',
      subTitle: 'Match 1',
      image: 'common/mode-1-large.png',
      imageRatio: 1,
      description: '前四張賽道為個人競速賽，雙方隊伍四位隊員需輪流上場，第五張開始進行團體競速賽。',
      rules: [
        '模式：個人/團體競速賽',
        '頻道：快速（Fast / S2）',
        '搶分：搶 7 分勝利（Best of 13）',
        '賽道：同 RSL 夢想盃第二季指定賽道',
        '道具：同 RSL 夢想盃第二季道具限制規則'
      ]
    },
    {
      title: '道具賽 Item Mode',
      subTitle: 'Match 2',
      image: 'common/mode-2-large.png',
      imageRatio: 1,
      description: '沒有隊友，只能靠自己，就算畫面很亂主辦方也管不了的八人大亂鬥！',
      rules: [
        '模式：個人道具賽',
        '頻道：超快速（Super Fast / S3）',
        '搶分：搶 70 分勝利（70 Points）',
        '計分：10 / 8 / 6 / 5 / 4 / 3 / 2 / 1 / 0',
        '賽道：同 RSL 夢想盃第二季指定賽道',
        '道具：同 RSL 夢想盃第二季道具限制規則'
      ]
    }
  ]
}

export default lsb
