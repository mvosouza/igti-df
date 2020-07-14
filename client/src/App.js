import React, { useState, useEffect } from 'react';
import Summary from './Components/Summary';
import PeriodSelection from './Components/PeriodSelection';
import Transactions from './Components/Transactions';
import { getTransactions, deleteTransaction } from './api/apiServices';
import TransactionModal from './Components/TransactionModal';
import { formatYearMonth } from './helper/formatter';

export default function App() {
  const [allTransactions, setAllTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [selectedTransaction, setSelectedTransaction] = useState();
  const [period, setPeriod] = useState(formatYearMonth(Date.now()));
  const [filter, setFilter] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalOperation, setModalOperation] = useState('');

  useEffect(() => {
    const fetchTransaction = async () => {
      const data = await getTransactions(period);
      setAllTransactions(data);
    };

    fetchTransaction();
  }, [period]);

  useEffect(() => {
    const filteredSet = allTransactions.filter(({ description }) =>
      description.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredTransactions(filteredSet);
  }, [filter, allTransactions]);

  const handlePeriodChange = (newPeriod) => {
    setPeriod(newPeriod);
  };

  const handleAddTransaction = () => {
    setModalOperation('add');
    setSelectedTransaction({});
    setIsModalOpen(true);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const hanldeEditTransaction = (transaction) => {
    setModalOperation('edit');
    setSelectedTransaction(transaction);
    setIsModalOpen(true);
  };

  const handleDeleteTransaction = async (_id) => {
    const res = await deleteTransaction(_id);
    const newTransactions = allTransactions.filter(
      (transaction) => transaction._id !== _id
    );
    setAllTransactions(newTransactions);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const hanldeSaveTransaction = (transaction) => {
    if (transaction._id) {
      console.log('edit');
    } else {
      console.log('add');
    }
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <h2 className="center">Desafio Final do Bootcamp Full Stack</h2>
      <h4 className="center">Controle Financeiro Pessoal</h4>

      <PeriodSelection period={period} onPeriodChange={handlePeriodChange} />
      <Summary transactions={filteredTransactions} />

      <div className="flex-row row">
        <button
          style={{ marginRight: '10px' }}
          className="waves-effect waves-light btn col s6 m3"
          onClick={handleAddTransaction}
          disabled={filter}
        >
          + NOVO LANÇAMENTO
        </button>

        <input
          className="col s6 m9"
          type="text"
          placeholder="Filtro"
          value={filter}
          onChange={handleFilterChange}
        />
      </div>

      <Transactions
        items={filteredTransactions}
        onEdit={hanldeEditTransaction}
        onDelete={handleDeleteTransaction}
      />

      {isModalOpen && (
        <TransactionModal
          isOpen={isModalOpen}
          onModalClose={closeModal}
          operation={modalOperation}
          transaction={selectedTransaction}
          onSave={hanldeSaveTransaction}
        />
      )}
    </div>
  );
}
