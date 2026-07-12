const Leave = require("../models/Leave");

/*
|--------------------------------------------------------------------------
| Get All Leaves
|--------------------------------------------------------------------------
*/

const getLeaves = async (
  req,
  res
) => {
  try {
    const leaves =
      await Leave.findAll({
        order: [
          ["createdAt", "DESC"],
        ],
      });

    return res.status(200).json(
      leaves
    );
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Get Single Leave
|--------------------------------------------------------------------------
*/

const getLeave = async (
  req,
  res
) => {
  try {
    const leave =
      await Leave.findByPk(
        req.params.id
      );

    if (!leave) {
      return res.status(404).json({
        message:
          "Leave not found",
      });
    }

    return res.status(200).json(
      leave
    );
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Apply Leave
|--------------------------------------------------------------------------
*/

const applyLeave = async (
  req,
  res
) => {
  try {
    const leave =
      await Leave.create(
        req.body
      );

    return res.status(201).json({
      success: true,
      message:
        "Leave applied successfully",
      leave,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Approve Leave
|--------------------------------------------------------------------------
*/

const approveLeave =
  async (req, res) => {
    try {
      const leave =
        await Leave.findByPk(
          req.params.id
        );

      if (!leave) {
        return res.status(404).json({
          message:
            "Leave not found",
        });
      }

      await leave.update({
        status:
          "Approved",
        remarks:
          req.body.remarks ||
          "",
      });

      return res.status(200).json({
        success: true,
        message:
          "Leave approved successfully",
        leave,
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
| Reject Leave
|--------------------------------------------------------------------------
*/

const rejectLeave =
  async (req, res) => {
    try {
      const leave =
        await Leave.findByPk(
          req.params.id
        );

      if (!leave) {
        return res.status(404).json({
          message:
            "Leave not found",
        });
      }

      await leave.update({
        status:
          "Rejected",
        remarks:
          req.body.remarks ||
          "",
      });

      return res.status(200).json({
        success: true,
        message:
          "Leave rejected successfully",
        leave,
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
| Delete Leave
|--------------------------------------------------------------------------
*/

const deleteLeave =
  async (req, res) => {
    try {
      const leave =
        await Leave.findByPk(
          req.params.id
        );

      if (!leave) {
        return res.status(404).json({
          message:
            "Leave not found",
        });
      }

      await leave.destroy();

      return res.status(200).json({
        success: true,
        message:
          "Leave deleted successfully",
      });
    } catch (error) {
      return res.status(500).json({
        message:
          error.message,
      });
    }
  };

module.exports = {
  getLeaves,
  getLeave,
  applyLeave,
  approveLeave,
  rejectLeave,
  deleteLeave,
};