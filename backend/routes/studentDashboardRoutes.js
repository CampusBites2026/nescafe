const express = require("express");

const router = express.Router();

const {
  getStudentDashboard,
} = require(
  "../controllers/studentDashboardController"
);

const {
  protect,
} = require("../middleware/authMiddleware");

router.get(
  "/",
  protect,
  getStudentDashboard
);

module.exports = router;