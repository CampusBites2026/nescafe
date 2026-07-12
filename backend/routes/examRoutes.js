const express = require("express");

const router = express.Router();

const {
  getExams,
  getExamById,
  createExam,
  updateExam,
  deleteExam,
} = require("../controllers/examController");

const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");

/*
|--------------------------------------------------------------------------
| Exam Routes
|--------------------------------------------------------------------------
*/

router.get(
  "/",
  protect,
  getExams
);

router.get(
  "/:id",
  protect,
  getExamById
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

router.put(
  "/:id",
  protect,
  authorize(
    "admin",
    "teacher"
  ),
  updateExam
);

router.delete(
  "/:id",
  protect,
  authorize("admin"),
  deleteExam
);

module.exports = router;