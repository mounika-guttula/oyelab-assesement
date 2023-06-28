const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Customer = require("../models/customer");

router.use((req, res, next) => {
  if (!req.body.phone || !req.body.name) {
    return res.status(400).send("Please provide a phone number and name");
  }

  next();
});

router.post("/", async (req, res) => {
  const customer = new Customer({
    phone: req.body.phone,
    name: req.body.name,
  });

  try {
    await customer.save();

    res.status(200).send("Customer added successfully");
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
