export const questions = [
  {
    question_id: 1,
    text: "頭痛はどのくらいの頻度で起こりますか？",
    choices: [
      { choice_id: 1, label: "毎日" },
      { choice_id: 2, label: "週に数回" },
      { choice_id: 3, label: "月に数回" },
      { choice_id: 4, label: "ほとんどない" }
    ]
  },
  {
    question_id: 2,
    text: "痛みはどこに感じますか？",
    choices: [
      { choice_id: 5, label: "頭の片側" },
      { choice_id: 6, label: "両側または頭全体" },
      { choice_id: 7, label: "目の奥" }
    ]
  },
  {
    question_id: 3,
    text: "痛みの感覚はどれに近いですか？",
    choices: [
      { choice_id: 8, label: "ズキズキと脈打つような痛み" },
      { choice_id: 9, label: "締めつけられるような鈍い痛み" },
      { choice_id: 10, label: "焼けつくような激痛" }
    ]
  },
  {
    question_id: 4,
    text: "頭痛時に光や音がつらく感じますか？",
    choices: [
      { choice_id: 11, label: "はい" },
      { choice_id: 12, label: "少し" },
      { choice_id: 13, label: "いいえ" }
    ]
  },
  {
    question_id: 5,
    text: "頭痛の際に吐き気や嘔吐がありますか？",
    choices: [
      { choice_id: 14, label: "よくある" },
      { choice_id: 15, label: "時々ある" },
      { choice_id: 16, label: "ない" }
    ]
  },
  {
    question_id: 6,
    text: "頭痛と一緒に肩や首のこりを感じますか？",
    choices: [
      { choice_id: 17, label: "ほぼ毎回ある" },
      { choice_id: 18, label: "時々ある" },
      { choice_id: 19, label: "ない" }
    ]
  },
  {
    question_id: 7,
    text: "睡眠不足のときに頭痛が起こりやすいですか？",
    choices: [
      { choice_id: 20, label: "はい" },
      { choice_id: 21, label: "時々" },
      { choice_id: 22, label: "ない" }
    ]
  },
  {
    question_id: 8,
    text: "頭痛はいつ起きやすいですか？",
    choices: [
      { choice_id: 23, label: "夜中〜早朝" },
      { choice_id: 24, label: "日中" },
      { choice_id: 25, label: "一定しない" }
    ]
  },
  {
    question_id: 9,
    text: "月経の前後で頭痛が強くなりますか？",
    choices: [
      { choice_id: 26, label: "毎回そう感じる" },
      { choice_id: 27, label: "たまにある" },
      { choice_id: 28, label: "関係ない" }
    ]
  },
  {
    question_id: 10,
    text: "頭痛薬を月に何日くらい使っていますか？",
    choices: [
      { choice_id: 29, label: "15日以上" },
      { choice_id: 30, label: "10〜14日" },
      { choice_id: 31, label: "5〜9日" },
      { choice_id: 32, label: "ほとんど使わない" }
    ]
  },
  {
    question_id: 11,
    text: "突然これまでに経験のない激しい頭痛が起こったことがありますか？",
    choices: [
      { choice_id: 33, label: "はい、雷が落ちたような突然の激痛" },
      { choice_id: 34, label: "少し強いが、徐々に起きる" },
      { choice_id: 35, label: "いつもの頭痛と同じ" }
    ]
  },
  {
    question_id: 12,
    text: "頭痛と同時に言葉が出にくくなったり、手足がしびれることがありますか？",
    choices: [
      { choice_id: 36, label: "はい、言葉が出にくくなる/手足がしびれる" },
      { choice_id: 37, label: "たまにある" },
      { choice_id: 38, label: "ない" }
    ]
  },
  {
    question_id: 13,
    text: "頭痛に加えて発熱やうなじのこわばりを感じたことはありますか？",
    choices: [
      { choice_id: 39, label: "はい、発熱やうなじの痛みがある" },
      { choice_id: 40, label: "なんとなく体調不良はある" },
      { choice_id: 41, label: "ない" }
    ]
  },
  {
    question_id: 14,
    text: "頭痛のときに涙が出たり、鼻水が出ることがありますか？",
    choices: [
      { choice_id: 42, label: "頭痛のときに涙が出たり鼻水が出る" },
      { choice_id: 43, label: "目の奥がうずくような痛みがある" },
      { choice_id: 44, label: "特にそういった症状はない" }
    ]
  },
  {
    question_id: 15,
    text: "頭痛が毎日同じ時間帯に起こることがありますか？",
    choices: [
      { choice_id: 45, label: "毎日決まった時間に起きる" },
      { choice_id: 46, label: "たまにそう感じる" },
      { choice_id: 47, label: "時間帯はバラバラ" }
    ]
  },
  {
    question_id: 16,
    text: "薬を飲まないと不安になることがありますか？",
    choices: [
      { choice_id: 48, label: "薬を飲まないと不安になる" },
      { choice_id: 49, label: "とりあえず薬を持ち歩いている" },
      { choice_id: 50, label: "薬を使わずやりすごすことが多い" }
    ]
  },
  {
    question_id: 17,
    text: "日記などで体調を記録することは得意ですか？",
    choices: [
      { choice_id: 51, label: "毎日記録できそう" },
      { choice_id: 52, label: "たまにならできそう" },
      { choice_id: 53, label: "続かないと思う" }
    ]
  },
  {
    question_id: 18,
    text: "ご自身の思考や感情を振り返ることに抵抗はありますか？",
    choices: [
      { choice_id: 54, label: "思考を振り返るのが好き" },
      { choice_id: 55, label: "意識すればできそう" },
      { choice_id: 56, label: "苦手・したくない" }
    ]
  },
  {
    question_id: 19,
    text: "生活習慣を改善して頭痛を減らしたいと思いますか？",
    choices: [
      { choice_id: 57, label: "生活習慣を変える意欲がある" },
      { choice_id: 58, label: "少しある" },
      { choice_id: 59, label: "まったくない" }
    ]
  },
  {
    question_id: 20,
    text: "感情の変化（イライラや落ち込み）と頭痛の関連を感じたことがありますか？",
    choices: [
      { choice_id: 60, label: "イライラや落ち込みと関係ある気がする" },
      { choice_id: 61, label: "ときどきそう思う" },
      { choice_id: 62, label: "関係ないと思う" }
    ]
  },
  {
    question_id: 21,
    text: "休日になると頭痛が軽くなると感じたことはありますか？",
    choices: [
      { choice_id: 63, label: "はい、軽くなることが多い" },
      { choice_id: 64, label: "少し感じる" },
      { choice_id: 65, label: "関係ないと思う" }
    ]
  },
  {
    question_id: 22,
    text: "デスクワークや画面の見すぎのあとに頭痛が起こることがありますか？",
    choices: [
      { choice_id: 66, label: "よくある" },
      { choice_id: 67, label: "ときどきある" },
      { choice_id: 68, label: "ない" }
    ]
  },
  {
    question_id: 23,
    text: "頭痛が始まる前にチカチカした光やギザギザした模様が見えることがありますか？",
    choices: [
      { choice_id: 69, label: "よくある" },
      { choice_id: 70, label: "たまにある" },
      { choice_id: 71, label: "ない" }
    ]
  },
  {
    question_id: 24,
    text: "頭痛が数時間～数日続くことがありますか？",
    choices: [
      { choice_id: 72, label: "はい、2日以上続くこともある" },
      { choice_id: 73, label: "数時間で収まることが多い" },
      { choice_id: 74, label: "すぐに治る" }
    ]
  },
  {
    question_id: 25,
    text: "目の充血や涙、鼻づまりを伴う頭痛がありますか？",
    choices: [
      { choice_id: 75, label: "はい、よくある" },
      { choice_id: 76, label: "たまにある" },
      { choice_id: 77, label: "ない" }
    ]
  },
  {
    question_id: 26,
    text: "頭痛薬を飲んでも効かないことがありますか？",
    choices: [
      { choice_id: 78, label: "はい、あまり効かない" },
      { choice_id: 79, label: "効き目が落ちてきた気がする" },
      { choice_id: 80, label: "よく効く" }
    ]
  },
  {
    question_id: 27,
    text: "頭痛に伴って動くと悪化することがありますか？",
    choices: [
      { choice_id: 81, label: "はい、動くと痛みが増す" },
      { choice_id: 82, label: "少し増す気がする" },
      { choice_id: 83, label: "関係ない" }
    ]
  },
  {
    question_id: 28,
    text: "天気が悪い日や気圧の変化で頭痛が起きやすいですか？",
    choices: [
      { choice_id: 84, label: "はい、気圧の変化で起きやすい" },
      { choice_id: 85, label: "ときどきある" },
      { choice_id: 86, label: "気にならない" }
    ]
  },
  {
    question_id: 29,
    text: "不安感や緊張が続くと頭痛につながることがありますか？",
    choices: [
      { choice_id: 87, label: "よくある" },
      { choice_id: 88, label: "ときどきある" },
      { choice_id: 89, label: "ない" }
    ]
  },
  {
    question_id: 30,
    text: "頭痛が気になって外出や予定を控えることがありますか？",
    choices: [
      { choice_id: 90, label: "はい、よく控える" },
      { choice_id: 91, label: "ときどきある" },
      { choice_id: 92, label: "あまりない" }
    ]
  },
];