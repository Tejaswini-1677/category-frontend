import { useEffect, useState } from "react";
import { getShipping, createShipping } from "../services/shippingService";

export default function Shipping() {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    orderId: "",
    courierService: "",
    trackingNumber: "",
    shippingStatus: "",
    shippingCost: ""
  });

  const load = () => {
    getShipping().then(res => setData(res.data));
  };

  useEffect(() => {
    load();
  }, []);

  const handleSubmit = () => {
    createShipping(form).then(() => {
      alert("Shipping Added");
      load();
    });
  };

  return (
    <div>
      <h2>Shipping Module</h2>

      <input placeholder="Order ID" onChange={e => setForm({...form, orderId: e.target.value})} />
      <input placeholder="Courier" onChange={e => setForm({...form, courierService: e.target.value})} />
      <input placeholder="Tracking" onChange={e => setForm({...form, trackingNumber: e.target.value})} />
      <input placeholder="Status" onChange={e => setForm({...form, shippingStatus: e.target.value})} />
      <input placeholder="Cost" onChange={e => setForm({...form, shippingCost: e.target.value})} />

      <button onClick={handleSubmit}>Add Shipping</button>

      <h3>Shipping List</h3>
      {data.map(s => (
        <div key={s.shippingId}>
          <p>Order: {s.orderId}</p>
          <p>Status: {s.shippingStatus}</p>
          <p>Tracking: {s.trackingNumber}</p>
        </div>
      ))}
    </div>
  );
}