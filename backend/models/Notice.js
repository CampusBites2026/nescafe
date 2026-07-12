const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Notice = sequelize.define(
  "Notice",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue:
        DataTypes.UUIDV4,
      primaryKey: true,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    audience: {
      type: DataTypes.ENUM(
        "ALL",
        "STUDENTS",
        "TEACHERS",
        "PARENTS"
      ),
      defaultValue: "ALL",
    },
  },
  {
    tableName: "notices",
    timestamps: true,
  }
);

module.exports = Notice;