const User = require("../models/User");
const School = require("../models/School");
const generateToken = require("../utils/generateToken");

const buildUserResponse = (user, school) => ({
  id: user.id,
  userId: user.id,
  schoolId: school.id,
  schoolCode: school.schoolId,
  schoolSystemCode: school.schoolCode,
  schoolName: school.schoolName,
  email: user.email,
  role: user.role,
  firstName: user.firstName,
  lastName: user.lastName,
  phone: user.phone,
  status: user.status,
});

/*
|--------------------------------------------------------------------------
| Create User
|--------------------------------------------------------------------------
*/

const createUser = async (req, res) => {
  try {
    const {
      schoolId,
      username,
      firstName,
      lastName,
      email,
      password,
      role,
      phone,
    } = req.body;

    if (
      !firstName ||
      !email ||
      !password
    ) {
      return res.status(400).json({
        success: false,
        message:
          "First name, email and password are required",
      });
    }

    let school = req.school;

    if (req.user.role === "superadmin") {
      if (!schoolId) {
        return res.status(400).json({
          success: false,
          message:
            "School ID is required",
        });
      }

      school = await School.findOne({
        where: { schoolId },
      });
    }

    if (!school) {
      return res.status(404).json({
        success: false,
        message: "School not found",
      });
    }

    if (!school.isActive) {
      return res.status(403).json({
        success: false,
        message: "School is inactive",
      });
    }

    const requestedRole =
      role || "student";

    if (
      req.user.role !== "superadmin" &&
      requestedRole === "superadmin"
    ) {
      return res.status(403).json({
        success: false,
        message:
          "Only super admin can create super admin users",
      });
    }

    const loginUsername =
      username ||
      email.split("@")[0];

    const existingUser =
      await User.findOne({
        where: {
          schoolUuid: school.id,
          email,
        },
      });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message:
          "User already exists",
      });
    }

    const user =
      await User.create({
        schoolId: school.schoolId,
        schoolUuid: school.id,
        username: loginUsername,
        firstName,
        lastName,
        email,
        password,
        phone,
        role: requestedRole,
      });

    return res.status(201).json({
      success: true,
      message:
        "User created successfully",
      user: buildUserResponse(
        user,
        school
      ),
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Login User
|--------------------------------------------------------------------------
*/

const login = async (req, res) => {
  try {
    const {
      schoolId,
      email,
      password,
    } = req.body;

    if (
      !schoolId ||
      !email ||
      !password
    ) {
      return res.status(400).json({
        success: false,
        message:
          "School ID, Email and Password are required",
      });
    }

    const school =
      await School.findOne({
        where: {
          schoolId,
        },
      });

    if (!school) {
      return res.status(401).json({
        success: false,
        message:
          "Invalid Credentials",
      });
    }

    if (!school.isActive) {
      return res.status(403).json({
        success: false,
        message:
          "School account is inactive",
      });
    }

    let user =
      await User.findOne({
        where: {
          schoolUuid: school.id,
          email,
        },
      });

    if (!user) {
      user = await User.findOne({
        where: {
          schoolId: school.schoolId,
          email,
        },
      });
    }

    if (!user) {
      return res.status(401).json({
        success: false,
        message:
          "Invalid Credentials",
      });
    }

    if (user.status !== "active") {
      return res.status(403).json({
        success: false,
        message:
          "User account is not active",
      });
    }

    const isMatch =
      await user.matchPassword(
        password
      );

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message:
          "Invalid Credentials",
      });
    }

    if (user.schoolUuid !== school.id) {
      await user.update({
        schoolId: school.schoolId,
        schoolUuid: school.id,
      });
    }

    const token =
      generateToken(user, school);

    return res.status(200).json({
      success: true,
      token,
      user: buildUserResponse(
        user,
        school
      ),
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Get Current User
|--------------------------------------------------------------------------
*/

const getMe = async (req, res) => {
  try {
    const user =
      await User.findByPk(
        req.user.id,
        {
          attributes: {
            exclude: ["password"],
          },
        }
      );

    return res.status(200).json({
      success: true,
      user: buildUserResponse(
        user,
        req.school
      ),
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Logout
|--------------------------------------------------------------------------
*/

const logout = async (req, res) => {
  return res.status(200).json({
    success: true,
    message:
      "Logged out successfully",
  });
};

module.exports = {
  createUser,
  login,
  getMe,
  logout,
};
