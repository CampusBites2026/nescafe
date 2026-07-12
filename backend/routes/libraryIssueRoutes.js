const express = require("express");

const router = express.Router();

const {
  issueBook,
  getIssuedBooks,
} = require(
  "../controllers/libraryIssueController"
);

const {
  protect,
  authorize,
} = require(
  "../middleware/authMiddleware"
);

router.get(
  "/",
  protect,
  getIssuedBooks
);

router.post(
  "/",
  protect,
  authorize(
    "admin",
    "librarian",
    "teacher"
  ),
  issueBook
);

module.exports = router;