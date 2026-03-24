import { useEffect, useState } from "react";
import { getCoupons, createCoupon } from "../services/couponService";

export default function Coupon() {
  const [coupons, setCoupons] = useState([]);
  const [form, setForm] = useState({
    couponCode: "",
    discountType: "",
    discountValue: ""
  });

  const load = () => {
    getCoupons().then(res => setCoupons(res.data));
  };

  useEffect(() => {
    load();
  }, []);

  const submit = () => {
    createCoupon(form).then(() => {
      alert("Coupon Created");
      load();
    });
  };

  return (
    <div>
      <h2>Coupon Module</h2>

      <input placeholder="Code" onChange={e => setForm({...form, couponCode: e.target.value})} />
      <input placeholder="Type" onChange={e => setForm({...form, discountType: e.target.value})} />
      <input placeholder="Value" onChange={e => setForm({...form, discountValue: e.target.value})} />

      <button onClick={submit}>Add Coupon</button>

      <h3>All Coupons</h3>
      {coupons.map(c => (
        <div key={c.couponId}>
          <p>{c.couponCode}</p>
          <p>{c.discountType} - {c.discountValue}</p>
        </div>
      ))}
    </div>
  );
}