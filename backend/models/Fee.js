const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Fee = sequelize.define(
  "Fee",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue:
        DataTypes.UUIDV4,
      primaryKey: true,
    },

    studentId: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    studentName: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    amount: {
      type: DataTypes.DECIMAL(
        12,
        2
      ),
      allowNull: false,
    },

    paidAmount: {
      type: DataTypes.DECIMAL(
        12,
        2
      ),
      defaultValue: 0,
    },

    dueDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

    term: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    paymentDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },

    paymentMethod: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    receiptNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    status: {
      type: DataTypes.ENUM(
        "Pending",
        "Paid"
      ),
      defaultValue: "Pending",
    },
  },
  {
    tableName: "fees",
    timestamps: true,
  }
);

module.exports = Fee;