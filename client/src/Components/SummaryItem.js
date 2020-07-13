import React from 'react';

export default function SummaryItem({ text, value, valueStyle }) {
  return (
    <div className="summary-item">
      <span className="primary">{text}:</span>
      <span style={valueStyle} className="">
        {value}
      </span>
    </div>
  );
}
