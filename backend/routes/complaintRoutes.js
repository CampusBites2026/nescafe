const express = require("express");

const router = express.Router();

const {
  getComplaints,
  getComplaintById,
  createComplaint,
  updateComplaint,
  deleteComplaint,
} = require("../controllers/complaintController");

const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");

/*
|--------------------------------------------------------------------------
| Complaint Routes
|--------------------------------------------------------------------------
*/

router.get(
  "/",
  protect,
  getComplaints
);

router.get(
  "/:id",
  protect,
  getComplaintById
);

router.post(
  "/",
  protect,
  createComplaint
);

router.put(
  "/:id",
  protect,
  authorize("admin"),
  updateComplaint
);

router.delete(
  "/:id",
  protect,
  authorize("admin"),
  deleteComplaint
);

module.exports = router;