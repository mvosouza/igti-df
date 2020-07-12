const express = require('express');
const transactionRouter = express.Router();

//Block the route without the period parameter
transactionRouter.get('', (req, res) => {
  res.json({
    error:
      'É necessário informar o parâmetro "period", cujo valor deve estar no formato yyyy-mm',
  });
});

module.exports = transactionRouter;
