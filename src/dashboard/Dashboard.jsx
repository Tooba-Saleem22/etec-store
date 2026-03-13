import { useState } from "react";
import Products from "./Products";
import Orders from "./Orders";
import Messages from "./Messages";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("products");

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 p-6">
        <h2 className="text-2xl font-semibold mb-6">Admin Dashboard</h2>
        <ul className="flex flex-col gap-4">
          <li
            onClick={() => setActiveTab("products")}
            className="cursor-pointer"
          >
            Products
          </li>
          <li onClick={() => setActiveTab("orders")} className="cursor-pointer">
            Orders
          </li>
          <li
            onClick={() => setActiveTab("messages")}
            className="cursor-pointer"
          >
            Messages
          </li>
        </ul>
      </div>

      {/* Content */}
      <div className="flex-1 p-6">
        {activeTab === "products" && <Products />}
        {activeTab === "orders" && <Orders />}
        {activeTab === "messages" && <Messages />}
      </div>
    </div>
  );
};

export default Dashboard;
