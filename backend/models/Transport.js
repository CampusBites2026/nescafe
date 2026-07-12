const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Transport = sequelize.define(
  "Transport",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    routeName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    vehicleNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    driverName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    driverPhone: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    fee: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0,
    },

    status: {
      type: DataTypes.ENUM(
        "Active",
        "Inactive",
        "Maintenance"
      ),
      defaultValue: "Active",
    },
  },
  {
    tableName: "transport",
    timestamps: true,
  }
);

module.exports = Transport;