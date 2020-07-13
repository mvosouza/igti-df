import React, { useState } from 'react';
import allPeriods from '../data/allPeriods.js';

export default function PeriodSelection({ period, onPeriodChange }) {
  const [isDisableBackButton, setIsDisableBackButton] = useState(false);
  const [isDisableForwardButton, setIsDisableForwardButton] = useState(false);

  const handleSelectChange = (e) => {
    onPeriodChange(e.target.value);
  };

  const handleBackPeriod = (e) => {
    const index = allPeriods.findIndex(({ id }) => id === period);
    const newPeriod = allPeriods[index - 1];
    setIsDisableForwardButton(false);
    if (index - 1 === 0) setIsDisableBackButton(true);
    onPeriodChange(newPeriod.id);
  };

  const handleForwardPeriod = (e) => {
    const index = allPeriods.findIndex(({ id }) => id === period);
    const newPeriod = allPeriods[index + 1];
    setIsDisableBackButton(false);
    if (index + 1 === allPeriods.length - 1) setIsDisableForwardButton(true);
    onPeriodChange(newPeriod.id);
  };

  return (
    <div>
      <div className="flex-row">
        <a
          className="btn-floating btn-medium waves-effect waves-light"
          onClick={handleBackPeriod}
          disabled={isDisableBackButton}
        >
          <i className="material-icons">arrow_back</i>
        </a>

        <div style={{ marginLeft: '10px' }} className="input-field col s4">
          <select
            style={{ display: 'block' }}
            value={period}
            onChange={handleSelectChange}
          >
            {allPeriods.map(({ id, description }, index) => {
              return (
                <option key={index} value={id}>
                  {description}
                </option>
              );
            })}
          </select>
        </div>

        <a
          style={{ marginLeft: '10px' }}
          className="btn-floating btn-medium waves-effect waves-light"
          onClick={handleForwardPeriod}
          disabled={isDisableForwardButton}
        >
          <i className="material-icons">arrow_forward</i>
        </a>
      </div>
    </div>
  );
}
