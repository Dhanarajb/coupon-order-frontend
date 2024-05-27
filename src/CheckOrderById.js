import React, { useState } from "react";

const CheckOrderById = ({ onCheckOrder }) => {
  const [orderId, setOrderId] = useState("");

  const handleChange = (e) => {
    setOrderId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCheckOrder(orderId);
    setOrderId("");
  };

  return (
    <div>
      <h2>Check Order by ID</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={orderId}
          onChange={handleChange}
          placeholder="Enter order ID"
        />
        <button type="submit">Check</button>
      </form>
    </div>
  );
};

export default CheckOrderById;
