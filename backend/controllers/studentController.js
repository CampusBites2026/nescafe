const Student = require("../models/Student");

/*
|--------------------------------------------------------------------------
| Get All Students
|--------------------------------------------------------------------------
*/

const getStudents = async (req, res) => {
  try {
    const students = await Student.findAll({
      order: [["createdAt", "DESC"]],
    });

    const formattedStudents = students.map(
      (student) => ({
        _id: student.id,
        name: `${student.firstName || ""} ${
          student.lastName || ""
        }`.trim(),
        className: student.className,
        rollNo: student.rollNo,
        email: student.email,
        phone: student.phone,
      })
    );

    return res.status(200).json(
      formattedStudents
    );
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Get Single Student
|--------------------------------------------------------------------------
*/

const getStudent = async (req, res) => {
  try {
    const student = await Student.findByPk(
      req.params.id
    );

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    return res.status(200).json(
      student
    );
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Create Student
|--------------------------------------------------------------------------
*/

const createStudent = async (
  req,
  res
) => {
  try {
    const student =
      await Student.create(req.body);

    return res.status(201).json({
      success: true,
      message:
        "Student added successfully",
      student,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Update Student
|--------------------------------------------------------------------------
*/

const updateStudent = async (
  req,
  res
) => {
  try {
    const student =
      await Student.findByPk(
        req.params.id
      );

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    await student.update(req.body);

    return res.status(200).json({
      success: true,
      message:
        "Student updated successfully",
      student,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Delete Student
|--------------------------------------------------------------------------
*/

const deleteStudent = async (
  req,
  res
) => {
  try {
    const student =
      await Student.findByPk(
        req.params.id
      );

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    await student.destroy();

    return res.status(200).json({
      success: true,
      message:
        "Student deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
};