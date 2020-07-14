import React, { useState, useEffect } from 'react';
import Summary from './Components/Summary';
import PeriodSelection from './Components/PeriodSelection';
import Transactions from './Components/Transactions';
import { getTransactions } from './api/apiServices';
import TransactionModal from './Components/TransactionModal';

export default function App() {
  const [allTransactions, setAllTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [period, setPeriod] = useState('2020-07');
  const [filter, setFilter] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalOperation, setModalOperation] = useState('');

  useEffect(() => {
    const fetchTransaction = async () => {
      const data = await getTransactions(period);
      setAllTransactions(data);
      setFilteredTransactions(data);
    };

    fetchTransaction();
  }, [period]);

  useEffect(() => {
    const filteredSet = allTransactions.filter(({ description }) =>
      description.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredTransactions(filteredSet);
  }, [filter]);

  const handlePeriodChange = (newPeriod) => {
    setPeriod(newPeriod);
  };

  const handleAddTransaction = () => {
    setModalOperation('+');
    setIsModalOpen(true);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const closeModal = () => {
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

      <Transactions items={filteredTransactions} />

      {isModalOpen && (
        <TransactionModal
          isOpen={isModalOpen}
          onModalClose={closeModal}
          operation={modalOperation}
        />
      )}
    </div>
  );
}
