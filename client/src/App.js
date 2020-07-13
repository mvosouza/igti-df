import React, { useState, useEffect } from 'react';
import Summary from './Components/Summary';
import PeriodSelection from './Components/PeriodSelection';
import Transactions from './Components/Transactions';
import { getTransactions } from './api/apiServices';

export default function App() {
  const [allTransactions, setAllTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [period, setPeriod] = useState('2020-07');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchTransaction = async () => {
      const data = await getTransactions(period);
      setAllTransactions(data);
      setFilteredTransactions(data);
    };

    fetchTransaction();
  }, [period]);

  const handlePeriodChange = (newPeriod) => {
    setPeriod(newPeriod);
  };

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  useEffect(() => {
    const filteredSet = allTransactions.filter(({ description }) =>
      description.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredTransactions(filteredSet);
  }, [filter]);

  return (
    <div className="container">
      <h2 className="center">Desafio Final do Bootcamp Full Stack</h2>
      <h4 className="center">Controle Financeiro Pessoal</h4>
      <PeriodSelection period={period} onPeriodChange={handlePeriodChange} />
      <Summary transactions={filteredTransactions} />
      <Transactions
        items={filteredTransactions}
        filter={filter}
        onFilterCange={handleFilterChange}
      />
    </div>
  );
}
