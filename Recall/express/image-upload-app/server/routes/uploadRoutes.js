const express = require("express");
const multer = require("multer");
const Image = require("../models/Image");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage: storage });

router.post("/upload", upload.single("image"), async (req, res) => {

  const newImage = new Image({
    filename: req.file.filename,
    path: req.file.path
  });

  await newImage.save();

  res.json({
    imageUrl: `http://localhost:5000/uploads/${req.file.filename}`
  });
});

module.exports = router;