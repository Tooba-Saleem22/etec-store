import React from "react";

const DashboardCard = ({ title, value }) => (
  <div className="card">
    <h3>{title}</h3>
    <p>{value ?? "Loading..."}</p>
  </div>
);

export default DashboardCard;
