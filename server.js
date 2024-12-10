require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");
const User = require("./models/User");
const Video = require("./models/Video");
const app = express();
const Note = require("./models/Note");

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/videos", require("./routes/videos"));
app.use("/api/notes", require("./routes/notes"));

const PORT = process.env.PORT || 5432;

// Sync Database and Start Server

sequelize.sync({ force: true }).then(() => {
console.log("Database Synced!");
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
