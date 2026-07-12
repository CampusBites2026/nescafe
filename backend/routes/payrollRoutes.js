const express = require("express");

const router = express.Router();

const {
  getPayrolls,
  getPayroll,
  createPayroll,
  markSalaryPaid,
  deletePayroll,
} = require("../controllers/payrollController");

const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");

router.get(
  "/",
  protect,
  authorize("admin"),
  getPayrolls
);

router.get(
  "/:id",
  protect,
  authorize("admin"),
  getPayroll
);

router.post(
  "/",
  protect,
  authorize("admin"),
  createPayroll
);

router.put(
  "/paid/:id",
  protect,
  authorize("admin"),
  markSalaryPaid
);

router.delete(
  "/:id",
  protect,
  authorize("admin"),
  deletePayroll
);

module.exports = router;