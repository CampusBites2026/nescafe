const OnlineExam = require("../models/OnlineExam");
const Question = require("../models/Question");

const getExams = async (
  req,
  res
) => {
  try {
    const exams =
      await OnlineExam.findAll({
        order: [
          ["createdAt", "DESC"],
        ],
      });

    return res.status(200).json(
      exams
    );
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getExam = async (
  req,
  res
) => {
  try {
    const exam =
      await OnlineExam.findByPk(
        req.params.id
      );

    if (!exam) {
      return res.status(404).json({
        message:
          "Exam not found",
      });
    }

    return res.status(200).json(
      exam
    );
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const createExam =
  async (req, res) => {
    try {
      const exam =
        await OnlineExam.create(
          req.body
        );

      return res.status(201).json({
        success: true,
        message:
          "Online exam created successfully",
        exam,
      });
    } catch (error) {
      return res.status(500).json({
        message:
          error.message,
      });
    }
  };

const addQuestion =
  async (req, res) => {
    try {
      const question =
        await Question.create(
          req.body
        );

      return res.status(201).json({
        success: true,
        message:
          "Question added successfully",
        question,
      });
    } catch (error) {
      return res.status(500).json({
        message:
          error.message,
      });
    }
  };

const getQuestions =
  async (req, res) => {
    try {
      const questions =
        await Question.findAll({
          where: {
            examId:
              req.params.examId,
          },
        });

      return res.status(200).json(
        questions
      );
    } catch (error) {
      return res.status(500).json({
        message:
          error.message,
      });
    }
  };

module.exports = {
  getExams,
  getExam,
  createExam,
  addQuestion,
  getQuestions,
};