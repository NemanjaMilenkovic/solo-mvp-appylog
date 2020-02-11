const express = require("express");
const router = express.Router();
const db = require("../../db/");

router.get("/", (req, res) => {
  db.select()
    .from("logs")
    .orderBy("id")
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

router.patch("/:id", (req, res) => {
  db.table("logs")
    .where({ id: req.params.id })
    .update(req.body)
    .returning("*")
    .then(data => {
      res.send(data);
    });
});

router.get("/:id", (req, res) => {
  db("logs")
    .where({ id: req.params.id })
    .select()
    .then(data => res.send(data));
});

router.delete("/:id", (req, res) => {
  const toDelete = {};
  db("logs")
    .where({ id: req.params.id })
    .select()
    .then(data => (toDelete.logDeleted = data));

  db("logs")
    .where({ id: req.params.id })
    .del()
    .then(data => {
      toDelete.deleted = true;
      res.send(toDelete);
    });
});

module.exports = router;
