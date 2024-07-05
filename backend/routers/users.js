const { User } = require("../models/user");
const express = require("express");
const router = express.Router();

router.get(`/`, async (req, res) => {
  const userist = await User.find();

  if (!userist) {
    res.status(500).json({ success: false });
  }
  res.send(userList);
});

module.exports = router;
