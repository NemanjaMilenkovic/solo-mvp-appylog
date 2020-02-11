const express = require("express");
const router = express.Router();
const db = require("../../db/");

router.get("/", function(req, res) {
  db.select()
    .from("logs")
    .then(data => res.send(data));
});

module.exports = router;
