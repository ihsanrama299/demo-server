const express = require("express");
const router = express.Router();

//model
const Movie = require("../Movie");

router.get("/", async (req, res) => {
  try {
    const data = await Movie.find().limit(5);

    if (data) {
      res.json(data);
    }
  } catch (error) {
    res.status(400).json({ msg: "failed" });
  }
});

module.exports = router;
