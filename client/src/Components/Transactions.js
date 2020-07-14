import React from 'react';
import Transaction from './Transaction';

export default function Transactions({ items }) {
  return (
    <div>
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
