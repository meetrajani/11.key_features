import React from "react";
import axios from "axios";

const PaymentList = ({ payments }) => {
  const markAsPaid = (id) => {
    axios
      .patch(`http://localhost:3001/payments/${id}`, { status: "paid" })
      .then(() => {
        window.location.reload(); 
      });
  };

  return (
    <div className="bg-light p-3 rounded">
      <h2>Payments</h2>
      <ul className="list-group">
        {payments.map((payment) => (
          <li key={payment.id} className="list-group-item d-flex justify-content-between align-items-center">
            Amount: ${payment.amount} - Status: {payment.status}
            {payment.status === "unpaid" && (
              <button className="btn btn-success" onClick={() => markAsPaid(payment.id)}>
                Mark as Paid
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentList;
