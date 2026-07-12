const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const IssuedBook = sequelize.define(
  "IssuedBook",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue:
        DataTypes.UUIDV4,
      primaryKey: true,
    },

    studentName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    bookName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    issueDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

    returnDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

    status: {
      type: DataTypes.ENUM(
        "Issued",
        "Returned"
      ),
      defaultValue: "Issued",
    },
  },
  {
    tableName: "issued_books",
    timestamps: true,
  }
);

module.exports = IssuedBook;