const express = require("express");
const router = express.Router();
const logRoute = require("./log");

router.use("/log", logRoute);

module.exports = router;
