const Notice = require("../models/Notice");

/*
|--------------------------------------------------------------------------
| Get All Notices
|--------------------------------------------------------------------------
*/

const getNotices = async (
  req,
  res
) => {
  try {
    const notices =
      await Notice.findAll({
        order: [
          ["createdAt", "DESC"],
        ],
      });

    const formattedNotices =
      notices.map((notice) => ({
        _id: notice.id,
        title: notice.title,
        message:
          notice.message,
        createdAt:
          notice.createdAt,
      }));

    return res
      .status(200)
      .json(formattedNotices);
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
| Get Single Notice
|--------------------------------------------------------------------------
*/

const getNoticeById =
  async (req, res) => {
    try {
      const notice =
        await Notice.findByPk(
          req.params.id
        );

      if (!notice) {
        return res.status(404).json({
          message:
            "Notice not found",
        });
      }

      return res.status(200).json({
        _id: notice.id,
        title:
          notice.title,
        message:
          notice.message,
        createdAt:
          notice.createdAt,
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
| Create Notice
|--------------------------------------------------------------------------
*/

const createNotice =
  async (req, res) => {
    try {
      const {
        title,
        message,
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

      const notice =
        await Notice.create({
          title,
          message,
        });

      return res.status(201).json({
        message:
          "Notice created successfully",
        notice,
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
| Update Notice
|--------------------------------------------------------------------------
*/

const updateNotice =
  async (req, res) => {
    try {
      const notice =
        await Notice.findByPk(
          req.params.id
        );

      if (!notice) {
        return res.status(404).json({
          message:
            "Notice not found",
        });
      }

      await notice.update({
        title:
          req.body.title,
        message:
          req.body.message,
      });

      return res.status(200).json({
        message:
          "Notice updated successfully",
        notice,
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
| Delete Notice
|--------------------------------------------------------------------------
*/

const deleteNotice =
  async (req, res) => {
    try {
      const notice =
        await Notice.findByPk(
          req.params.id
        );

      if (!notice) {
        return res.status(404).json({
          message:
            "Notice not found",
        });
      }

      await notice.destroy();

      return res.status(200).json({
        message:
          "Notice deleted successfully",
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
  getNotices,
  getNoticeById,
  createNotice,
  updateNotice,
  deleteNotice,
};