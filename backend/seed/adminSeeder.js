const User = require("../models/User");
const School = require("../models/School");

const createAdmin = async () => {
  try {
    const school = await School.findOne({
      where: {
        schoolId: "SCH001",
      },
    });

    if (!school) {
      console.log("Default school not found");
      return;
    }

    const existingAdmin = await User.findOne({
      where: {
        email: "admin@schoolerp.com",
      },
    });

    if (existingAdmin) {
      if (!existingAdmin.schoolUuid) {
        await existingAdmin.update({
          schoolId: school.schoolId,
          schoolUuid: school.id,
        });
      }

      console.log("Admin already exists");
      return;
    }

    await User.create({
      schoolId: school.schoolId,
      schoolUuid: school.id,
      username: "admin",
      firstName: "Super",
      lastName: "Admin",
      email: "admin@schoolerp.com",
      password: "admin123",
      role: "admin",
      status: "active",
    });

    console.log("Default Admin Created Successfully");
  } catch (error) {
    console.error("Admin Seeder Error:", error);
  }
};

module.exports = createAdmin;
