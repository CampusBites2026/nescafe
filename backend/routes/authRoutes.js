const express = require("express");

const router = express.Router();

const {
  login,
  createUser,
  getMe,
  logout,
} = require("../controllers/authController");

const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

router.post("/login", login);

/*
|--------------------------------------------------------------------------
| Protected Routes
|--------------------------------------------------------------------------
*/

router.post(
  "/register",
  protect,
  authorize(
    "superadmin",
    "admin"
  ),
  createUser
);

router.post(
  "/users",
  protect,
  authorize(
    "superadmin",
    "admin"
  ),
  createUser
);

router.get("/me", protect, getMe);

router.post("/logout", protect, logout);

module.exports = router;
