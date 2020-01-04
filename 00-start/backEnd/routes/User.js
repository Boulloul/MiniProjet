const express = require("express");
const router = express.Router();
const User = require("../models/Login");

/**********************************  POST **********************************************/
router.post("/login", async (req, res) => {
  const n = req.body.name;
  const p = req.body.password;
  const result = await User.findOne({ name: n });
  if (!result) return res.send("NotFound");
  if (result.password === p) {
    res.send("WELCOM");
  } else {
    res.send("NotFound");
  }
});

module.exports = router;
