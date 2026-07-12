const Teacher = require("../models/Teacher");

/*
|--------------------------------------------------------------------------
| Get Teachers
|--------------------------------------------------------------------------
*/

const getTeachers = async (
  req,
  res
) => {
  try {
    const teachers =
      await Teacher.findAll({
        order: [
          ["createdAt", "DESC"],
        ],
      });

    const formattedTeachers =
      teachers.map((teacher) => ({
        _id: teacher.id,
        name: teacher.name,
        department:
          teacher.department,
        email: teacher.email,
        phone: teacher.phone,
      }));

    return res
      .status(200)
      .json(formattedTeachers);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Get Teacher
|--------------------------------------------------------------------------
*/

const getTeacher = async (
  req,
  res
) => {
  try {
    const teacher =
      await Teacher.findByPk(
        req.params.id
      );

    if (!teacher) {
      return res.status(404).json({
        message:
          "Teacher not found",
      });
    }

    return res
      .status(200)
      .json(teacher);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Create Teacher
|--------------------------------------------------------------------------
*/

const createTeacher = async (
  req,
  res
) => {
  try {
    const {
      name,
      email,
      phone,
      department,
      qualification,
      salary,
    } = req.body;

    const teacher =
      await Teacher.create({
        name,
        email,
        phone,
        department,
        qualification,
        salary,
      });

    return res
      .status(201)
      .json(teacher);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Update Teacher
|--------------------------------------------------------------------------
*/

const updateTeacher =
  async (req, res) => {
    try {
      const teacher =
        await Teacher.findByPk(
          req.params.id
        );

      if (!teacher) {
        return res.status(404).json({
          message:
            "Teacher not found",
        });
      }

      await teacher.update({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        department:
          req.body.department,
        qualification:
          req.body.qualification,
        salary:
          req.body.salary,
      });

      return res
        .status(200)
        .json(teacher);
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  };

/*
|--------------------------------------------------------------------------
| Delete Teacher
|--------------------------------------------------------------------------
*/

const deleteTeacher =
  async (req, res) => {
    try {
      const teacher =
        await Teacher.findByPk(
          req.params.id
        );

      if (!teacher) {
        return res.status(404).json({
          message:
            "Teacher not found",
        });
      }

      await teacher.destroy();

      return res.status(200).json({
        message:
          "Teacher deleted successfully",
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  };

module.exports = {
  getTeachers,
  getTeacher,
  createTeacher,
  updateTeacher,
  deleteTeacher,
};