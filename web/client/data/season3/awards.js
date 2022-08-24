const awards = [
  {
    title: '榮譽獎項',
    details: [
      {
        title: 'Champion',
        subtitle: '冠軍',
        image: 'amd',
        content: [
          '獎金：NTD $30,000',
          '遊戲虛寶：Formosa V1 (永久)、骷髏惡霸 V1 (永久)、強化產包 BLACK (3 個)',
          '專業電腦配備：AMD 提供 [AMD Ryzen™ 5 5600X 桌上型電腦處理器]（4 組）',
          '專業電競週邊：HyperX 提供 [HyperX Clutch — 無線遊戲控制器]（2 組）'
        ]
      },
      {
        title: '2nd Place',
        subtitle: '亞軍',
        image: 'tt-2',
        content: [
          '獎金：NTD $15,000',
          '遊戲虛寶：Formosa V1 (永久)、強化產包 BLACK (2 個)',
          '專業電競週邊：TT 曜越科技提供 [幻銀 ARGENT H5 RGB 無線電競耳機]（4 組）',
          '專業電競週邊：HyperX 提供 [HyperX Clutch — 無線遊戲控制器]（2 組）'
        ]
      },
      {
        title: '3rd Place',
        subtitle: '季軍',
        image: 'hyperx-1',
        content: [
          '獎金：NTD $5,000',
          '遊戲虛寶：骷髏惡霸 V1 (永久)、強化產包 BLACK (1 個)',
          '專業電競週邊：HyperX 提供 [HyperX Alloy Origins 60 機械式電競鍵盤]（4 組）'
        ]
      },
      {
        title: '4th Place',
        subtitle: '殿軍',
        image: 'hyperx-2',
        content: [
          '遊戲虛寶：強化產包 BLACK (1 個)',
          '專業電競週邊：HyperX 提供 [HyperX Pulsefire Haste 無線電競滑鼠]（4 組）'
        ]
      }
    ]
  },
  {
    title: '特殊獎項',
    details: [
      {
        title: '總決賽 MVP',
        subtitle: 'Finals MVP',
        description: '總決賽結束並產生最終冠軍隊伍後，由主播賽評團評選公佈。',
        image: 'tt-2',
        content: [
          '獎金：NTD $5,000',
          '遊戲虛寶：強化產包 BLACK (1 個)',
          '專業電競週邊：TT 曜越科技提供 [幻銀 ARGENT H5 RGB 無線電競耳機]',
          '專業電競週邊：HyperX 提供 [HyperX Clutch — 無線遊戲控制器]'
        ]
      },
      {
        title: '賽道紀錄霸主',
        subtitle: 'Track Master',
        description: '第三賽季結束後，保有最多張團體競速賽道最佳記錄的選手。',
        image: 'hyperx-1',
        content: [
          '獎金：NTD $3,000',
          '遊戲虛寶：強化產包 BLACK (1 個)',
          '專業電競週邊：HyperX 提供 [HyperX Alloy Origins 60 機械式電競鍵盤]',
          '專業電競週邊：HyperX 提供 [HyperX Clutch — 無線遊戲控制器]'
        ]
      },
      {
        title: '觀眾票選人氣王',
        subtitle: 'Most Popular Team',
        description: '由觀眾票選支持的 8 強隊伍，最終獲得最高票數者。',
        image: 'hyperx-2',
        content: [
          '獎金：NTD $2,000',
          '專業電競週邊：HyperX 提供 [HyperX Pulsefire Haste 無線電競滑鼠]',
          '專業電競週邊：HyperX 提供 [HyperX Clutch — 無線遊戲控制器]'
        ]
      },
      {
        title: '選手參賽獎',
        subtitle: 'Participator',
        description: '報名成功且至少出賽一場的隊伍成員皆可獲得，不包含失格、棄權或無故未到者。',
        image: 'kartrider',
        content: [
          '遊戲虛寶：蛋白石寶箱 (3 個)'
        ]
      }
    ]
  },
  {
    title: '觀眾福利',
    details: [
      {
        title: 'RRR 幣兌換',
        subtitle: 'Redeem by Channel Points',
        description: '於賽事直播期間在 RSL 官方 Twitch 頻道互動累積忠誠點數，就能兌換抽獎券。',
        image: 'hyperx-3',
        content: [
          '專業電競週邊：HyperX 提供 [HyperX Alloy Origins 60 機械式電競鍵盤]',
          '專業電競週邊：HyperX 提供 [HyperX Clutch — 無線遊戲控制器]'
        ]
      },
      {
        title: '購物折扣碼',
        subtitle: 'Discount Coupon',
        image: 'planet9',
        content: [
          '至 PLANET9 商城結帳時輸入折扣碼「RSL150」即可享滿 1000 元折 150 元的優惠，使用期限至 8/31 23:59 止'
        ]
      },
      {
        title: '訂閱 & 贊助小奇點',
        subtitle: 'Subscribe & Cheering',
        description: '於賽事期間訂閱 RSL 官方 Twitch 頻道或是發送小奇點，就有機會獲得好禮。',
        image: 'samsung',
        content: [
          '訂閱頻道（收禮不計）抽 1 名：[Ryzen™ 5 5600X 桌上型電腦處理器]',
          '小奇點發送滿 500 點抽 1 名：SAMSUNG 提供 [27吋 Odyssey G5 1000R 曲面電競顯示器]'
        ]
      },
      {
        title: '總決賽終極獎勵',
        subtitle: 'Finals Lottery',
        description: '將於 8/27 總決賽當日直播抽出，人人都有機會成為幸運兒，敬請關注賽事轉播。',
        image: 'tt-1',
        content: [
          '專業電競週邊：TT 曜越科技提供 [幻銀 ARGENT E700 真皮電競椅 (松石綠)]'
        ]
      }
    ]
  }
]

export default awards
