const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Hostel = sequelize.define(
  "Hostel",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue:
        DataTypes.UUIDV4,
      primaryKey: true,
    },

    hostelName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    roomNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    studentId: {
      type: DataTypes.UUID,
      allowNull: false,
    },

    studentName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    bedNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    monthlyFee: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0,
    },

    status: {
      type: DataTypes.ENUM(
        "Occupied",
        "Vacant"
      ),
      defaultValue: "Occupied",
    },
  },
  {
    tableName: "hostels",
    timestamps: true,
  }
);

module.exports = Hostel;