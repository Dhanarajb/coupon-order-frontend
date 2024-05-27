import React, { useState } from "react";
import "./App.css"; // Import CSS file for styling

const CheckOrderByCouponId = ({ fetchOrderDetailsById }) => {
  const [orderId, setOrderId] = useState("");
  const [orderDetails, setOrderDetails] = useState(null);

  const handleChange = (e) => {
    setOrderId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const details = fetchOrderDetailsById(orderId);
    setOrderDetails(details);
    setOrderId("");
  };

  return (
    <div>
      <h2>Check Order by ID</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            value={orderId}
            onChange={handleChange}
            placeholder="Enter order ID"
            className="form-control"
          />
        </div>
        <button type="submit" className="submit-button">
          Check
        </button>
      </form>

      {orderDetails ? (
        <div className="order-details">
          <h3>Order Details:</h3>
          <p>ID: {orderDetails.id}</p>
          <p>Item: {orderDetails.item}</p>
          <p>Price: ${orderDetails.price}</p>
          <p>Status: {orderDetails.status}</p>
          <h4>Coupon Details:</h4>
          {orderDetails.coupon ? (
            <div>
              <p>Coupon Code: {orderDetails.coupon.couponCode}</p>
              <p>Discount: {orderDetails.coupon.discount}%</p>
            </div>
          ) : (
            <p>No coupon applied</p>
          )}
        </div>
      ) : (
        <p>No order found</p>
      )}
    </div>
  );
};

export default CheckOrderByCouponId;
