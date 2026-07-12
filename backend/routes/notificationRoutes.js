const express = require("express");

const router = express.Router();

const {
  getNotifications,
  getNotificationById,
  createNotification,
  updateNotification,
  deleteNotification,
} = require("../controllers/notificationController");

const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");

/*
|--------------------------------------------------------------------------
| Notification Routes
|--------------------------------------------------------------------------
*/

router.get(
  "/",
  protect,
  getNotifications
);

router.get(
  "/:id",
  protect,
  getNotificationById
);

router.post(
  "/",
  protect,
  authorize("admin"),
  createNotification
);

router.put(
  "/:id",
  protect,
  authorize("admin"),
  updateNotification
);

router.delete(
  "/:id",
  protect,
  authorize("admin"),
  deleteNotification
);

module.exports = router;