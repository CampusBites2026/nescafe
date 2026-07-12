const Student = require("../models/Student");
const Attendance = require("../models/Attendance");
const Result = require("../models/Result");

const getParentDashboard =
  async (req, res) => {
    try {
      const students =
        await Student.findAll();

      const attendance =
        await Attendance.findAll({
          limit: 20,
          order: [
            [
              "createdAt",
              "DESC",
            ],
          ],
        });

      const results =
        await Result.findAll({
          limit: 20,
          order: [
            [
              "createdAt",
              "DESC",
            ],
          ],
        });

      return res.status(200).json({
        success: true,
        students,
        attendance,
        results,
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
  getParentDashboard,
};