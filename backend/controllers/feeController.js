const Fee = require("../models/Fee");

/*
|--------------------------------------------------------------------------
| Get All Fees
|--------------------------------------------------------------------------
*/

const getFees = async (req, res) => {
  try {
    const fees = await Fee.findAll({
      order: [["createdAt", "DESC"]],
    });

    const formattedFees = fees.map(
      (fee) => ({
        _id: fee.id,

        student: {
          name:
            fee.studentName ||
            fee.student?.name ||
            "",
        },

        amount: fee.amount,
        paidAmount: fee.paidAmount,
        status: fee.status,

        dueDate: fee.dueDate,
        paymentDate:
          fee.paymentDate,
      })
    );

    return res.status(200).json(
      formattedFees
    );
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Get Single Fee
|--------------------------------------------------------------------------
*/

const getFee = async (req, res) => {
  try {
    const fee = await Fee.findByPk(
      req.params.id
    );

    if (!fee) {
      return res.status(404).json({
        message:
          "Fee record not found",
      });
    }

    return res.status(200).json({
      _id: fee.id,

      student: {
        name:
          fee.studentName ||
          fee.student?.name ||
          "",
      },

      amount: fee.amount,
      paidAmount: fee.paidAmount,
      status: fee.status,

      dueDate: fee.dueDate,
      paymentDate:
        fee.paymentDate,

      paymentMethod:
        fee.paymentMethod,

      receiptNumber:
        fee.receiptNumber,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Create Fee
|--------------------------------------------------------------------------
*/
const createFee = async (
  req,
  res
) => {
  try {
    const {
      studentId,
      amount,
      dueDate,
      term,
    } = req.body;

    if (
      !studentId ||
      !amount ||
      !dueDate ||
      !term
    ) {
      return res.status(400).json({
        message:
          "Student ID, Amount, Due Date and Term are required",
      });
    }

    const student =
      await Student.findByPk(
        studentId
      );

    const fee =
      await Fee.create({
        studentId,

        studentName:
          student?.name ||
          "Unknown Student",

        amount:
          Number(amount),

        dueDate,

        term,

        paidAmount: 0,

        status: "Pending",
      });

    return res.status(201).json({
      success: true,
      message:
        "Fee created successfully",
      fee,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Collect Fee
|--------------------------------------------------------------------------
*/

const collectFee = async (
  req,
  res
) => {
  try {
    const fee = await Fee.findByPk(
      req.params.id
    );

    if (!fee) {
      return res.status(404).json({
        success: false,
        message:
          "Fee record not found",
      });
    }

    const amount = Number(
      req.body.amount
    );

    if (
      !amount ||
      amount <= 0
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Please enter a valid amount",
      });
    }

    fee.paidAmount =
      Number(
        fee.paidAmount || 0
      ) + amount;

    fee.paymentDate =
      new Date();

    if (
      Number(fee.paidAmount) >=
      Number(fee.amount)
    ) {
      fee.status = "Paid";
    } else {
      fee.status = "Pending";
    }

    await fee.save();

    return res.status(200).json({
      success: true,
      message:
        "Fee collected successfully",
      fee,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Delete Fee
|--------------------------------------------------------------------------
*/

const deleteFee = async (
  req,
  res
) => {
  try {
    const fee = await Fee.findByPk(
      req.params.id
    );

    if (!fee) {
      return res.status(404).json({
        message:
          "Fee record not found",
      });
    }

    await fee.destroy();

    return res.status(200).json({
      message:
        "Fee deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getFees,
  getFee,
  createFee,
  collectFee,
  deleteFee,
};