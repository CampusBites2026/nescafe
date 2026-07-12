const Hostel = require("../models/Hostel");

/*
|--------------------------------------------------------------------------
| Get All Hostel Records
|--------------------------------------------------------------------------
*/

const getHostels = async (
  req,
  res
) => {
  try {
    const hostels =
      await Hostel.findAll({
        order: [
          ["createdAt", "DESC"],
        ],
      });

    return res.status(200).json(
      hostels
    );
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Get Single Hostel Record
|--------------------------------------------------------------------------
*/

const getHostel = async (
  req,
  res
) => {
  try {
    const hostel =
      await Hostel.findByPk(
        req.params.id
      );

    if (!hostel) {
      return res.status(404).json({
        message:
          "Hostel record not found",
      });
    }

    return res.status(200).json(
      hostel
    );
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Create Hostel Record
|--------------------------------------------------------------------------
*/

const createHostel =
  async (req, res) => {
    try {
      const hostel =
        await Hostel.create(
          req.body
        );

      return res.status(201).json({
        success: true,
        message:
          "Hostel record created successfully",
        hostel,
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
| Update Hostel Record
|--------------------------------------------------------------------------
*/

const updateHostel =
  async (req, res) => {
    try {
      const hostel =
        await Hostel.findByPk(
          req.params.id
        );

      if (!hostel) {
        return res.status(404).json({
          message:
            "Hostel record not found",
        });
      }

      await hostel.update(
        req.body
      );

      return res.status(200).json({
        success: true,
        message:
          "Hostel record updated successfully",
        hostel,
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
| Delete Hostel Record
|--------------------------------------------------------------------------
*/

const deleteHostel =
  async (req, res) => {
    try {
      const hostel =
        await Hostel.findByPk(
          req.params.id
        );

      if (!hostel) {
        return res.status(404).json({
          message:
            "Hostel record not found",
        });
      }

      await hostel.destroy();

      return res.status(200).json({
        success: true,
        message:
          "Hostel record deleted successfully",
      });
    } catch (error) {
      return res.status(500).json({
        message:
          error.message,
      });
    }
  };

module.exports = {
  getHostels,
  getHostel,
  createHostel,
  updateHostel,
  deleteHostel,
};