import express from "express";
import connectDB from "./config/db.js";
import movieRoutes from "./routes/movieRoutes.js";

const app = express();

app.use(express.json());

connectDB();

app.use("/api", movieRoutes);

app.get("/", (req, res) => {
  res.send("🎬 Movie API is Running...");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});