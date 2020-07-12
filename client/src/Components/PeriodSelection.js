import React from 'react';

export default function PeriodSelection({ period, onPeriodChange }) {
  const handleSelectChange = (e) => {
    onPeriodChange(e.target.value);
  };

  return (
    <div>
      <div className="flex-row">
        <a className="btn-floating btn-medium waves-effect waves-light">
          <i className="material-icons">arrow_back</i>
        </a>

        <div style={{ marginLeft: '10px' }} className="input-field col s4">
          <select
            style={{ display: 'block' }}
            value={period}
            onChange={handleSelectChange}
          >
            <option value="2020-07">2020-07</option>
            <option value="2020-08">2020-08</option>
          </select>
        </div>

        <a
          style={{ marginLeft: '10px' }}
          className="btn-floating btn-medium waves-effect waves-light"
        >
          <i className="material-icons">arrow_forward</i>
        </a>
      </div>
    </div>
  );
}
