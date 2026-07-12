const Payroll = require("../models/Payroll");

/*
|--------------------------------------------------------------------------
| Get All Payrolls
|--------------------------------------------------------------------------
*/

const getPayrolls = async (
  req,
  res
) => {
  try {
    const payrolls =
      await Payroll.findAll({
        order: [
          ["createdAt", "DESC"],
        ],
      });

    return res.status(200).json(
      payrolls
    );
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Get Single Payroll
|--------------------------------------------------------------------------
*/

const getPayroll = async (
  req,
  res
) => {
  try {
    const payroll =
      await Payroll.findByPk(
        req.params.id
      );

    if (!payroll) {
      return res.status(404).json({
        message:
          "Payroll not found",
      });
    }

    return res.status(200).json(
      payroll
    );
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Create Payroll
|--------------------------------------------------------------------------
*/

const createPayroll =
  async (req, res) => {
    try {
      const {
        basicSalary,
        allowances,
        deductions,
      } = req.body;

      const netSalary =
        Number(basicSalary) +
        Number(
          allowances || 0
        ) -
        Number(
          deductions || 0
        );

      const payroll =
        await Payroll.create({
          ...req.body,
          netSalary,
        });

      return res.status(201).json({
        success: true,
        message:
          "Payroll generated successfully",
        payroll,
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
| Mark Salary Paid
|--------------------------------------------------------------------------
*/

const markSalaryPaid =
  async (req, res) => {
    try {
      const payroll =
        await Payroll.findByPk(
          req.params.id
        );

      if (!payroll) {
        return res.status(404).json({
          message:
            "Payroll not found",
        });
      }

      await payroll.update({
        status: "Paid",
      });

      return res.status(200).json({
        success: true,
        message:
          "Salary marked as paid",
        payroll,
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
| Delete Payroll
|--------------------------------------------------------------------------
*/

const deletePayroll =
  async (req, res) => {
    try {
      const payroll =
        await Payroll.findByPk(
          req.params.id
        );

      if (!payroll) {
        return res.status(404).json({
          message:
            "Payroll not found",
        });
      }

      await payroll.destroy();

      return res.status(200).json({
        success: true,
        message:
          "Payroll deleted successfully",
      });
    } catch (error) {
      return res.status(500).json({
        message:
          error.message,
      });
    }
  };

module.exports = {
  getPayrolls,
  getPayroll,
  createPayroll,
  markSalaryPaid,
  deletePayroll,
};