const express = require("express");

const router = express.Router();

const {
  getParents,
  getParent,
  createParent,
  updateParent,
  deleteParent,
} = require("../controllers/parentController");

const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");

router.get("/", protect, getParents);

router.get("/:id", protect, getParent);

router.post(
  "/",
  protect,
  authorize("admin"),
  createParent
);

router.put(
  "/:id",
  protect,
  authorize("admin"),
  updateParent
);

router.delete(
  "/:id",
  protect,
  authorize("admin"),
  deleteParent
);

module.exports = router;