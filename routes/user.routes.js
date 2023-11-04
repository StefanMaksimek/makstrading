const express = require("express");
const router = express.Router();
const authenticateJWT = require("../middleware/authMiddleware");
const usersController = require("../controllers/user.controller");

// Route zum Registrieren eines neuen Benutzers
router.post("/register", usersController.register);

// Route zum Anmelden eines Benutzers
router.post("/login", usersController.login);

// Route zum Abrufen von Benutzerdaten
router.get("/:id", usersController.findOne);

router.get("/profile", authenticateJWT, usersController.getUserProfile);

module.exports = router;
