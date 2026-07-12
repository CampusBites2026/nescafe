const Role = require("../models/Role");

const getRoles = async (
  req,
  res
) => {
  try {
    const roles =
      await Role.findAll({
        order: [
          ["createdAt", "DESC"],
        ],
      });

    return res.status(200).json(
      roles
    );
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getRole = async (
  req,
  res
) => {
  try {
    const role =
      await Role.findByPk(
        req.params.id
      );

    if (!role) {
      return res.status(404).json({
        message:
          "Role not found",
      });
    }

    return res.status(200).json(
      role
    );
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const createRole =
  async (req, res) => {
    try {
      const role =
        await Role.create(
          req.body
        );

      return res.status(201).json({
        success: true,
        message:
          "Role created successfully",
        role,
      });
    } catch (error) {
      return res.status(500).json({
        message:
          error.message,
      });
    }
  };

const deleteRole =
  async (req, res) => {
    try {
      const role =
        await Role.findByPk(
          req.params.id
        );

      if (!role) {
        return res.status(404).json({
          message:
            "Role not found",
        });
      }

      await role.destroy();

      return res.status(200).json({
        success: true,
        message:
          "Role deleted successfully",
      });
    } catch (error) {
      return res.status(500).json({
        message:
          error.message,
      });
    }
  };

module.exports = {
  getRoles,
  getRole,
  createRole,
  deleteRole,
};