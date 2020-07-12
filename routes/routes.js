const express = require('express');
const {
  findAllTransactions,
  createTransaction,
} = require('../services/transactionService');
const transactionRouter = express.Router();

transactionRouter.get('', findAllTransactions);
transactionRouter.post('', createTransaction);

module.exports = transactionRouter;
