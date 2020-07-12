const express = require('express');
const { findAllTransactions } = require('../services/transactionService');
const transactionRouter = express.Router();

transactionRouter.get('', findAllTransactions);

module.exports = transactionRouter;
