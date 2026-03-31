import React from "react";

const OrdersTable = ({ orders }) => (
  <table>
    <thead>
      <tr>
        <th>Order ID</th>
        <th>Customer</th>
        <th>Product</th>
        <th>Amount</th>
        <th>Status</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {orders.map((order) => (
        <tr key={order.id}>
          <td>{order.id}</td>
          <td>{order.customer}</td>
          <td>{order.product}</td>
          <td>${order.amount}</td>
          <td>{order.status}</td>
          <td>{order.date}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default OrdersTable;
