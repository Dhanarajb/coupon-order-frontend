import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const CreateCoupon = ({ onCreateCoupon }) => {
  const [id, setId] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!id || !couponCode || !discount || !status) {
      setError("All fields are mandatory");
      return;
    }

    const alphanumericRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]+$/;
    if (!alphanumericRegex.test(couponCode)) {
      setError("Coupon code must contain both alphabets and numbers");
      return;
    }

    if (parseInt(discount) > 100) {
      setError("Discount cannot be more than 100%");
      return;
    }

    try {
      const response = await axios.post(
        "https://coupon-order-api.onrender.com/coupons",
        {
          id: parseInt(id),
          couponCode,
          discount: parseInt(discount),
          status,
        }
      );

      onCreateCoupon(response.data); // assuming response.data contains the newly created coupon
      setId("");
      setCouponCode("");
      setDiscount("");
      setStatus("");
      setError("");
    } catch (error) {
      console.error("Error creating coupon:", error);
      setError("Error creating coupon. Please try again later.");
    }
  };

  const statusOptions = ["CONFIRMED", "DELIVERED", "CANCELLED"];

  return (
    <div className="create-coupon-container">
      <h2>Create Coupon</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>ID:</label>
          <input
            type="number"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Coupon Code:</label>
          <input
            type="text"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Discount:</label>
          <input
            type="number"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Status:</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="form-control"
          >
            <option value="">Select Status</option>
            {statusOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="submit-button">
          Create Coupon
        </button>
      </form>
    </div>
  );
};

export default CreateCoupon;
