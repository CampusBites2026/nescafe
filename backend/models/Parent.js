const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Parent = sequelize.define(
  "Parent",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    fatherName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    motherName: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    address: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "parents",
    timestamps: true,
  }
);

module.exports = Parent;