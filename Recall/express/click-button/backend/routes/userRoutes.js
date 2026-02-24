const express = require("express");
const router = express.Router();

router.post("/send-data", (req, res) => {
  console.log("Data received from Frontend:", req.body);

  const { name, email } = req.body;

  const responseData = {
    message: "Data received successfully!",
    userName: name,
    userEmail: email,
    status: "Success"
  };

  res.status(200).json(responseData);
});

module.exports = router;