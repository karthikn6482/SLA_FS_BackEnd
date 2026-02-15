import express from "express";
import requestRouter from "./routes/requestRoute.js";

const app = express();

app.use(express.json());

app.use("/api/request", requestRouter);

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});
