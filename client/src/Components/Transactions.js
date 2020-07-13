import React from 'react';
import Transaction from './Transaction';

export default function Transactions({ items, filter, onFilterCange }) {
  const handleFilterChange = (e) => {
    onFilterCange(e.target.value);
  };

  return (
    <div>
      <div className="flex-row row">
        <button
          style={{ marginRight: '10px' }}
          className="waves-effect waves-light btn col s6 m3"
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

      <div style={{ fontSize: '1.2rem' }}>
        {items.map((transaction, index, trans) => {
          const style =
            index < trans.length - 1 && transaction.day === trans[index + 1].day
              ? { marginBottom: '0px' }
              : {};
          return (
            <Transaction
              key={transaction._id}
              transaction={transaction}
              cardStyle={style}
            />
          );
        })}
      </div>
    </div>
  );
}
