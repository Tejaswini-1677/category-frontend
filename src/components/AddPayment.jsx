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

    createPayment(payment).then(() => {
      alert("Payment Successful");
    });
  };

  return (
    <div className="card p-4">
      <h3>Add Payment</h3>

      <form onSubmit={handleSubmit}>
        <input name="orderId" placeholder="Order ID" onChange={handleChange} />
        <input name="amount" placeholder="Amount" onChange={handleChange} />

        <select name="paymentMethod" onChange={handleChange}>
          <option>SELECT</option>
          <option>CARD</option>
          <option>UPI</option>
          <option>PAYPAL</option>
        </select>

        <button type="submit">Pay</button>
      </form>
    </div>
  );
};

export default AddPayment;