const transporter =
  require("../config/email");

const twilioClient =
  require("../config/sms");

/*
|--------------------------------------------------------------------------
| Send Email
|--------------------------------------------------------------------------
*/

const sendEmail = async (
  req,
  res
) => {
  try {
    const {
      to,
      subject,
      message,
    } = req.body;

    await transporter.sendMail({
      from:
        process.env.EMAIL_USER,
      to,
      subject,
      text: message,
    });

    return res.status(200).json({
      success: true,
      message:
        "Email sent successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message:
        error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Send SMS
|--------------------------------------------------------------------------
*/

const sendSMS = async (
  req,
  res
) => {
  try {
    const {
      phone,
      message,
    } = req.body;

    await twilioClient.messages.create(
      {
        body: message,

        from:
          process.env.TWILIO_PHONE,

        to: phone,
      }
    );

    return res.status(200).json({
      success: true,
      message:
        "SMS sent successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message:
        error.message,
    });
  }
};

module.exports = {
  sendEmail,
  sendSMS,
};