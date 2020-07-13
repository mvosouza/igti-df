import React from 'react';
import SummaryItem from './SummaryItem';
import { formatCurrency } from '../helper/formatter';

export default function Summary({ transactions }) {
  const revenue = transactions.reduce((aggr, curr) => {
    if (curr.type === '+') return aggr + curr.value;
    return aggr;
  }, 0);
  const expenses = transactions.reduce((aggr, curr) => {
    if (curr.type === '-') return aggr + curr.value;
    return aggr;
  }, 0);
  const balance = revenue - expenses;

  return (
    <div className="card">
      <div className="flex-row-summary">
        <SummaryItem text="Lançamentos" value={transactions.length} />
        <SummaryItem text="Receitas" value={formatCurrency(revenue)} />
        <SummaryItem text="Despesas" value={formatCurrency(expenses)} />
        <SummaryItem text="Saldo" value={formatCurrency(balance)} />
      </div>
    </div>
  );
}
