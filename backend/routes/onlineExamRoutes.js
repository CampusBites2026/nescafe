const express = require("express");

const router = express.Router();

const {
  getExams,
  getExam,
  createExam,
  addQuestion,
  getQuestions,
} = require("../controllers/onlineExamController");

const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");

router.get(
  "/",
  protect,
  getExams
);

router.get(
  "/:id",
  protect,
  getExam
);

router.post(
  "/",
  protect,
  authorize(
    "admin",
    "teacher"
  ),
  createExam
);

router.post(
  "/question",
  protect,
  authorize(
    "admin",
    "teacher"
  ),
  addQuestion
);

router.get(
  "/questions/:examId",
  protect,
  getQuestions
);

module.exports = router;