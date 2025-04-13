// fetchReflections.js
// ✅ APIの接続先を環境変数で切り替えできるようにしました
//    .env.local（開発用）と .env.production（本番用）を切り替えることで、
//    ローカル or Azure への接続が自動で変わります
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default async function fetchReflections() {
  // 仮に user_id=1 の履歴データを取得
  const res = await fetch(`${API_BASE_URL}/get_review_history/1`);
  const data = await res.json();
  return data;
}
  
  const data = await res.json();

  // data自体が配列であることを想定
  if (!Array.isArray(data)) {
    throw new Error("APIのレスポンス形式が想定と異なります");
  }

  return data.map((session) => ({
    date: session.date,
    ratings: {
      goals: session.ratings.goals, // [{ to_be_id, score }]
      habits: session.ratings.habits, // [{ to_do_id, score }]
    },
    comment: session.comment || ""
  }));
}
