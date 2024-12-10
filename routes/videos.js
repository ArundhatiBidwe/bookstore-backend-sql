const express = require("express");
const Video = require("../models/Video");

const router = express.Router();

// Get All Videos
router.get("/", async (req, res) => {
  try {
    const videos = await Video.findAll();
    res.json(videos);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

// Upload New Video
router.post("/", async (req, res) => {
  const { title, description, url } = req.body;

  try {
    const newVideo = await Video.create({ title, description, url });
    res.json(newVideo);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;
