const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Payroll = sequelize.define(
  "Payroll",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    employeeId: {
      type: DataTypes.UUID,
      allowNull: false,
    },

    employeeName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    designation: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    month: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    basicSalary: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },

    allowances: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0,
    },

    deductions: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0,
    },

    netSalary: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },

    paymentDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
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
    tableName: "payrolls",
    timestamps: true,
  }
);

module.exports = Payroll;