// CreateOrder.js
import React, { useState } from "react";
import "./App.css";

function CreateOrder({ createOrder }) {
  const [itemId, setItemId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!itemId) return;
    createOrder({ id: Math.random().toString(), ...itemId });
    setItemId("");
  };

  return (
    <div>
      <h2>Create Order</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item ID"
          value={itemId}
          onChange={(e) => setItemId(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateOrder;
