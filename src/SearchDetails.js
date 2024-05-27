// SearchDetails.js
import React, { useState } from "react";
import "./App.css";

function SearchDetails({ coupons }) {
  const [couponId, setCouponId] = useState("");
  const [details, setDetails] = useState(null);

  const handleSearch = () => {
    const coupon = coupons.find((coupon) => coupon.id === couponId);
    if (coupon) {
      setDetails({ couponCode: coupon.couponCode, discount: coupon.discount });
    } else {
      setDetails(null);
    }
    setCouponId("");
  };

  return (
    <div>
      <h2>Search Details by Coupon ID</h2>
      <input
        type="text"
        placeholder="Coupon ID"
        value={couponId}
        onChange={(e) => setCouponId(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {details && (
        <div>
          <p>Coupon Code: {details.couponCode}</p>
          <p>Discount: {details.discount}%</p>
        </div>
      )}
    </div>
  );
}

export default SearchDetails;
