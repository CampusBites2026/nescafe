const Assignment = require("../models/Assignment");

/*
|--------------------------------------------------------------------------
| Get All Assignments
|--------------------------------------------------------------------------
*/

const getAssignments = async (
  req,
  res
) => {
  try {
    const assignments =
      await Assignment.findAll({
        order: [
          ["createdAt", "DESC"],
        ],
      });

    return res.status(200).json(
      assignments
    );
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Get Single Assignment
|--------------------------------------------------------------------------
*/

const getAssignment = async (
  req,
  res
) => {
  try {
    const assignment =
      await Assignment.findByPk(
        req.params.id
      );

    if (!assignment) {
      return res.status(404).json({
        message:
          "Assignment not found",
      });
    }

    return res.status(200).json(
      assignment
    );
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Create Assignment
|--------------------------------------------------------------------------
*/

const createAssignment =
  async (req, res) => {
    try {
      const assignment =
        await Assignment.create(
          req.body
        );

      return res.status(201).json({
        success: true,
        message:
          "Assignment created successfully",
        assignment,
      });
    } catch (error) {
      return res.status(500).json({
        message:
          error.message,
      });
    }
  };

/*
|--------------------------------------------------------------------------
| Update Assignment
|--------------------------------------------------------------------------
*/

const updateAssignment =
  async (req, res) => {
    try {
      const assignment =
        await Assignment.findByPk(
          req.params.id
        );

      if (!assignment) {
        return res.status(404).json({
          message:
            "Assignment not found",
        });
      }

      await assignment.update(
        req.body
      );

      return res.status(200).json({
        success: true,
        message:
          "Assignment updated successfully",
        assignment,
      });
    } catch (error) {
      return res.status(500).json({
        message:
          error.message,
      });
    }
  };

/*
|--------------------------------------------------------------------------
| Delete Assignment
|--------------------------------------------------------------------------
*/

const deleteAssignment =
  async (req, res) => {
    try {
      const assignment =
        await Assignment.findByPk(
          req.params.id
        );

      if (!assignment) {
        return res.status(404).json({
          message:
            "Assignment not found",
        });
      }

      await assignment.destroy();

      return res.status(200).json({
        success: true,
        message:
          "Assignment deleted successfully",
      });
    } catch (error) {
      return res.status(500).json({
        message:
          error.message,
      });
    }
  };

module.exports = {
  getAssignments,
  getAssignment,
  createAssignment,
  updateAssignment,
  deleteAssignment,
};