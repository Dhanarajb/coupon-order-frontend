// Coupon.js
import React from "react";
import "./App.css";

function Coupon({ coupons }) {
  return (
    <div>
      <h2>Coupons</h2>
      <ul>
        {coupons.map((coupon) => (
          <li key={coupon.id}>
            {coupon.couponCode} - {coupon.discount}%
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Coupon;
