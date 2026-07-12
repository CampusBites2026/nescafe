const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Complaint = sequelize.define(
  "Complaint",
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
    },

    subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    status: {
      type: DataTypes.ENUM(
        "Pending",
        "In Progress",
        "Resolved"
      ),
      defaultValue: "Pending",
    },
  },
  {
    tableName: "complaints",
    timestamps: true,
  }
);

module.exports = Complaint;