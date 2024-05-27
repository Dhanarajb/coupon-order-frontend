import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function ToCheckOrderById() {
  const [orderId, setOrderId] = useState("");
  const [order, setOrder] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setOrderId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!orderId) {
      setError("Please enter an order ID");
      return;
    }
    axios
      .get(`https://coupon-order-api-1.onrender.com/orders/${orderId}`)
      .then((response) => {
        setOrder(response.data);
        setError("");
      })
      .catch((error) => {
        setOrder(null);
        setError("Order not found");
      });
  };

  return (
    <div className="order-container">
      <h2>Check Order By ID</h2>
      <form className="order-form" onSubmit={handleSubmit}>
        <label htmlFor="orderId">Enter Order ID:</label>
        <input
          type="number"
          id="orderId"
          value={orderId}
          onChange={handleChange}
          required
        />
        <button type="submit">Search</button>
      </form>
      {error && <p>{error}</p>}
      {order && (
        <div className="order-details">
          <h3>Order Details</h3>
          <p>
            <strong>ID:</strong> {order.id}
          </p>
          <p>
            <strong>Item:</strong> {order.item}
          </p>
          <p>
            <strong>Price:</strong> ${order.price}
          </p>
          <p>
            <strong>Status:</strong> {order.status}
          </p>
        </div>
      )}
    </div>
  );
}

export default ToCheckOrderById;
