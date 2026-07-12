const Student = require("../models/Student");
const Teacher = require("../models/Teacher");
const Fee = require("../models/Fee");
const Attendance = require("../models/Attendance");

const getSystemReport = async (
  req,
  res
) => {
  try {
    const totalStudents =
      await Student.count();

    const totalTeachers =
      await Teacher.count();

    const totalFees =
      await Fee.sum("amount");

    const collectedFees =
      await Fee.sum(
        "paidAmount"
      );

    const attendanceCount =
      await Attendance.count();

    return res.status(200).json({
      success: true,
      report: {
        totalStudents,
        totalTeachers,
        totalFees:
          totalFees || 0,
        collectedFees:
          collectedFees || 0,
        pendingFees:
          (totalFees || 0) -
          (collectedFees || 0),
        attendanceCount,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message:
        error.message,
    });
  }
};

module.exports = {
  getSystemReport,
};