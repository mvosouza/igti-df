import React, { useState, useEffect } from 'react';
import Summary from './Components/Summary';
import PeriodSelection from './Components/PeriodSelection';
import Transactions from './Components/Transactions';
import { getTransactions } from './api/apiServices';

export default function App() {
  const [allTransactions, setAllTransactions] = useState([]);
  const [period, setPeriod] = useState('2020-07');

  useEffect(() => {
    const fetchTransaction = async () => {
      const data = await getTransactions(period);
      console.log(data);
    };

    fetchTransaction();
  }, [period]);

  const handlePeriodChange = (newPeriod) => {
    setPeriod(newPeriod);
    console.log(newPeriod);
  };

  return (
    <div className="container">
      <h2 className="center">Desafio Final do Bootcamp Full Stack</h2>
      <h4 className="center">Controle Financeiro Pessoal</h4>
      <PeriodSelection period={period} onPeriodChange={handlePeriodChange} />
      <Summary />
      <Transactions items={allTransactions} />
    </div>
  );
}
