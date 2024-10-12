import React, { useState } from "react";
import axios from "axios";

const PaymentForm = ({ addPayment }) => {
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("unpaid");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPayment = {
      amount: parseFloat(amount),
      status: status
    };

    axios
      .post("http://localhost:3001/payments", newPayment)
      .then((response) => {
        addPayment(response.data);
        setAmount("");
        setStatus("unpaid"); 
      })
      .catch((error) => console.error("Error adding payment:", error));
  };

  return (
    <div className="bg-light p-3 rounded mb-3">
      <h2>Add Payment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select
            className="form-control"
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="unpaid">Unpaid</option>
            <option value="paid">Paid</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Add Payment
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
