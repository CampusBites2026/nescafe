const School = require("../models/School");

const createSchool = async () => {
  try {
    const existingSchool = await School.findOne({
      where: {
        schoolId: "SCH001",
      },
    });

    if (existingSchool) {
      console.log("✅ Default School already exists");
      return;
    }

    await School.create({
      schoolId: "SCH001",
      schoolName: "Campus Public School",
      schoolCode: "CPS001",

      email: "info@campuspublicschool.com",
      phone: "9876543210",

      alternatePhone: "",

      website: "https://campuspublicschool.com",

      addressLine1: "Main Campus Road",
      addressLine2: "",

      city: "Lucknow",
      state: "Uttar Pradesh",
      country: "India",
      pincode: "226001",

      principalName: "Dr. Rajesh Sharma",

      boardType: "CBSE",

      establishedYear: 2020,

      academicYear: "2026-2027",

      timezone: "Asia/Kolkata",

      currency: "INR",

      language: "English",

      totalStudents: 0,
      totalTeachers: 0,

      subscriptionPlan: "ENTERPRISE",

      subscriptionStart: new Date(),

      subscriptionEnd: new Date(
        new Date().setFullYear(
          new Date().getFullYear() + 1
        )
      ),

      isActive: true,
    });

    console.log("✅ Default School Created");
  } catch (error) {
    console.error(
      "❌ School Seeder Error:",
      error
    );
  }
};

module.exports = createSchool;