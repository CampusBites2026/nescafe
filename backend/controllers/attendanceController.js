const Attendance = require("../models/Attendance");
const Student = require("../models/Student");

/*
|--------------------------------------------------------------------------
| Get Attendance
|--------------------------------------------------------------------------
*/

const getAttendance = async (
  req,
  res
) => {
  try {
    const records =
      await Attendance.findAll({
        order: [["date", "DESC"]],
      });

    const formattedRecords =
      records.map((record) => ({
        _id: record.id,

        student: {
          name:
            record.studentName ||
            "Unknown Student",
        },

        className:
          record.className,

        date: record.date,

        status:
          record.status,
      }));

    return res
      .status(200)
      .json(formattedRecords);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Get Single Attendance
|--------------------------------------------------------------------------
*/

const getAttendanceById =
  async (req, res) => {
    try {
      const attendance =
        await Attendance.findByPk(
          req.params.id
        );

      if (!attendance) {
        return res.status(404).json({
          message:
            "Attendance not found",
        });
      }

      return res.status(200).json({
        _id: attendance.id,

        studentId:
          attendance.studentId,

        student: {
          name:
            attendance.studentName,
        },

        className:
          attendance.className,

        date:
          attendance.date,

        status:
          attendance.status,
      });
    } catch (error) {
      return res.status(500).json({
        message:
          error.message,
      });
    }
  };

/*
|--------------------------------------------------------------------------
| Mark Attendance
|--------------------------------------------------------------------------
*/

const markAttendance =
  async (req, res) => {
    try {
      const {
        studentId,
        className,
        date,
        status,
      } = req.body;

      if (
        !studentId ||
        !className ||
        !date ||
        !status
      ) {
        return res.status(400).json({
          message:
            "All fields are required",
        });
      }

      const student =
        await Student.findByPk(
          studentId
        );

      const attendance =
        await Attendance.create({
          studentId,

          studentName:
            student?.name ||
            "Unknown Student",

          className,

          date,

          status,
        });

      return res.status(201).json({
        message:
          "Attendance marked successfully",
        attendance,
      });
    } catch (error) {
      return res.status(500).json({
        message:
          error.message,
      });
    }
  };

/*
|--------------------------------------------------------------------------
| Update Attendance
|--------------------------------------------------------------------------
*/

const updateAttendance =
  async (req, res) => {
    try {
      const attendance =
        await Attendance.findByPk(
          req.params.id
        );

      if (!attendance) {
        return res.status(404).json({
          message:
            "Attendance not found",
        });
      }

      await attendance.update(
        req.body
      );

      return res.status(200).json({
        message:
          "Attendance updated successfully",
        attendance,
      });
    } catch (error) {
      return res.status(500).json({
        message:
          error.message,
      });
    }
  };

/*
|--------------------------------------------------------------------------
| Delete Attendance
|--------------------------------------------------------------------------
*/

const deleteAttendance =
  async (req, res) => {
    try {
      const attendance =
        await Attendance.findByPk(
          req.params.id
        );

      if (!attendance) {
        return res.status(404).json({
          message:
            "Attendance not found",
        });
      }

      await attendance.destroy();

      return res.status(200).json({
        message:
          "Attendance deleted successfully",
      });
    } catch (error) {
      return res.status(500).json({
        message:
          error.message,
      });
    }
  };

module.exports = {
  getAttendance,
  getAttendanceById,
  markAttendance,
  updateAttendance,
  deleteAttendance,
};