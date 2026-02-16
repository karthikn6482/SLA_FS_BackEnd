import express from "express";

const app = express();
const PORT = 5000;

app.use(express.json());

//  1 GET Route - Return JSON with Status 200

app.get("/api/get-data", (req, res) => {
  res.status(200).json({
    success: true,
    message: "GET request successful",
    data: {
      name: "Karthikeyan",
      course: "Full Stack Development"
    }
  });
});

// 2 POST Route - Read Body & Send Back

app.post("/api/post-data", (req, res) => {
  const receivedData = req.body;

  res.status(200).json({
    success: true,
    message: "POST request successful",
    yourData: receivedData
  });
});

// 3 Route with Custom Header

app.get("/api/custom-header", (req, res) => {
  res.set("X-Custom-Header", "SLA-Backend-Class");

  res.status(200).json({
    success: true,
    message: "Custom header sent successfully"
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

// Extract Task

// 1 Basic Success Response Task

app.get("/success", (req, res) => {
  res.status(200).send("Operation Successful");
});

// 2 JSON Response Task

app.get("/profile", (req, res) => {
  res.status(200).json({
    name: "Karthikeyan",
    role: "Full Stack Developer",
    experience: "1 Year"
  });
});

// 3 Create Route with 201 Status

app.use(express.json());

app.post("/create-user", (req, res) => {
  console.log(req.body);

  res.status(201).json({
    message: "User Created Successfully",
    data: req.body
  });
});

// 4 Error Handling Task

app.get("/error", (req, res) => {
  res.status(500).json({
    error: "Internal Server Error"
  });
});

// 5 Custom Header Task

app.get("/headers", (req, res) => {
  res.set("App-Name", "MyExpressApp");

  res.status(200).send("Header Sent Successfully");
});

// 6 Conditional Status Code Task

   app.get("/check", (req, res) => {
  const { role } = req.query;

  if (role === "admin") {
    res.status(200).send("Access Granted");
  } else {
    res.status(403).send("Access Denied");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
