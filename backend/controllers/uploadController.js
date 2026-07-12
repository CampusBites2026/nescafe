const uploadFile = async (
  req,
  res
) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message:
          "No file uploaded",
      });
    }

    return res.status(200).json({
      success: true,
      message:
        "File uploaded successfully",

      file: {
        filename:
          req.file.filename,

        originalName:
          req.file.originalname,

        path:
          req.file.path,

        size:
          req.file.size,
      },
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
  uploadFile,
};