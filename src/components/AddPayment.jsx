import React, { useState } from "react";
import { createPayment } from "../services/paymentService";

const AddPayment = () => {

  const [payment, setPayment] = useState({
    orderId: "",
    amount: "",
    paymentMethod: ""
  });

  const handleChange = (e) => {
    setPayment({
      ...payment,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔥 FIX: convert to backend format
    const payload = {
      order: {
        id: Number(payment.orderId)
      },
      amount: Number(payment.amount),
      paymentMethod: payment.paymentMethod
    };

    console.log("Sending:", payload);

    createPayment(payload)
      .then((res) => {
        console.log("Response:", res.data);
        alert("Payment Successful");
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("Payment Failed");
      });
  };

  return (
    <div className="card p-4">
      <h3>Add Payment</h3>

      <form onSubmit={handleSubmit}>
        
        <input
          name="orderId"
          type="number"
          placeholder="Order ID"
          onChange={handleChange}
          required
        />

        <input
          name="amount"
          type="number"
          placeholder="Amount"
          onChange={handleChange}
          required
        />

        <select
          name="paymentMethod"
          onChange={handleChange}
          required
        >
          <option value="">Select Method</option>
          <option value="CARD">CARD</option>
          <option value="UPI">UPI</option>
          <option value="PAYPAL">PAYPAL</option>
        </select>

        <button type="submit">Pay</button>
      </form>
    </div>
  );
};

export default AddPayment;