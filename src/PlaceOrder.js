import React, { useState } from "react";
import axios from "axios";
import "./PlaceOrder.css"; // Import CSS file for styling

function PlaceOrder({ onPlaceOrder }) {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!item || !price || !paymentMethod) {
      setError("Please fill in all fields");
      return;
    }
    try {
      const response = await axios.post(
        "https://coupon-order-api.onrender.com/orders",
        {
          item,
          price: parseFloat(price),
          paymentMethod,
          status: "CONFIRMED",
        }
      );
      onPlaceOrder(response.data); // Pass the newly created order to the parent component
      setItem("");
      setPrice("");
      setPaymentMethod("");
      setError("");
    } catch (error) {
      console.error("Error placing order:", error);
      setError("Error placing order. Please try again later.");
    }
  };

  return (
    <div className="place-order-container">
      <h2>Place Order</h2>
      {error && <p className="error-message">{error}</p>}
      <form className="place-order-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="item">Item:</label>
          <input
            type="text"
            id="item"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="paymentMethod">Payment Method:</label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
          >
            <option value="">Select Payment Method</option>
            <option value="Credit Card">Credit Card</option>
            <option value="PayPal">PayPal</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
        </div>
        <button type="submit" className="submit-button">
          Place Order
        </button>
      </form>
    </div>
  );
}

export default PlaceOrder;
