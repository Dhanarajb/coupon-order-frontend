import React, { useState, useEffect } from "react";
import axios from "axios";
import data from "./data"; // Import your data.js file

function MyComponent() {
  const [fetchedData, setFetchedData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulating an Axios call by setting state after a timeout
    setTimeout(() => {
      try {
        // Assuming 'data' is already available from import
        setFetchedData(data);
      } catch (error) {
        setError(error);
      }
    }, 1000); // Simulate async delay for fetching data
  }, []); // Empty dependency array means this effect runs only once after the component mounts

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!fetchedData) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h1>Data:</h1>
        <table>
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
            {fetchedData.orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.item}</td>
                <td>{order.price}</td>
                <td>{order.status}</td>
                {/* Find coupon code and discount based on order's couponId */}
                {order.couponId !== null ? (
                  <td>
                    {
                      fetchedData.coupons.find(
                        (coupon) => coupon.couponId === order.couponId
                      ).couponCode
                    }
                  </td>
                ) : (
                  <td>No Coupon</td>
                )}
                {order.couponId !== null ? (
                  <td>
                    {
                      fetchedData.coupons.find(
                        (coupon) => coupon.couponId === order.couponId
                      ).discount
                    }
                  </td>
                ) : (
                  <td>No Discount</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MyComponent;
