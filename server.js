// Import required modules
const express = require('express');
const app = express();
const PORT = 3000;

// Static dummy data
const orders = [
  { orderId: 1, customerName: 'John Doe', orderStatus: 'Pending', orderTotal: 250.75 },
  { orderId: 2, customerName: 'Jane Smith', orderStatus: 'Shipped', orderTotal: 150.50 },
  { orderId: 3, customerName: 'Alice Johnson', orderStatus: 'Delivered', orderTotal: 300.40 },
  { orderId: 4, customerName: 'Bob Brown', orderStatus: 'Pending', orderTotal: 425.30 },
  { orderId: 5, customerName: 'Charlie Davis', orderStatus: 'Shipped', orderTotal: 120.00 },
  { orderId: 6, customerName: 'Diana Evans', orderStatus: 'Delivered', orderTotal: 315.60 },
  { orderId: 7, customerName: 'Ethan Wright', orderStatus: 'Pending', orderTotal: 180.25 },
  { orderId: 8, customerName: 'Fiona Adams', orderStatus: 'Shipped', orderTotal: 230.10 },
  { orderId: 9, customerName: 'George Clark', orderStatus: 'Delivered', orderTotal: 310.80 },
  { orderId: 10, customerName: 'Hannah Martin', orderStatus: 'Pending', orderTotal: 195.40 },
  { orderId: 11, customerName: 'Isaac Thomas', orderStatus: 'Shipped', orderTotal: 250.00 },
  { orderId: 12, customerName: 'Jack Wilson', orderStatus: 'Delivered', orderTotal: 220.80 },
  { orderId: 13, customerName: 'Karen Lewis', orderStatus: 'Pending', orderTotal: 175.90 },
  { orderId: 14, customerName: 'Liam Hall', orderStatus: 'Shipped', orderTotal: 290.70 },
  { orderId: 15, customerName: 'Mia Scott', orderStatus: 'Delivered', orderTotal: 200.30 },
];

// Endpoint to get all orders
app.get('/orders', (req, res) => {
  res.json(orders);
});

// Endpoint to get details of a specific order by ID
app.get('/orders/:orderId', (req, res) => {
  const orderId = parseInt(req.params.orderId, 10);
  const order = orders.find(o => o.orderId === orderId);

  if (order) {
    res.json(order);
  } else {
    res.status(404).json({ message: 'Order not found' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
