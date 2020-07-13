import React from 'react';

export default function Transaction({ transaction }) {
  const { day, category, description, value, type } = transaction;
  const cardColor = type === '+' ? '#A1F0DC' : '#F0A1A8';
  return (
    <div style={{ background: cardColor }} className="card">
      <div style={{ padding: '5px' }} className="row">
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
            <div style={{ fontSize: '1.8rem' }}>{value}</div>
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
              <span style={{ cursor: 'pointer' }} className="material-icons">
                edit
              </span>
              <span style={{ cursor: 'pointer' }} className="material-icons">
                delete
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
