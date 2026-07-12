const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Question = sequelize.define(
  "Question",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue:
        DataTypes.UUIDV4,
      primaryKey: true,
    },

    examId: {
      type: DataTypes.UUID,
      allowNull: false,
    },

    question: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    optionA: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    optionB: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    optionC: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    optionD: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    correctAnswer: {
      type: DataTypes.ENUM(
        "A",
        "B",
        "C",
        "D"
      ),
      allowNull: false,
    },

    marks: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
  },
  {
    tableName: "questions",
    timestamps: true,
  }
);

module.exports = Question;