const express = require("express");

const router = express.Router();

const {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/libraryController");

const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");

router.get("/", protect, getBooks);

router.get("/:id", protect, getBook);

router.post(
  "/",
  protect,
  authorize("admin"),
  createBook
);

router.put(
  "/:id",
  protect,
  authorize("admin"),
  updateBook
);

router.delete(
  "/:id",
  protect,
  authorize("admin"),
  deleteBook
);

module.exports = router;