const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

// Define User Model
const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM("student", "professor"),
    allowNull: false,
  },
});

module.exports = User;
