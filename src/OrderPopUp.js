// OrderPopup.js

import React from "react";
import "./App.css";

function OrderPopup({
  couponId,
  onClose,
  onSubmit,
  orderFormData,
  setOrderFormData,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(orderFormData);
  };

  return (
    <div className="order-popup-overlay">
      <div className="order-popup">
        <h2>Order Coupon ID: {couponId}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="item">Item:</label>
            <input
              type="text"
              id="item"
              name="item"
              value={orderFormData.item}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={orderFormData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="button-container">
            <button type="submit">Order</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OrderPopup;
