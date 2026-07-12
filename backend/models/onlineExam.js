const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const OnlineExam = sequelize.define(
  "OnlineExam",
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

    className: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    totalMarks: {
      type: DataTypes.INTEGER,
      defaultValue: 100,
    },

    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    status: {
      type: DataTypes.ENUM(
        "Draft",
        "Published",
        "Closed"
      ),
      defaultValue: "Draft",
    },
  },
  {
    tableName: "online_exams",
    timestamps: true,
  }
);

module.exports = OnlineExam;