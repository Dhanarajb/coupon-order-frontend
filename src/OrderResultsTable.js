import React from "react";
import "./App.css"; // Import CSS file for styling

const OrderResultsTable = ({ orders }) => {
  return (
    <div>
      <h3>Matched Orders:</h3>
      <table className="orders-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Item</th>
            <th>Price</th>
            <th>Status</th>
            <th>Coupon Code</th>
            <th>Discount</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.id}</td>
              <td>{order.item}</td>
              <td>${order.price}</td>
              <td>{order.status}</td>
              <td>{order.coupon_code}</td>
              <td>{order.discount}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderResultsTable;
