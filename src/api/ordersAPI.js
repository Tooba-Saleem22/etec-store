const BASE_URL = "http://localhost:5000/api";

export const fetchOrders = async () => {
  const res = await fetch(`${BASE_URL}/orders`);
  if (!res.ok) throw new Error("Failed to fetch orders");
  return await res.json();
};
