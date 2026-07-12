const jwt = require("jsonwebtoken");
const User = require("../models/User");
const School = require("../models/School");

/*
|--------------------------------------------------------------------------
| Protect Route
|--------------------------------------------------------------------------
*/

const protect = async (req, res, next) => {
  try {
    let token = null;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token =
        req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not authorized",
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    const user = await User.findByPk(
      decoded.userId || decoded.id,
      {
        attributes: {
          exclude: ["password"],
        },
        include: [
          {
            model: School,
            as: "school",
          },
        ],
      }
    );

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    if (user.status !== "active") {
      return res.status(403).json({
        success: false,
        message:
          "User account is not active",
      });
    }

    let school = user.school;

    if (!school) {
      school = await School.findOne({
        where: {
          schoolId:
            decoded.schoolCode ||
            user.schoolId,
        },
      });
    }

    if (!school) {
      return res.status(401).json({
        success: false,
        message: "School not found",
      });
    }

    if (!school.isActive) {
      return res.status(403).json({
        success: false,
        message:
          "School account is inactive",
      });
    }

    req.user = user;
    req.school = school;
    req.tenant = {
      schoolId: school.id,
      schoolCode: school.schoolId,
      schoolSystemCode:
        school.schoolCode,
    };

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Role Authorization
|--------------------------------------------------------------------------
*/

const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message:
          "You do not have permission to access this resource",
      });
    }

    next();
  };
};

module.exports = {
  protect,
  authorize,
};
