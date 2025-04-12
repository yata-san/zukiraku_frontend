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
      { choice_id: 1, label: "頭の片側" },
      { choice_id: 2, label: "両側または頭全体" },
      { choice_id: 3, label: "目の奥" }
    ]
  },
  {
    question_id: 3,
    text: "痛みの感覚はどれに近いですか？",
    choices: [
      { choice_id: 1, label: "ズキズキと脈打つような痛み" },
      { choice_id: 2, label: "締めつけられるような鈍い痛み" },
      { choice_id: 3, label: "焼けつくような激痛" }
    ]
  },
  {
    question_id: 4,
    text: "頭痛時に光や音がつらく感じますか？",
    choices: [
      { choice_id: 1, label: "はい" },
      { choice_id: 2, label: "少し" },
      { choice_id: 3, label: "いいえ" }
    ]
  },
  {
    question_id: 5,
    text: "頭痛の際に吐き気や嘔吐がありますか？",
    choices: [
      { choice_id: 1, label: "よくある" },
      { choice_id: 2, label: "時々ある" },
      { choice_id: 3, label: "ない" }
    ]
  },
  {
    question_id: 6,
    text: "頭痛と一緒に肩や首のこりを感じますか？",
    choices: [
      { choice_id: 1, label: "ほぼ毎回ある" },
      { choice_id: 2, label: "時々ある" },
      { choice_id: 3, label: "ない" }
    ]
  },
  {
    question_id: 7,
    text: "睡眠不足のときに頭痛が起こりやすいですか？",
    choices: [
      { choice_id: 1, label: "はい" },
      { choice_id: 2, label: "時々" },
      { choice_id: 3, label: "ない" }
    ]
  },
  {
    question_id: 8,
    text: "頭痛はいつ起きやすいですか？",
    choices: [
      { choice_id: 1, label: "夜中〜早朝" },
      { choice_id: 2, label: "日中" },
      { choice_id: 3, label: "一定しない" }
    ]
  },
  {
    question_id: 9,
    text: "月経の前後で頭痛が強くなりますか？",
    choices: [
      { choice_id: 1, label: "毎回そう感じる" },
      { choice_id: 2, label: "たまにある" },
      { choice_id: 3, label: "関係ない" }
    ]
  },
  {
    question_id: 10,
    text: "頭痛薬を月に何日くらい使っていますか？",
    choices: [
      { choice_id: 1, label: "15日以上" },
      { choice_id: 2, label: "10〜14日" },
      { choice_id: 3, label: "5〜9日" },
      { choice_id: 4, label: "ほとんど使わない" }
    ]
  },
  {
    question_id: 11,
    text: "突然これまでに経験のない激しい頭痛が起こったことがありますか？",
    choices: [
      { choice_id: 1, label: "はい、雷が落ちたような突然の激痛" },
      { choice_id: 2, label: "少し強いが、徐々に起きる" },
      { choice_id: 3, label: "いつもの頭痛と同じ" }
    ]
  },
  {
    question_id: 12,
    text: "頭痛と同時に言葉が出にくくなったり、手足がしびれることがありますか？",
    choices: [
      { choice_id: 1, label: "はい、言葉が出にくくなる/手足がしびれる" },
      { choice_id: 2, label: "たまにある" },
      { choice_id: 3, label: "ない" }
    ]
  },
  {
    question_id: 13,
    text: "頭痛に加えて発熱やうなじのこわばりを感じたことはありますか？",
    choices: [
      { choice_id: 1, label: "はい、発熱やうなじの痛みがある" },
      { choice_id: 2, label: "なんとなく体調不良はある" },
      { choice_id: 3, label: "ない" }
    ]
  },
  {
    question_id: 14,
    text: "頭痛のときに涙が出たり、鼻水が出ることがありますか？",
    choices: [
      { choice_id: 1, label: "頭痛のときに涙が出たり鼻水が出る" },
      { choice_id: 2, label: "目の奥がうずくような痛みがある" },
      { choice_id: 3, label: "特にそういった症状はない" }
    ]
  },
  {
    question_id: 15,
    text: "頭痛が毎日同じ時間帯に起こることがありますか？",
    choices: [
      { choice_id: 1, label: "毎日決まった時間に起きる" },
      { choice_id: 2, label: "たまにそう感じる" },
      { choice_id: 3, label: "時間帯はバラバラ" }
    ]
  },
  {
    question_id: 16,
    text: "薬を飲まないと不安になることがありますか？",
    choices: [
      { choice_id: 1, label: "薬を飲まないと不安になる" },
      { choice_id: 2, label: "とりあえず薬を持ち歩いている" },
      { choice_id: 3, label: "薬を使わずやりすごすことが多い" }
    ]
  },
  {
    question_id: 17,
    text: "日記などで体調を記録することは得意ですか？",
    choices: [
      { choice_id: 1, label: "毎日記録できそう" },
      { choice_id: 2, label: "たまにならできそう" },
      { choice_id: 3, label: "続かないと思う" }
    ]
  },
  {
    question_id: 18,
    text: "ご自身の思考や感情を振り返ることに抵抗はありますか？",
    choices: [
      { choice_id: 1, label: "思考を振り返るのが好き" },
      { choice_id: 2, label: "意識すればできそう" },
      { choice_id: 3, label: "苦手・したくない" }
    ]
  },
  {
    question_id: 19,
    text: "生活習慣を改善して頭痛を減らしたいと思いますか？",
    choices: [
      { choice_id: 1, label: "生活習慣を変える意欲がある" },
      { choice_id: 2, label: "少しある" },
      { choice_id: 3, label: "まったくない" }
    ]
  },
  {
    question_id: 20,
    text: "感情の変化（イライラや落ち込み）と頭痛の関連を感じたことがありますか？",
    choices: [
      { choice_id: 1, label: "イライラや落ち込みと関係ある気がする" },
      { choice_id: 2, label: "ときどきそう思う" },
      { choice_id: 3, label: "関係ないと思う" }
    ]
  },
  {
    question_id: 21,
    text: "休日になると頭痛が軽くなると感じたことはありますか？",
    choices: [
      { choice_id: 1, label: "はい、軽くなることが多い" },
      { choice_id: 2, label: "少し感じる" },
      { choice_id: 3, label: "関係ないと思う" }
    ]
  },
  {
    question_id: 22,
    text: "デスクワークや画面の見すぎのあとに頭痛が起こることがありますか？",
    choices: [
      { choice_id: 1, label: "よくある" },
      { choice_id: 2, label: "ときどきある" },
      { choice_id: 3, label: "ない" }
    ]
  },
  {
    question_id: 23,
    text: "頭痛が始まる前にチカチカした光やギザギザした模様が見えることがありますか？",
    choices: [
      { choice_id: 1, label: "よくある" },
      { choice_id: 2, label: "たまにある" },
      { choice_id: 3, label: "ない" }
    ]
  },
  {
    question_id: 24,
    text: "頭痛が数時間～数日続くことがありますか？",
    choices: [
      { choice_id: 1, label: "はい、2日以上続くこともある" },
      { choice_id: 2, label: "数時間で収まることが多い" },
      { choice_id: 3, label: "すぐに治る" }
    ]
  },
  {
    question_id: 25,
    text: "目の充血や涙、鼻づまりを伴う頭痛がありますか？",
    choices: [
      { choice_id: 1, label: "はい、よくある" },
      { choice_id: 2, label: "たまにある" },
      { choice_id: 3, label: "ない" }
    ]
  },
  {
    question_id: 26,
    text: "頭痛薬を飲んでも効かないことがありますか？",
    choices: [
      { choice_id: 1, label: "はい、あまり効かない" },
      { choice_id: 2, label: "効き目が落ちてきた気がする" },
      { choice_id: 3, label: "よく効く" }
    ]
  },
  {
    question_id: 27,
    text: "頭痛に伴って動くと悪化することがありますか？",
    choices: [
      { choice_id: 1, label: "はい、動くと痛みが増す" },
      { choice_id: 2, label: "少し増す気がする" },
      { choice_id: 3, label: "関係ない" }
    ]
  },
  {
    question_id: 28,
    text: "天気が悪い日や気圧の変化で頭痛が起きやすいですか？",
    choices: [
      { choice_id: 1, label: "はい、気圧の変化で起きやすい" },
      { choice_id: 2, label: "ときどきある" },
      { choice_id: 3, label: "気にならない" }
    ]
  },
  {
    question_id: 29,
    text: "不安感や緊張が続くと頭痛につながることがありますか？",
    choices: [
      { choice_id: 1, label: "よくある" },
      { choice_id: 2, label: "ときどきある" },
      { choice_id: 3, label: "ない" }
    ]
  },
  {
    question_id: 30,
    text: "頭痛が気になって外出や予定を控えることがありますか？",
    choices: [
      { choice_id: 1, label: "はい、よく控える" },
      { choice_id: 2, label: "ときどきある" },
      { choice_id: 3, label: "あまりない" }
    ]
  },
];