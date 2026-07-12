const Timetable = require("../models/Timetable");

const getTimetables = async (
  req,
  res
) => {
  try {
    const timetables =
      await Timetable.findAll({
        order: [
          ["createdAt", "DESC"],
        ],
      });

    res.status(200).json(
      timetables
    );
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getTimetable = async (
  req,
  res
) => {
  try {
    const timetable =
      await Timetable.findByPk(
        req.params.id
      );

    if (!timetable) {
      return res.status(404).json({
        message:
          "Timetable not found",
      });
    }

    res.status(200).json(
      timetable
    );
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const createTimetable =
  async (req, res) => {
    try {
      const timetable =
        await Timetable.create(
          req.body
        );

      res.status(201).json({
        message:
          "Timetable created successfully",
        timetable,
      });
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };

const updateTimetable =
  async (req, res) => {
    try {
      const timetable =
        await Timetable.findByPk(
          req.params.id
        );

      if (!timetable) {
        return res.status(404).json({
          message:
            "Timetable not found",
        });
      }

      await timetable.update(
        req.body
      );

      res.status(200).json({
        message:
          "Timetable updated successfully",
        timetable,
      });
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };

const deleteTimetable =
  async (req, res) => {
    try {
      const timetable =
        await Timetable.findByPk(
          req.params.id
        );

      if (!timetable) {
        return res.status(404).json({
          message:
            "Timetable not found",
        });
      }

      await timetable.destroy();

      res.status(200).json({
        message:
          "Timetable deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };

module.exports = {
  getTimetables,
  getTimetable,
  createTimetable,
  updateTimetable,
  deleteTimetable,
};