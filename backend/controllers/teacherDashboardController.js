const Teacher = require("../models/Teacher");
const Attendance = require("../models/Attendance");
const Exam = require("../models/Exam");

const getTeacherDashboard =
  async (req, res) => {
    try {
      const teacherId =
        req.user.id;

      const teacher =
        await Teacher.findByPk(
          teacherId
        );

      const attendanceCount =
        await Attendance.count();

      const exams =
        await Exam.findAll({
          limit: 10,
          order: [
            [
              "createdAt",
              "DESC",
            ],
          ],
        });

      return res.status(200).json({
        success: true,
        teacher,
        attendanceCount,
        exams,
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
  getTeacherDashboard,
};