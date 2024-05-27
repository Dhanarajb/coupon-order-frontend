// ToCreateCoupon.js

import React, { useState } from "react";
import "./App.css";

function ToCreateCoupon({ onCreateCoupon }) {
  const [couponId, setCouponId] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate coupon code (alphanumeric)
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;
    if (!couponCode.match(alphanumericRegex)) {
      setErrorMessage("Coupon code must contain only alphanumeric characters.");
      return;
    }

    // Validate coupon ID
    const couponIdValue = parseInt(couponId);
    if (isNaN(couponIdValue) || couponIdValue <= 0) {
      setErrorMessage("Invalid coupon ID.");
      return;
    }

    // Validate discount
    const discountValue = parseFloat(discount);
    if (isNaN(discountValue) || discountValue < 0 || discountValue > 100) {
      setErrorMessage("Discount must be a number between 0 and 100.");
      return;
    }

    // Create coupon object
    const newCoupon = {
      couponId: couponIdValue,
      couponCode,
      discount: discountValue,
    };
    // Call onCreateCoupon function from parent component
    onCreateCoupon(newCoupon);
    // Reset form fields
    setCouponId("");
    setCouponCode("");
    setDiscount("");
    setErrorMessage("");
  };

  return (
    <div className="coupon-card">
      <h2>Create Coupon</h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="couponId">Coupon ID:</label>
          <input
            type="number"
            id="couponId"
            value={couponId}
            onChange={(e) => setCouponId(e.target.value)}
            min="1"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="couponCode">Coupon Code:</label>
          <input
            type="text"
            id="couponCode"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            pattern="[A-Za-z0-9]+"
            title="Coupon code must contain only alphanumeric characters."
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="discount">Discount (%):</label>
          <input
            type="number"
            id="discount"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            min="0"
            max="100"
            required
          />
        </div>
        <button type="submit">Create Coupon</button>
      </form>
    </div>
  );
}

export default ToCreateCoupon;
