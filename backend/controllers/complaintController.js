const Complaint = require("../models/Complaint");

/*
|--------------------------------------------------------------------------
| Get All Complaints
|--------------------------------------------------------------------------
*/

const getComplaints = async (
  req,
  res
) => {
  try {
    const complaints =
      await Complaint.findAll({
        order: [
          ["createdAt", "DESC"],
        ],
      });

    const formattedComplaints =
      complaints.map(
        (complaint) => ({
          _id: complaint.id,

          student: {
            name:
              complaint.studentName,
          },

          subject:
            complaint.subject,

          description:
            complaint.description,

          status:
            complaint.status,

          createdAt:
            complaint.createdAt,
        })
      );

    return res
      .status(200)
      .json(formattedComplaints);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message:
        error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Get Single Complaint
|--------------------------------------------------------------------------
*/

const getComplaintById =
  async (req, res) => {
    try {
      const complaint =
        await Complaint.findByPk(
          req.params.id
        );

      if (!complaint) {
        return res.status(404).json({
          message:
            "Complaint not found",
        });
      }

      return res.status(200).json({
        _id: complaint.id,

        student: {
          name:
            complaint.studentName,
        },

        subject:
          complaint.subject,

        description:
          complaint.description,

        status:
          complaint.status,

        createdAt:
          complaint.createdAt,
      });
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        message:
          error.message,
      });
    }
  };

/*
|--------------------------------------------------------------------------
| Create Complaint
|--------------------------------------------------------------------------
*/

const createComplaint =
  async (req, res) => {
    try {
      const {
        studentName,
        subject,
        description,
      } = req.body;

      if (
        !studentName ||
        !subject ||
        !description
      ) {
        return res.status(400).json({
          message:
            "All fields are required",
        });
      }

      const complaint =
        await Complaint.create({
          studentName,
          subject,
          description,
          status:
            "Pending",
        });

      return res.status(201).json({
        message:
          "Complaint submitted successfully",
        complaint,
      });
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        message:
          error.message,
      });
    }
  };

/*
|--------------------------------------------------------------------------
| Update Complaint
|--------------------------------------------------------------------------
*/

const updateComplaint =
  async (req, res) => {
    try {
      const complaint =
        await Complaint.findByPk(
          req.params.id
        );

      if (!complaint) {
        return res.status(404).json({
          message:
            "Complaint not found",
        });
      }

      await complaint.update(
        req.body
      );

      return res.status(200).json({
        message:
          "Complaint updated successfully",
        complaint,
      });
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        message:
          error.message,
      });
    }
  };

/*
|--------------------------------------------------------------------------
| Delete Complaint
|--------------------------------------------------------------------------
*/

const deleteComplaint =
  async (req, res) => {
    try {
      const complaint =
        await Complaint.findByPk(
          req.params.id
        );

      if (!complaint) {
        return res.status(404).json({
          message:
            "Complaint not found",
        });
      }

      await complaint.destroy();

      return res.status(200).json({
        message:
          "Complaint deleted successfully",
      });
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        message:
          error.message,
      });
    }
  };

module.exports = {
  getComplaints,
  getComplaintById,
  createComplaint,
  updateComplaint,
  deleteComplaint,
};