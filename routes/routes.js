const express = require('express');
const {
  findAllTransactions,
  findTransaction,
  createTransaction,
} = require('../services/transactionService');
const transactionRouter = express.Router();

transactionRouter.get('', findAllTransactions);
transactionRouter.get('/:id', findTransaction);
transactionRouter.post('', createTransaction);

module.exports = transactionRouter;
