// fetchReflections.js
export default async function fetchReflections() {
  const res = await fetch("http://localhost:8000/get_review_history/1"); // 仮にuser_id=1
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
