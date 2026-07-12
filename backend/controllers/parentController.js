const Parent = require("../models/Parent");

const getParents = async (req, res) => {
  try {
    const parents = await Parent.findAll({
      order: [["createdAt", "DESC"]],
    });

    res.status(200).json(parents);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getParent = async (req, res) => {
  try {
    const parent = await Parent.findByPk(
      req.params.id
    );

    if (!parent) {
      return res.status(404).json({
        message: "Parent not found",
      });
    }

    res.status(200).json(parent);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const createParent = async (req, res) => {
  try {
    const parent = await Parent.create(
      req.body
    );

    res.status(201).json({
      message:
        "Parent created successfully",
      parent,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateParent = async (req, res) => {
  try {
    const parent = await Parent.findByPk(
      req.params.id
    );

    if (!parent) {
      return res.status(404).json({
        message: "Parent not found",
      });
    }

    await parent.update(req.body);

    res.status(200).json({
      message:
        "Parent updated successfully",
      parent,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteParent = async (req, res) => {
  try {
    const parent = await Parent.findByPk(
      req.params.id
    );

    if (!parent) {
      return res.status(404).json({
        message: "Parent not found",
      });
    }

    await parent.destroy();

    res.status(200).json({
      message:
        "Parent deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getParents,
  getParent,
  createParent,
  updateParent,
  deleteParent,
};