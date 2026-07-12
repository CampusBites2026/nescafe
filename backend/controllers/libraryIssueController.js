const IssuedBook = require(
  "../models/IssuedBook"
);

/*
|--------------------------------------------------------------------------
| Issue Book
|--------------------------------------------------------------------------
*/

const issueBook = async (
  req,
  res
) => {
  try {
    const {
      studentName,
      bookName,
      issueDate,
      returnDate,
    } = req.body;

    if (
      !studentName ||
      !bookName ||
      !issueDate ||
      !returnDate
    ) {
      return res.status(400).json({
        message:
          "All fields are required",
      });
    }

    const issuedBook =
      await IssuedBook.create({
        studentName,
        bookName,
        issueDate,
        returnDate,
      });

    return res.status(201).json({
      message:
        "Book issued successfully",
      issuedBook,
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
| Get Issued Books
|--------------------------------------------------------------------------
*/

const getIssuedBooks =
  async (req, res) => {
    try {
      const books =
        await IssuedBook.findAll({
          order: [
            ["createdAt", "DESC"],
          ],
        });

      return res
        .status(200)
        .json(books);
    } catch (error) {
      return res.status(500).json({
        message:
          error.message,
      });
    }
  };

module.exports = {
  issueBook,
  getIssuedBooks,
};