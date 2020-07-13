import React from 'react';
import Transaction from './Transaction';

export default function Transactions({ items }) {
  return (
    <div>
      <div className="flex-row row">
        <button
          style={{ marginRight: '10px' }}
          className="waves-effect waves-light btn col s6 m3"
        >
          + NOVO LANÇAMENTO
        </button>
        <input className="col s6 m9" type="text" placeholder="Filtro" />
      </div>
      <div style={{ fontSize: '1.2rem' }}>
        {items.map((transaction) => (
          <Transaction key={transaction._id} transaction={transaction} />
        ))}
      </div>
    </div>
  );
}
