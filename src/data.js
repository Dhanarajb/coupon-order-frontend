const data = {
  coupons: [
    { couponId: 1, couponCode: "SAVE20", discount: 20 },
    { couponId: 2, couponCode: "SPEAKER10", discount: 10 },
    { couponId: 3, couponCode: "SMART5", discount: 5 },
  ],
  orders: [
    {
      id: 1,
      item: "Wireless Headphones",
      price: 100,
      status: "CONFIRMED",
      couponId: 1,
    },
    {
      id: 2,
      item: "Bluetooth Speaker",
      price: 50,
      status: "DELIVERED",
      couponId: null,
    },
    { id: 3, item: "Smartwatch", price: 200, status: "CANCELLED", couponId: 2 },
  ],
};

console.log(data);
