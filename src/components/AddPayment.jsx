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

    const payload = {
      orderId: Number(payment.orderId),
      amount: Number(payment.amount),
      paymentMethod: payment.paymentMethod
    };

    createPayment(payload)
      .then(() => {
        alert("Payment Successful");
      })
      .catch(() => {
        alert("Payment Failed");
      });
  };

  return (
    <div className="card p-4">
      <h3>Add Payment</h3>

      <form onSubmit={handleSubmit}>
        <input name="orderId" type="number" placeholder="Order ID" onChange={handleChange} />
        <input name="amount" type="number" placeholder="Amount" onChange={handleChange} />

        <select name="paymentMethod" onChange={handleChange}>
          <option value="">Select</option>
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