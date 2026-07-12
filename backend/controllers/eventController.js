const Event = require("../models/Event");

/*
|--------------------------------------------------------------------------
| Get Events
|--------------------------------------------------------------------------
*/

const getEvents = async (req, res) => {
  try {
    const events = await Event.findAll({
      order: [["eventDate", "ASC"]],
    });

    return res.status(200).json({
      success: true,
      count: events.length,
      events,
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
| Get Event
|--------------------------------------------------------------------------
*/

const getEvent = async (req, res) => {
  try {
    const event = await Event.findByPk(
      req.params.id
    );

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    return res.status(200).json({
      success: true,
      event,
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
| Create Event
|--------------------------------------------------------------------------
*/

const createEvent = async (
  req,
  res
) => {
  try {
    const event = await Event.create(
      req.body
    );

    return res.status(201).json({
      success: true,
      message:
        "Event created successfully",
      event,
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
| Update Event
|--------------------------------------------------------------------------
*/

const updateEvent = async (
  req,
  res
) => {
  try {
    const event = await Event.findByPk(
      req.params.id
    );

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    await event.update(req.body);

    return res.status(200).json({
      success: true,
      message:
        "Event updated successfully",
      event,
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
| Delete Event
|--------------------------------------------------------------------------
*/

const deleteEvent = async (
  req,
  res
) => {
  try {
    const event = await Event.findByPk(
      req.params.id
    );

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    await event.destroy();

    return res.status(200).json({
      success: true,
      message:
        "Event deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
};