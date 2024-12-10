const express = require("express");
const Book = require("../models/Book");

const router = express.Router();

// Get All Books
router.get("/", async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

// Add New Book
router.post("/", async (req, res) => {
  const { title, author, price, description } = req.body;

  try {
    const newBook = await Book.create({ title, author, price, description });
    res.json(newBook);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;
