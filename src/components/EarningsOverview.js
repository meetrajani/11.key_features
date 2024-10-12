import React from "react";

const EarningsOverview = ({ payments }) => {
  // Calculate total earnings
  const totalEarnings = payments
    .filter((payment) => payment.status === "paid")
    .reduce((total, payment) => total + payment.amount, 0);

  return (
    <div className="earnings-overview bg-light p-3 rounded mt-3">
      <h2>Earnings Overview</h2>
      <p>Total Earnings: ${totalEarnings.toFixed(2)}</p>
      <div className="chart">
      </div>
    </div>
  );
};

export default EarningsOverview;
