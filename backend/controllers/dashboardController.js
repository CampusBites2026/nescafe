const Student = require("../models/Student");
const Teacher = require("../models/Teacher");
const Fee = require("../models/Fee");
const Book = require("../models/Book");

const getDashboardStats = async (req, res) => {
  try {
    const totalStudents =
      await Student.count();

    const totalTeachers =
      await Teacher.count();

    const totalBooks =
      await Book.count();

    const totalFees =
      await Fee.sum("amount");

    const collectedFees =
      await Fee.sum("paidAmount");

    const pendingFees =
      (totalFees || 0) -
      (collectedFees || 0);

    return res.status(200).json({
      success: true,
      stats: {
        totalStudents,
        totalTeachers,
        totalBooks,
        totalFees:
          totalFees || 0,
        collectedFees:
          collectedFees || 0,
        pendingFees,
      },
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getDashboardStats,
};