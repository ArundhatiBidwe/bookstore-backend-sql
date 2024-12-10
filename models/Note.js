const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Note = sequelize.define("Note", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fileUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  uploadedBy: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Note;
