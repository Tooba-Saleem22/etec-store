import React from "react";

const MessagesTable = ({ messages }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Received</th>
      </tr>
    </thead>
    <tbody>
      {messages.map((msg) => (
        <tr key={msg.id}>
          <td>{msg.name}</td>
          <td>{msg.email}</td>
          <td>{msg.received}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default MessagesTable;
