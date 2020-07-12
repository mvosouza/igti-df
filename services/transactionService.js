const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

// Aqui havia um erro difícil de pegar. Importei como "transactionModel",
// com "t" minúsculo. No Windows, isso não faz diferença. Mas como no Heroku
// o servidor é Linux, isso faz diferença. Gastei umas boas horas tentando
// descobrir esse erro :-/
const TransactionModel = require('../models/TransactionModel');
const { logger } = require('../config/logger');

const findAll = async (req, res) => {
  const period = req.query.period;

  if (!period)
    return res.status(400).json({
      error:
        'É necessário informar o parâmetro "period", cujo valor deve estar no formato yyyy-mm',
    });

  try {
    const transactions = await TransactionModel.find({
      yearMonth: period,
    }).lean();
    res.json(transactions);
    logger.info(`GET /transaction`);
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message || 'Erro ao buscar transações' });
    logger.error(`GET /transaction error: ${error.message}`);
  }
};

module.exports = { findAll };
