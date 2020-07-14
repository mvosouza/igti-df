import axios from 'axios';

const API_URL = 'http://localhost:3001/api/transaction';

const getTransactions = async (period) => {
  const res = await axios.get(`${API_URL}?period=${period}`);
  return res.data;
};

const deleteTransaction = async (_id) => {
  const res = await axios.delete(`${API_URL}/${_id}`);
  return res.data;
};

export { getTransactions, deleteTransaction };
