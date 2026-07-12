const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Result = sequelize.define(
  "Result",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    studentId: {
      type: DataTypes.UUID,
      allowNull: false,
    },

    admissionNo: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    studentName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    className: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    examName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    marksObtained: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    totalMarks: {
      type: DataTypes.INTEGER,
      defaultValue: 100,
    },

    grade: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    remarks: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "results",
    timestamps: true,
  }
);

module.exports = Result;