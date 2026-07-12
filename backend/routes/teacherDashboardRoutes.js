const express = require("express");

const router = express.Router();

const {
  getTeacherDashboard,
} = require(
  "../controllers/teacherDashboardController"
);

const {
  protect,
} = require("../middleware/authMiddleware");

router.get(
  "/",
  protect,
  getTeacherDashboard
);

module.exports = router;