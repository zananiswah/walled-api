const express = require("express");
const router = express.Router();
const authenticateToken = require("../middlewares/auth.middleware");
const userController = require("../controllers/users.controller");
const userRepository = require("../repositories/users.repository");
const transactionRepository = require("../repositories/transactions.repository");
// // const transactionsController = require("../controllers/transactions.controller");

// router.get("/users", userRepository.getUsers);
// router.get("/transactions", transactionRepository.getTransactions);
router.post("/users", userController.createUser);
router.get("/profile", authenticateToken, userController.getUserById);
router.post("/auth/login", userController.login);
// router.get("/transactions", transactionsController.getTransactionsById);
// router.get("/users", userController.getUser);
module.exports = router;
