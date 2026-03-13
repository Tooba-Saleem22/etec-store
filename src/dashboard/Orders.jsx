import { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const res = await fetch("http://localhost:5000/api/orders");
    const data = await res.json();
    setOrders(data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleStatusChange = async (id, status) => {
    await fetch(`http://localhost:5000/api/orders/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });

    fetchOrders();
  };

  const handleRemove = async (id) => {
    await fetch(`http://localhost:5000/api/orders/${id}`, {
      method: "DELETE",
    });

    fetchOrders();
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Orders</h2>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Customer</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Product</th>
            <th className="border p-2">Quantity</th>
            <th className="border p-2">Total</th>
            <th className="border p-2">Address</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((o) => (
            <tr key={o._id}>
              <td className="border p-2">{o.customer}</td>
              <td className="border p-2">{o.email}</td>
              <td className="border p-2">{o.product}</td>
              <td className="border p-2">{o.quantity}</td>
              <td className="border p-2">${o.total}</td>
              <td className="border p-2">{o.address}</td>

              <td className="border p-2">
                <select
                  value={o.status}
                  onChange={(e) => handleStatusChange(o._id, e.target.value)}
                >
                  <option>Pending</option>
                  <option>Delivered</option>
                </select>
              </td>

              <td className="border p-2">
                <button
                  onClick={() => handleRemove(o._id)}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
