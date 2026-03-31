const BASE_URL = "http://localhost:5000/api";

export const fetchStats = async () => {
  const res = await fetch(`${BASE_URL}/stats`);
  if (!res.ok) throw new Error("Failed to fetch stats");
  return await res.json();
};
