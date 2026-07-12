const Student = require("../models/Student");
const Attendance = require("../models/Attendance");
const Result = require("../models/Result");
const Fee = require("../models/Fee");

const getStudentDashboard =
  async (req, res) => {
    try {
      const studentId =
        req.user.id;

      const student =
        await Student.findByPk(
          studentId
        );

      const attendance =
        await Attendance.findAll({
          where: {
            studentId,
          },
          limit: 10,
          order: [
            [
              "createdAt",
              "DESC",
            ],
          ],
        });

      const results =
        await Result.findAll({
          where: {
            studentId,
          },
          limit: 10,
          order: [
            [
              "createdAt",
              "DESC",
            ],
          ],
        });

      const fees =
        await Fee.findAll({
          where: {
            studentId,
          },
        });

      return res.status(200).json({
        success: true,
        student,
        attendance,
        results,
        fees,
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
  getStudentDashboard,
};