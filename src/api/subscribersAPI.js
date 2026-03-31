const BASE_URL = "http://localhost:5000/api";

export const fetchSubscribers = async () => {
  const res = await fetch(`${BASE_URL}/subscribers`);
  if (!res.ok) throw new Error("Failed to fetch subscribers");
  return await res.json();
};
