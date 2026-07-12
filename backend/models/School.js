const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const School = sequelize.define(
  "School",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    schoolId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    schoolName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    schoolCode: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    alternatePhone: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    website: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    addressLine1: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    addressLine2: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    country: {
      type: DataTypes.STRING,
      defaultValue: "India",
    },

    pincode: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    principalName: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    logo: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    favicon: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    boardType: {
      type: DataTypes.ENUM(
        "CBSE",
        "ICSE",
        "STATE",
        "IB",
        "IGCSE"
      ),
      defaultValue: "CBSE",
    },

    establishedYear: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    totalStudents: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },

    totalTeachers: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },

    subscriptionPlan: {
      type: DataTypes.ENUM(
        "FREE",
        "BASIC",
        "PRO",
        "ENTERPRISE"
      ),
      defaultValue: "ENTERPRISE",
    },

    subscriptionStart: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    subscriptionEnd: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    academicYear: {
      type: DataTypes.STRING,
      defaultValue: "2026-2027",
    },

    timezone: {
      type: DataTypes.STRING,
      defaultValue: "Asia/Kolkata",
    },

    currency: {
      type: DataTypes.STRING,
      defaultValue: "INR",
    },

    language: {
      type: DataTypes.STRING,
      defaultValue: "English",
    },

    paytmMerchant: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    smtpHost: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    smtpPort: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    smtpEmail: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    smtpPassword: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    whatsappApiKey: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    smsApiKey: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    tableName: "schools",
    timestamps: true,
  }
);

module.exports = School;
