const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const LibraryBook = sequelize.define(
  "LibraryBook",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    bookCode: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    publisher: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    category: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },

    availableQuantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },

    shelfNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    isbn: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    status: {
      type: DataTypes.ENUM(
        "Available",
        "Out Of Stock"
      ),
      defaultValue: "Available",
    },
  },
  {
    tableName: "library_books",
    timestamps: true,
  }
);

module.exports = LibraryBook;