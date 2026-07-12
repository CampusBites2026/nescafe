const express = require("express");

const router = express.Router();

const {
  getAttendance,
  getAttendanceById,
  markAttendance,
  updateAttendance,
  deleteAttendance,
} = require("../controllers/attendanceController");

const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");

/*
|--------------------------------------------------------------------------
| Attendance Routes
|--------------------------------------------------------------------------
*/

/**
 * GET /attendance
 * Get all attendance records
 */
router.get(
  "/",
  protect,
  getAttendance
);

/**
 * GET /attendance/:id
 * Get single attendance record
 */
router.get(
  "/:id",
  protect,
  getAttendanceById
);

/**
 * POST /attendance
 * Mark attendance
 * Admin & Teacher only
 */
router.post(
  "/",
  protect,
  authorize(
    "admin",
    "teacher"
  ),
  markAttendance
);

/**
 * PUT /attendance/:id
 * Update attendance
 * Admin & Teacher only
 */
router.put(
  "/:id",
  protect,
  authorize(
    "admin",
    "teacher"
  ),
  updateAttendance
);

/**
 * DELETE /attendance/:id
 * Delete attendance
 * Admin only
 */
router.delete(
  "/:id",
  protect,
  authorize("admin"),
  deleteAttendance
);

module.exports = router;