import React, { useEffect, useState } from "react";

// Components
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DashboardCard from "../components/DashboardCard";
import OrdersTable from "../components/OrdersTable";
import SubscribersTable from "../components/SubscribersTable";
import MessagesTable from "../components/MessagesTable";

// API functions
import { fetchStats } from "../api/statsAPI";
import { fetchOrders } from "../api/ordersAPI";
import { fetchSubscribers } from "../api/subscribersAPI";
import { fetchMessages } from "../api/messagesAPI";

const Dashboard = () => {
  // State for data
  const [stats, setStats] = useState({});
  const [orders, setOrders] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [messages, setMessages] = useState([]);

  // Fetch all data on mount
  useEffect(() => {
    const getData = async () => {
      try {
        const statsData = await fetchStats();
        setStats(statsData);

        const ordersData = await fetchOrders();
        setOrders(ordersData);

        const subscribersData = await fetchSubscribers();
        setSubscribers(subscribersData);

        const messagesData = await fetchMessages();
        setMessages(messagesData);
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
      }
    };
    getData();
  }, []);

  return (
    <div className="dashboard-container" style={{ display: "flex" }}>
      <Sidebar />

      <div className="main-content" style={{ flex: 1, padding: "20px" }}>
        <Header />

        {/* Dashboard Overview Cards */}
        <div
          className="cards"
          style={{ display: "flex", gap: "20px", marginBottom: "30px" }}
        >
          <DashboardCard title="Total Orders" value={stats.totalOrders} />
          <DashboardCard title="Revenue" value={`$${stats.revenue}`} />
          <DashboardCard title="Total Products" value={stats.totalProducts} />
          <DashboardCard title="Subscribers" value={stats.subscribers} />
        </div>

        {/* Orders Table */}
        <h2>Recent Orders</h2>
        <OrdersTable orders={orders} />

        {/* Subscribers Table */}
        <h2 style={{ marginTop: "40px" }}>Recent Subscribers</h2>
        <SubscribersTable subscribers={subscribers} />

        {/* Messages Table */}
        <h2 style={{ marginTop: "40px" }}>New Messages</h2>
        <MessagesTable messages={messages} />
      </div>
    </div>
  );
};

export default Dashboard;
