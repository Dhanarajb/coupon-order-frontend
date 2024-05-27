import React from "react";
import "./App.css";

function OrderCancel({ orders, onCancel }) {
  return (
    <div>
      <h2>Order Cancel</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            {order.item} - ${order.price} - Coupon ID: {order.coupon_code}
            <button onClick={() => onCancel(order.id)}>Cancel Order</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderCancel;
