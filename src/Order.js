// Order.js

import React from "react";

function Order({ order, onCancelOrder }) {
  const handleCancel = () => {
    onCancelOrder(order.id);
  };

  return (
    <div>
      <h2>Order Details</h2>
      <div>
        <strong>ID:</strong> {order.id}
        <br />
        <strong>Item:</strong> {order.item}
        <br />
        <strong>Price:</strong> ${order.price}
        <br />
        <strong>Status:</strong> {order.status}
        <br />
      </div>
      {order.status !== "CANCELLED" && (
        <button onClick={handleCancel}>Cancel Order</button>
      )}
    </div>
  );
}

export default Order;
