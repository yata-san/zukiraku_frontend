export default async function fetchReflections() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_ENDPOINT + "/api/reflections", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
  
    if (!res.ok) throw new Error("Failed to fetch reflections");
  
    return res.json(); // ← [{ date, ratings, comment, ... }, ...]
  }
  