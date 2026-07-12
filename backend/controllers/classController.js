const Class = require("../models/Class");

const getClasses = async (req, res) => {
  try {
    const classes = await Class.findAll({
      order: [["createdAt", "DESC"]],
    });

    res.status(200).json(classes);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getClass = async (req, res) => {
  try {
    const classData = await Class.findByPk(
      req.params.id
    );

    if (!classData) {
      return res.status(404).json({
        message: "Class not found",
      });
    }

    res.status(200).json(classData);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const createClass = async (req, res) => {
  try {
    const classData =
      await Class.create(req.body);

    res.status(201).json({
      message:
        "Class created successfully",
      classData,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateClass = async (req, res) => {
  try {
    const classData = await Class.findByPk(
      req.params.id
    );

    if (!classData) {
      return res.status(404).json({
        message: "Class not found",
      });
    }

    await classData.update(req.body);

    res.status(200).json({
      message:
        "Class updated successfully",
      classData,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteClass = async (req, res) => {
  try {
    const classData = await Class.findByPk(
      req.params.id
    );

    if (!classData) {
      return res.status(404).json({
        message: "Class not found",
      });
    }

    await classData.destroy();

    res.status(200).json({
      message:
        "Class deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getClasses,
  getClass,
  createClass,
  updateClass,
  deleteClass,
};