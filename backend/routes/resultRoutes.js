const express = require("express");

const router = express.Router();

const {
  getResults,
  getResult,
  createResult,
  updateResult,
  deleteResult,
} = require("../controllers/resultController");

const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");

router.get("/", protect, getResults);

router.get("/:id", protect, getResult);

router.post(
  "/",
  protect,
  authorize("admin", "teacher"),
  createResult
);

router.put(
  "/:id",
  protect,
  authorize("admin", "teacher"),
  updateResult
);

router.delete(
  "/:id",
  protect,
  authorize("admin"),
  deleteResult
);

module.exports = router;