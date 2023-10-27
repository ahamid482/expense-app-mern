const express = require("express");
const {
  addTransaction,
  getAllTransaction,
  editTransaction,
  deleteTransaction,
} = require("../controllers/transactionController");

// creating routing object
const router = express.Router();

// Routes
// Add transaction || POST method
router.post("/add-transaction", addTransaction);

// Edit transaction || POST method
router.post("/edit-transaction", editTransaction);

// Delete transaction || POST method
router.post("/delete-transaction", deleteTransaction);

//Post all transaction || POST method
router.post("/get-transaction", getAllTransaction);

module.exports = router;
