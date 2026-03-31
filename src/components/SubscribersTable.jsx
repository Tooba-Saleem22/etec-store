import React from "react";

const SubscribersTable = ({ subscribers }) => (
  <table>
    <thead>
      <tr>
        <th>Email</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {subscribers.map((sub) => (
        <tr key={sub.id}>
          <td>{sub.email}</td>
          <td>{sub.date}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default SubscribersTable;
