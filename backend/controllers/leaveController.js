const Leave = require("../models/Leave");

/*
|--------------------------------------------------------------------------
| Get All Leaves
|--------------------------------------------------------------------------
*/

const getLeaves = async (req, res) => {
  try {
    const leaves = await Leave.findAll({
      order: [["createdAt", "DESC"]],
    });

    return res.status(200).json(leaves);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Get Single Leave
|--------------------------------------------------------------------------
*/

const getLeaveById = async (req, res) => {
  try {
    const leave = await Leave.findByPk(req.params.id);

    if (!leave) {
      return res.status(404).json({
        success: false,
        message: "Leave not found",
      });
    }

    return res.status(200).json(leave);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Create Leave
|--------------------------------------------------------------------------
*/

const createLeave = async (req, res) => {
  try {
    const {
      employeeName,
      leaveType,
      startDate,
      endDate,
      reason,
    } = req.body;

    const leave = await Leave.create({
      employeeName,
      leaveType,
      startDate,
      endDate,
      reason,
      status: "Pending",
    });

    return res.status(201).json({
      success: true,
      message: "Leave request submitted",
      leave,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Update Leave Status
|--------------------------------------------------------------------------
*/

const updateLeave = async (req, res) => {
  try {
    const leave = await Leave.findByPk(req.params.id);

    if (!leave) {
      return res.status(404).json({
        success: false,
        message: "Leave not found",
      });
    }

    await leave.update(req.body);

    return res.status(200).json({
      success: true,
      message: "Leave updated successfully",
      leave,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Delete Leave
|--------------------------------------------------------------------------
*/

const deleteLeave = async (req, res) => {
  try {
    const leave = await Leave.findByPk(req.params.id);

    if (!leave) {
      return res.status(404).json({
        success: false,
        message: "Leave not found",
      });
    }

    await leave.destroy();

    return res.status(200).json({
      success: true,
      message: "Leave deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getLeaves,
  getLeaveById,
  createLeave,
  updateLeave,
  deleteLeave,
};