const BASE_URL = "http://localhost:5000/api";

export const fetchMessages = async () => {
  const res = await fetch(`${BASE_URL}/messages`);
  if (!res.ok) throw new Error("Failed to fetch messages");
  return await res.json();
};
