const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  const user = req.user;
  res.json(user);
  //   res.json([
  //     {
  //       id: 1,
  //       name: "Silva",
  //       age: 14,
  //     },
  //     {
  //       id: 2,
  //       name: "Saman",
  //       age: 13,
  //     },
  //   ]);
});

module.exports = router;
