const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const obj = {
    a: "Qasim",
    number: 30,
  };
  res.json(obj);
});

module.exports = router;
