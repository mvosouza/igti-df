const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

// Aqui havia um erro difícil de pegar. Importei como "transactionModel",
// com "t" minúsculo. No Windows, isso não faz diferença. Mas como no Heroku
// o servidor é Linux, isso faz diferença. Gastei umas boas horas tentando
// descobrir esse erro :-/
const TransactionModel = require('../models/TransactionModel');
const { logger } = require('../config/logger');

const findAllTransactions = async (req, res) => {
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
    const msg = error.message || 'Erro ao buscar transações';
    res.status(500).json({ error: msg });
    logger.error(`GET /transaction error: ${msg}`);
  }
};

const findTransaction = async (req, res) => {
  const { id } = req.params;

  try {
    const transaction = await TransactionModel.findById(id).lean();
    if (!transaction) res.status(404).json();
    else res.json(transaction);
    logger.info(`GET /transaction/${id}`);
  } catch (error) {
    const msg = error.message || 'Erro ao buscar transação';
    res.status(500).json({ error: msg });
    logger.error(`GET /transaction/${id} error: ${msg}`);
  }
};

const createTransaction = async (req, res) => {
  const transaction = { ...req.body };
  try {
    const newTransaction = await new TransactionModel(transaction).save();
    res.status(201).json(newTransaction);
    logger.info(`POST /transaction obj: ${transaction}`);
  } catch (error) {
    const msg = error.message || 'Erro ao criar transação';
    res.status(500).json({ error: msg });
    logger.error(`POST /transaction error: ${msg}`);
  }
};

const updateTransaction = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await TransactionModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(result);
    logger.info(`PUT /transaction/${id}`);
  } catch (error) {
    const msg = error.message || 'Erro ao atualizar transação';
    res.status(500).json({ error: msg });
    logger.error(`PUT /transaction error: ${msg}`);
  }
};

const deleteTransaction = async (req, res) => {
  const { id } = req.params;

  try {
    const transaction = await TransactionModel.findByIdAndDelete(id);
    res.status(204).json(transaction);
    logger.info(`DELETE /transaction/${id}`);
  } catch (error) {
    const msg = error.message || 'Erro ao deletar transação';
    res.status(500).json({ error: msg });
    logger.error(`DELETE /transaction/${id} error: ${msg}`);
  }
};

module.exports = {
  findAllTransactions,
  findTransaction,
  createTransaction,
  updateTransaction,
  deleteTransaction,
};
