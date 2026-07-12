const jwt = require("jsonwebtoken");

const generateToken = (user, school) => {
  return jwt.sign(
    {
      userId: user.id,
      schoolId: school?.id || user.schoolId,
      schoolCode:
        school?.schoolId || user.schoolId,
      schoolPublicId:
        school?.schoolId || user.schoolId,
      schoolSystemCode:
        school?.schoolCode,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
};

module.exports = generateToken;
