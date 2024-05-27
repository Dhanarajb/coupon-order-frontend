import React, { useState } from "react";
import "./App.css";

function OrderDetails({ orders }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(orders);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const results = orders.filter((order) =>
      order.coupon_code.toLowerCase().includes(term)
    );
    setSearchResults(results);
  };

  return (
    <div>
      <h2>Order Details</h2>
      <input
        type="text"
        placeholder="Search by Coupon ID"
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <ul>
        {searchResults.map((order) => (
          <li key={order.id}>
            {order.item} - ${order.price} - Coupon ID: {order.coupon_code}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderDetails;
