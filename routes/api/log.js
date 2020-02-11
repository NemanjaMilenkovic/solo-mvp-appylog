const express = require("express");
const router = express.Router();
const db = require("../../db/");

router.get("/", (req, res) => {
  db.select()
    .from("logs")
    .then(data => res.send(data));
});

router.post("/", (req, res) => {
  db.insert(req.body)
    .returning("*")
    .into("logs")
    .then(data => {
      res.send(data);
    });
});

module.exports = router;
