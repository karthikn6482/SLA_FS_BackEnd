import express from "express";
import Movie from "../models/movieModel.js";

const router = express.Router();


// CREATE MOVIE  → POST /api/movies

router.post("/movies", async (req, res) => {
  try {
    const { title, director, year, genre } = req.body;

    const newMovie = await Movie.create({
      title,
      director,
      year,
      genre,
    });

    res.status(201).json({
      message: "Movie created successfully",
      data: newMovie,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// GET ALL MOVIES → GET /api/movies

router.get("/movies", async (req, res) => {
  try {
    const movies = await Movie.find();

    res.status(200).json({
      message: "All movies fetched",
      total: movies.length,
      data: movies,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// GET MOVIE BY ID → GET /api/movies/:id

router.get("/movies/:id", async (req, res) => {
  try {
    const movieId = req.params.id;

    const movie = await Movie.findById(movieId);

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.status(200).json({
      message: "Movie fetched successfully",
      data: movie,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;