import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css"; // Import the CSS file for styling

function ViewAllCoupons() {
  const [coupons, setCoupons] = useState([]);

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

  return (
    <div className="coupon-container">
      <h2>View All Coupons</h2>
      <table className="coupon-table">
        <thead>
          <tr>
            <th>Coupon ID</th>
            <th>Coupon Code</th>
            <th>Discount (%)</th>
          </tr>
        </thead>
        <tbody>
          {coupons.map((coupon) => (
            <tr key={coupon.couponId}>
              <td>{coupon.couponId}</td>
              <td>{coupon.couponCode}</td>
              <td>{coupon.discount}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewAllCoupons;
