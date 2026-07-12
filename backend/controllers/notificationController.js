const Notification = require("../models/Notification");

/*
|--------------------------------------------------------------------------
| Get All Notifications
|--------------------------------------------------------------------------
*/

const getNotifications = async (
  req,
  res
) => {
  try {
    const notifications =
      await Notification.findAll({
        order: [
          ["createdAt", "DESC"],
        ],
      });

    const formattedNotifications =
      notifications.map(
        (notification) => ({
          _id:
            notification.id,
          title:
            notification.title,
          message:
            notification.message,
          audience:
            notification.audience,
          createdAt:
            notification.createdAt,
        })
      );

    return res
      .status(200)
      .json(
        formattedNotifications
      );
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message:
        error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Get Single Notification
|--------------------------------------------------------------------------
*/

const getNotificationById =
  async (req, res) => {
    try {
      const notification =
        await Notification.findByPk(
          req.params.id
        );

      if (!notification) {
        return res.status(404).json({
          message:
            "Notification not found",
        });
      }

      return res.status(200).json({
        _id:
          notification.id,
        title:
          notification.title,
        message:
          notification.message,
        audience:
          notification.audience,
        createdAt:
          notification.createdAt,
      });
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        message:
          error.message,
      });
    }
  };

/*
|--------------------------------------------------------------------------
| Create Notification
|--------------------------------------------------------------------------
*/

const createNotification =
  async (req, res) => {
    try {
      const {
        title,
        message,
        audience,
      } = req.body;

      if (
        !title ||
        !message
      ) {
        return res.status(400).json({
          message:
            "Title and message are required",
        });
      }

      const notification =
        await Notification.create({
          title,
          message,
          audience:
            audience ||
            "ALL",
        });

      return res.status(201).json({
        message:
          "Notification sent successfully",
        notification,
      });
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        message:
          error.message,
      });
    }
  };

/*
|--------------------------------------------------------------------------
| Update Notification
|--------------------------------------------------------------------------
*/

const updateNotification =
  async (req, res) => {
    try {
      const notification =
        await Notification.findByPk(
          req.params.id
        );

      if (!notification) {
        return res.status(404).json({
          message:
            "Notification not found",
        });
      }

      await notification.update(
        req.body
      );

      return res.status(200).json({
        message:
          "Notification updated successfully",
        notification,
      });
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        message:
          error.message,
      });
    }
  };

/*
|--------------------------------------------------------------------------
| Delete Notification
|--------------------------------------------------------------------------
*/

const deleteNotification =
  async (req, res) => {
    try {
      const notification =
        await Notification.findByPk(
          req.params.id
        );

      if (!notification) {
        return res.status(404).json({
          message:
            "Notification not found",
        });
      }

      await notification.destroy();

      return res.status(200).json({
        message:
          "Notification deleted successfully",
      });
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        message:
          error.message,
      });
    }
  };

module.exports = {
  getNotifications,
  getNotificationById,
  createNotification,
  updateNotification,
  deleteNotification,
};