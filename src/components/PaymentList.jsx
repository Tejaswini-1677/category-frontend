import React, { useEffect, useState } from "react";
import { getPayments, refundPayment } from "../services/paymentService";

const PaymentList = () => {

  const [payments, setPayments] = useState([]);

  useEffect(() => {
    loadPayments();
  }, []);

  const loadPayments = () => {
    getPayments().then((res) => {
      setPayments(res.data);
    });
  };

  const handleRefund = (id) => {
    refundPayment(id).then(() => {
      alert("Refunded");
      loadPayments();
    });
  };

  return (
    <div>
      <h3>Payment List</h3>

      {payments.map((p) => (
        <div key={p.paymentId} className="card p-3 mb-2">
          <p>Order ID: {p.orderId}</p>
          <p>Amount: {p.amount}</p>
          <p>Status: {p.paymentStatus}</p>

          <button onClick={() => handleRefund(p.paymentId)}>
            Refund
          </button>
        </div>
      ))}
    </div>
  );
};

export default PaymentList;