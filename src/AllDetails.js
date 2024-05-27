// AllDetails.js
import React from "react";

function AllDetails({ coupons, orders }) {
  return (
    <div>
      <h2>All Details</h2>
      <h3>Coupons</h3>
      <ul>
        {coupons.map((coupon) => (
          <li key={coupon.id}>
            {coupon.couponCode} - {coupon.discount}%
          </li>
        ))}
      </ul>
      <h3>Orders</h3>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            {order.item} - ${order.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllDetails;
