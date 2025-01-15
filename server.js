// Import required modules
const express = require('express');
const app = express();
const PORT = 3000;

// Generate dummy data
const orders = Array.from({ length: 10 }, (_, i) => ({
  orderId: i + 1,
  customerName: `Customer ${i + 1}`,
  orderStatus: ['Pending', 'Shipped', 'Delivered'][Math.floor(Math.random() * 3)],
  orderTotal: (Math.random() * 500).toFixed(2),
}));

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
