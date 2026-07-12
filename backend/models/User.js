const { DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");
const { sequelize } = require("../config/database");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    schoolId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "schools",
        key: "id",
      },
    },

    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    role: {
      type: DataTypes.ENUM(
        "superadmin",
        "admin",
        "teacher",
        "student",
        "parent"
      ),
      defaultValue: "student",
    },

    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    profileImage: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    status: {
      type: DataTypes.ENUM(
        "active",
        "inactive",
        "suspended"
      ),
      defaultValue: "active",
    },
  },
  {
    tableName: "users",
    timestamps: true,
    indexes: [
      {
        unique: true,
        fields: ["schoolId", "email"],
      },
      {
        unique: true,
        fields: ["schoolId", "username"],
      },
    ],
    hooks: {
      beforeCreate: async (user) => {
        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(
          user.password,
          salt
        );
      },

      beforeUpdate: async (user) => {
        if (user.changed("password")) {
          const salt = await bcrypt.genSalt(10);

          user.password = await bcrypt.hash(
            user.password,
            salt
          );
        }
      },
    },
  }
);

/*
|--------------------------------------------------------------------------
| Compare Password
|--------------------------------------------------------------------------
*/

User.prototype.matchPassword = async function (
  enteredPassword
) {
  return await bcrypt.compare(
    enteredPassword,
    this.password
  );
};

module.exports = User;
