const express = require("express");
const Note = require("../models/Note");

const router = express.Router();

// Get All Notes
router.get("/", async (req, res) => {
  try {
    const notes = await Note.findAll();
    res.json(notes);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

// Add Notes for Students
router.put("/add-notes/:id", async (req, res) => {
  const { studentNotes } = req.body;

  try {
    const note = await Note.findByPk(req.params.id);

    if (!note) return res.status(404).send("Note Not Found");

    note.studentNotes = studentNotes;
    await note.save();

    res.json({ message: "Notes saved successfully!", note });
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;
