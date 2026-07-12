const Book = require("../models/Book");

/*
|--------------------------------------------------------------------------
| Get All Books
|--------------------------------------------------------------------------
*/

const getBooks = async (req, res) => {
  try {
    const books = await Book.findAll({
      order: [["createdAt", "DESC"]],
    });

    const formattedBooks = books.map((book) => ({
      _id: book.id,
      title: book.title,
      author: book.author,
      category: book.category,
      quantity: book.quantity,
    }));

    return res.status(200).json(formattedBooks);
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
| Get Single Book
|--------------------------------------------------------------------------
*/

const getBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    return res.status(200).json({
      _id: book.id,
      title: book.title,
      author: book.author,
      category: book.category,
      quantity: book.quantity,
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
| Create Book
|--------------------------------------------------------------------------
*/

const createBook = async (req, res) => {
  try {
    const {
      title,
      author,
      category,
      quantity,
    } = req.body;

    if (!title || !author || !category) {
      return res.status(400).json({
        success: false,
        message:
          "Title, Author and Category are required",
      });
    }

    const book = await Book.create({
      title,
      author,
      category,
      quantity: Number(quantity) || 0,
    });

    return res.status(201).json({
      success: true,
      message: "Book added successfully",
      book,
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
| Update Book
|--------------------------------------------------------------------------
*/

const updateBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    await book.update({
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      quantity: req.body.quantity,
    });

    return res.status(200).json({
      success: true,
      message: "Book updated successfully",
      book,
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
| Delete Book
|--------------------------------------------------------------------------
*/

const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    await book.destroy();

    return res.status(200).json({
      success: true,
      message: "Book deleted successfully",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};