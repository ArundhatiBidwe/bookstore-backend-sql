require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database.js");
const User = require("./models/User.js");
const Video = require("./models/Video.js");
const app = express();
const Note = require("./models/Note.js");

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/auth", require("./routes/auth.js"));
app.use("/api/videos", require("./routes/videos.js"));
app.use("/api/notes", require("./routes/notes.js"));
app.use("/api/books", require("./routes/books.js"));
const PORT = process.env.PORT || 4000;

// Sync Database and Start Server

sequelize.sync({ force: true }).then(() => {
console.log("Database Synced!");
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
