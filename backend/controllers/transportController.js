const Transport = require("../models/Transport");

/*
|--------------------------------------------------------------------------
| Get All Vehicles
|--------------------------------------------------------------------------
*/

const getVehicles = async (
  req,
  res
) => {
  try {
    const vehicles =
      await Transport.findAll({
        order: [
          ["createdAt", "DESC"],
        ],
      });

    return res.status(200).json(
      vehicles
    );
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Get Single Vehicle
|--------------------------------------------------------------------------
*/

const getVehicle = async (
  req,
  res
) => {
  try {
    const vehicle =
      await Transport.findByPk(
        req.params.id
      );

    if (!vehicle) {
      return res.status(404).json({
        message:
          "Vehicle not found",
      });
    }

    return res.status(200).json(
      vehicle
    );
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Create Vehicle
|--------------------------------------------------------------------------
*/

const createVehicle =
  async (req, res) => {
    try {
      const vehicle =
        await Transport.create(
          req.body
        );

      return res.status(201).json({
        success: true,
        message:
          "Vehicle added successfully",
        vehicle,
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
| Update Vehicle
|--------------------------------------------------------------------------
*/

const updateVehicle =
  async (req, res) => {
    try {
      const vehicle =
        await Transport.findByPk(
          req.params.id
        );

      if (!vehicle) {
        return res.status(404).json({
          message:
            "Vehicle not found",
        });
      }

      await vehicle.update(
        req.body
      );

      return res.status(200).json({
        success: true,
        message:
          "Vehicle updated successfully",
        vehicle,
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
| Delete Vehicle
|--------------------------------------------------------------------------
*/

const deleteVehicle =
  async (req, res) => {
    try {
      const vehicle =
        await Transport.findByPk(
          req.params.id
        );

      if (!vehicle) {
        return res.status(404).json({
          message:
            "Vehicle not found",
        });
      }

      await vehicle.destroy();

      return res.status(200).json({
        success: true,
        message:
          "Vehicle deleted successfully",
      });
    } catch (error) {
      return res.status(500).json({
        message:
          error.message,
      });
    }
  };

module.exports = {
  getVehicles,
  getVehicle,
  createVehicle,
  updateVehicle,
  deleteVehicle,
};