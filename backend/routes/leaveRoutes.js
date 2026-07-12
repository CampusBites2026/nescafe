const express = require("express");

const router = express.Router();

const {
  getLeaves,
  getLeaveById,
  createLeave,
  updateLeave,
  deleteLeave,
} = require("../controllers/leaveController");

const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");

router.get("/", protect, getLeaves);

router.get("/:id", protect, getLeaveById);

router.post("/", protect, createLeave);

router.put(
  "/:id",
  protect,
  authorize("admin"),
  updateLeave
);

router.delete(
  "/:id",
  protect,
  authorize("admin"),
  deleteLeave
);

module.exports = router;