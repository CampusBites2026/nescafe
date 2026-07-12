const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Class = sequelize.define(
  "Class",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    className: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    section: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    roomNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "classes",
    timestamps: true,
  }
);

module.exports = Class;