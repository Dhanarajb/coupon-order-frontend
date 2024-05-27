import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import ToCreateCoupon from "./ToCreateCoupon";
import ViewAllCoupons from "./ViewAllCoupons";
import ToCheckOrderById from "./ToCheckOrderById";
import CancelOrder from "./CancelOrder";
import PlaceOrder from "./PlaceOrder";
import OrderForm from "./OrderForm";

function App() {
  const [activeTab, setActiveTab] = useState("ToCreateCoupon");
  const [coupons, setCoupons] = useState([]);
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Fetch coupons data
  useEffect(() => {
    axios
      .get("https://coupon-order-api.onrender.com/coupons")
      .then((response) => {
        setCoupons(response.data);
      })
      .catch((error) => {
        console.error("Error fetching coupons:", error);
      });
  }, []);

  // Fetch orders data
  useEffect(() => {
    axios
      .get("https://coupon-order-api.onrender.com/orders")
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, []);

  // Function to add a new coupon
  const handleCreateCoupon = async (newCoupon) => {
    try {
      const response = await axios.post(
        "https://coupon-order-api.onrender.com/coupons",
        newCoupon
      );
      setCoupons([...coupons, response.data]);
    } catch (error) {
      console.error("Error creating coupon:", error);
    }
  };

  // Function to place an order
  const handlePlaceOrder = async (newOrder) => {
    try {
      const response = await axios.post(
        "https://coupon-order-api.onrender.com/orders",
        newOrder
      );
      setOrders([...orders, response.data]);
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  // Function to cancel an order
  const handleCancelOrder = async (orderId) => {
    try {
      await axios.put(
        `https://coupon-order-api.onrender.com/orders/${orderId}`,
        {
          status: "CANCELLED",
        }
      );
      const updatedOrders = orders.map((order) =>
        order.id === orderId ? { ...order, status: "CANCELLED" } : order
      );
      setOrders(updatedOrders);
    } catch (error) {
      console.error("Error cancelling order:", error);
    }
  };

  const renderTab = () => {
    switch (activeTab) {
      case "ToCreateCoupon":
        return <ToCreateCoupon onCreateCoupon={handleCreateCoupon} />;
      case "ViewAllCoupons":
        return <ViewAllCoupons coupons={coupons} />;
      case "ToCheckOrderById":
        return <ToCheckOrderById />;
      case "cancelOrder":
        return (
          <CancelOrder orders={orders} onCancelOrder={handleCancelOrder} />
        );
      case "placeOrder":
        return <PlaceOrder onPlaceOrder={handlePlaceOrder} />;
      case "order":
        return <OrderForm onCreateOrder={handlePlaceOrder} />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coupon and Order Management System</h1>
      </header>
      <nav className="App-nav">
        <ul>
          <li onClick={() => setActiveTab("ToCreateCoupon")}>Create Coupon</li>
          <li onClick={() => setActiveTab("ViewAllCoupons")}>View Coupons</li>
          <li onClick={() => setActiveTab("ToCheckOrderById")}>Check Order</li>
          <li onClick={() => setActiveTab("order")}>Order</li>
          <li onClick={() => setActiveTab("cancelOrder")}>Cancel Order</li>
          <li onClick={() => setActiveTab("placeOrder")}>Place Order</li>
        </ul>
      </nav>
      <main className="App-main">{renderTab()}</main>
    </div>
  );
}

export default App;
