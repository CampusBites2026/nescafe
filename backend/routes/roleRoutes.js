const express = require("express");

const router = express.Router();

const {
  getRoles,
  getRole,
  createRole,
  deleteRole,
} = require("../controllers/roleController");

const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");

router.get(
  "/",
  protect,
  authorize("admin"),
  getRoles
);

router.get(
  "/:id",
  protect,
  authorize("admin"),
  getRole
);

router.post(
  "/",
  protect,
  authorize("admin"),
  createRole
);

router.delete(
  "/:id",
  protect,
  authorize("admin"),
  deleteRole
);

module.exports = router;