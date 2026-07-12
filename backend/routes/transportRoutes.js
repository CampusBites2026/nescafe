const express = require("express");

const router = express.Router();

const {
  getVehicles,
  getVehicle,
  createVehicle,
  updateVehicle,
  deleteVehicle,
} = require("../controllers/transportController");

const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");

router.get(
  "/",
  protect,
  getVehicles
);

router.get(
  "/:id",
  protect,
  getVehicle
);

router.post(
  "/",
  protect,
  authorize("admin"),
  createVehicle
);

router.put(
  "/:id",
  protect,
  authorize("admin"),
  updateVehicle
);

router.delete(
  "/:id",
  protect,
  authorize("admin"),
  deleteVehicle
);

module.exports = router;