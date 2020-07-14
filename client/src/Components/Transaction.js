import React from 'react';
import { formatCurrency } from '../helper/formatter';

export default function Transaction(props) {
  const { transaction, cardStyle, onDelete, onEdit } = props;
  const { _id, day, category, description, value, type } = transaction;
  const cardColor = type === '+' ? '#A1F0DC' : '#F0A1A8';

  const handleEdit = () => {
    onEdit(transaction);
  };

  const handleDelete = () => {
    onDelete(_id);
  };

  return (
    <div style={{ background: cardColor, ...cardStyle }} className="card">
      <div style={{ padding: '5px', ...cardStyle }} className="row">
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          <div className="col s1 center" style={{ fontSize: '1.5rem' }}>
            {day.toString().padStart(2, '0')}
          </div>
          <div
            className="col s10"
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontWeight: 'bold' }}>{category}</span>
              <span style={{ fontSize: '1.1rem' }}>{description}</span>
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: 500 }}>
              {formatCurrency(value)}
            </div>
          </div>
          <div className="col s1">
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >
              <span
                style={{ cursor: 'pointer' }}
                className="material-icons"
                onClick={handleEdit}
              >
                edit
              </span>
              <span
                style={{ cursor: 'pointer' }}
                className="material-icons"
                onClick={handleDelete}
              >
                delete
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
