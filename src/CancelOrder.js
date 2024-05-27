import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CancelOrder.css"; // Import CSS file for styling

function CancelOrder() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(
        "https://coupon-order-api.onrender.com/orders"
      );
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const handleDeleteOrder = async (orderId) => {
    try {
      await axios.delete(
        `https://coupon-order-api.onrender.com/orders/${orderId}`
      );
      // Update orders locally after deleting
      setOrders((prevOrders) =>
        prevOrders.filter((order) => order.id !== orderId)
      );
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  return (
    <div className="cancel-order-container">
      <h2>Cancel Order</h2>
      <div className="order-list">
        {orders.map((order) => (
          <div key={order.id} className="order-card">
            <p>
              <strong>ID:</strong> {order.id}
            </p>
            <p>
              <strong>Item:</strong> {order.item}
            </p>
            <p>
              <strong>Price:</strong> ${order.price}
            </p>
            <p>
              <strong>Status:</strong> {order.status}
            </p>
            <button onClick={() => handleDeleteOrder(order.id)}>
              Delete Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CancelOrder;
