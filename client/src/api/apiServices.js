import axios from 'axios';

const API_URL = 'http://localhost:3001/api/transaction';

const getTransactions = async (period) => {
  const res = await axios.get(`${API_URL}?period=${period}`);
  return res.data;
};

export { getTransactions };
