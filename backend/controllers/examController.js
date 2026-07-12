const Exam = require("../models/Exam");

/*
|--------------------------------------------------------------------------
| Get All Exams
|--------------------------------------------------------------------------
*/

const getExams = async (
  req,
  res
) => {
  try {
    const exams =
      await Exam.findAll({
        order: [["date", "ASC"]],
      });

    const formattedExams =
      exams.map((exam) => ({
        _id: exam.id,
        name: exam.name,
        className:
          exam.className,
        subject:
          exam.subject,
        date: exam.date,
        totalMarks:
          exam.totalMarks,
      }));

    return res
      .status(200)
      .json(formattedExams);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message:
        error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Get Single Exam
|--------------------------------------------------------------------------
*/

const getExamById = async (
  req,
  res
) => {
  try {
    const exam =
      await Exam.findByPk(
        req.params.id
      );

    if (!exam) {
      return res.status(404).json({
        message:
          "Exam not found",
      });
    }

    return res.status(200).json({
      _id: exam.id,
      name: exam.name,
      className:
        exam.className,
      subject:
        exam.subject,
      date: exam.date,
      totalMarks:
        exam.totalMarks,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message:
        error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Create Exam
|--------------------------------------------------------------------------
*/

const createExam = async (
  req,
  res
) => {
  try {
    const {
      name,
      className,
      subject,
      date,
      totalMarks,
    } = req.body;

    if (
      !name ||
      !className ||
      !subject ||
      !date ||
      !totalMarks
    ) {
      return res.status(400).json({
        message:
          "All fields are required",
      });
    }

    const exam =
      await Exam.create({
        name,
        className,
        subject,
        date,
        totalMarks,
      });

    return res.status(201).json({
      message:
        "Exam created successfully",
      exam,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message:
        error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Update Exam
|--------------------------------------------------------------------------
*/

const updateExam =
  async (req, res) => {
    try {
      const exam =
        await Exam.findByPk(
          req.params.id
        );

      if (!exam) {
        return res.status(404).json({
          message:
            "Exam not found",
        });
      }

      await exam.update({
        name:
          req.body.name,
        className:
          req.body.className,
        subject:
          req.body.subject,
        date:
          req.body.date,
        totalMarks:
          req.body.totalMarks,
      });

      return res.status(200).json({
        message:
          "Exam updated successfully",
        exam,
      });
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        message:
          error.message,
      });
    }
  };

/*
|--------------------------------------------------------------------------
| Delete Exam
|--------------------------------------------------------------------------
*/

const deleteExam =
  async (req, res) => {
    try {
      const exam =
        await Exam.findByPk(
          req.params.id
        );

      if (!exam) {
        return res.status(404).json({
          message:
            "Exam not found",
        });
      }

      await exam.destroy();

      return res.status(200).json({
        message:
          "Exam deleted successfully",
      });
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        message:
          error.message,
      });
    }
  };

module.exports = {
  getExams,
  getExamById,
  createExam,
  updateExam,
  deleteExam,
};