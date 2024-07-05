const { Order } = require("../models/order");
const express = require("express");
const router = express.Router();

router.get(`/`, async (req, res) => {
  const orderist = await Order.find();

  if (!orderist) {
    res.status(500).json({ success: false });
  }
  res.send(orderList);
});

module.exports = router;
