// Import Sequelize and Database Config
const { Sequelize, DataTypes } = require("sequelize");
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

// Define Book Model
const Book = sequelize.define("Book", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
});

// Establish Relationships
User.hasMany(Book, { foreignKey: "userId" });
Book.belongsTo(User, { foreignKey: "userId" });

// Export Models
module.exports = {
  User,
  Book,
  sequelize,
};
