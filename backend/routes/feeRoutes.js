const express = require("express");

const router = express.Router();

const {
  getFees,
  getFee,
  createFee,
  collectFee,
  deleteFee,
} = require("../controllers/feeController");

const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");

router.get(
  "/",
  protect,
  getFees
);

router.get(
  "/:id",
  protect,
  getFee
);

router.post(
  "/",
  protect,
  authorize("admin"),
  createFee
);

router.put(
  "/collect/:id",
  protect,
  authorize("admin"),
  collectFee
);

router.delete(
  "/:id",
  protect,
  authorize("admin"),
  deleteFee
);

module.exports = router;