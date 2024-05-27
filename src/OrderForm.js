// OrderForm.js
import React, { useState } from "react";
import axios from "axios";

const OrderForm = ({ onCreateOrder }) => {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!item || !price) {
      setError("Please fill in all fields");
      return;
    }
    try {
      const response = await axios.post(
        "https://coupon-order-api.onrender.com/orders",
        {
          item,
          price: parseFloat(price),
          status: "CONFIRMED",
        }
      );
      onCreateOrder(response.data);
      setItem("");
      setPrice("");
      setError("");
    } catch (error) {
      console.error("Error creating order:", error);
      setError("Error creating order. Please try again later.");
    }
  };

  return (
    <div className="order-form">
      <h2>Create Order</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Item:</label>
          <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Order</button>
      </form>
    </div>
  );
};

export default OrderForm;
