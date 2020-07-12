const express = require('express');
const { findAll } = require('../services/transactionService');
const transactionRouter = express.Router();

transactionRouter.get('', findAll);

module.exports = transactionRouter;
