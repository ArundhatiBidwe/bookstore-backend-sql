const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Video = sequelize.define("Video", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Video;
