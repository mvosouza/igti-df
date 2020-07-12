const express = require('express');
const {
  findAllTransactions,
  findTransaction,
  createTransaction,
  updateTransaction,
  deleteTransaction,
} = require('../services/transactionService');
const transactionRouter = express.Router();

transactionRouter.get('', findAllTransactions);
transactionRouter.get('/:id', findTransaction);
transactionRouter.post('', createTransaction);
transactionRouter.put('/:id', updateTransaction);
transactionRouter.delete('/:id', deleteTransaction);

module.exports = transactionRouter;
