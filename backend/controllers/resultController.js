const Result = require("../models/Result");

/*
|--------------------------------------------------------------------------
| Get All Results
|--------------------------------------------------------------------------
*/

const getResults = async (req, res) => {
  try {
    const results =
      await Result.findAll({
        order: [["createdAt", "DESC"]],
      });

    return res.status(200).json({
      success: true,
      count: results.length,
      results,
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
| Get Single Result
|--------------------------------------------------------------------------
*/

const getResult = async (req, res) => {
  try {
    const result =
      await Result.findByPk(
        req.params.id
      );

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Result not found",
      });
    }

    return res.status(200).json({
      success: true,
      result,
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
| Create Result
|--------------------------------------------------------------------------
*/

const createResult = async (
  req,
  res
) => {
  try {
    const result =
      await Result.create(req.body);

    return res.status(201).json({
      success: true,
      message:
        "Result created successfully",
      result,
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
| Update Result
|--------------------------------------------------------------------------
*/

const updateResult = async (
  req,
  res
) => {
  try {
    const result =
      await Result.findByPk(
        req.params.id
      );

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Result not found",
      });
    }

    await result.update(req.body);

    return res.status(200).json({
      success: true,
      message:
        "Result updated successfully",
      result,
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
| Delete Result
|--------------------------------------------------------------------------
*/

const deleteResult = async (
  req,
  res
) => {
  try {
    const result =
      await Result.findByPk(
        req.params.id
      );

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Result not found",
      });
    }

    await result.destroy();

    return res.status(200).json({
      success: true,
      message:
        "Result deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getResults,
  getResult,
  createResult,
  updateResult,
  deleteResult,
};