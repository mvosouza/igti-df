const express = require('express');
const {
  findAllTransactions,
  findTransaction,
  createTransaction,
  updateTransaction,
} = require('../services/transactionService');
const transactionRouter = express.Router();

transactionRouter.get('', findAllTransactions);
transactionRouter.get('/:id', findTransaction);
transactionRouter.post('', createTransaction);
transactionRouter.put('/:id', updateTransaction);

module.exports = transactionRouter;
