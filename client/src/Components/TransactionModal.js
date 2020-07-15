import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import moment from 'moment';

export default function TransactionModal(props) {
  const { isOpen, onModalClose, operation, transaction, onSave } = props;
  const [description, setDescription] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('');

  useEffect(() => {
    setType(transaction.type || '');
    setDescription(transaction.description || '');
    setCategory(transaction.category || '');
    setValue(transaction.value || 0);
    setDate(
      transaction.yearMonthDay || moment(Date.now()).format('YYYY-MM-DD')
    );
  }, [transaction]);

  const handleModalClose = () => onModalClose();

  const handleSave = () => {
    const aux = moment(date);
    const newTransacton = {
      ...transaction,
      description,
      value,
      category,
      type,
      yearMonthDay: aux.format('YYYY-MM-DD'),
      day: aux.date(),
      month: aux.month() + 1,
      year: aux.year(),
      yearMonth: aux.format('YYYY-MM'),
    };
    onSave(newTransacton);
  };

  const hanldeOperationChange = (e) => {
    setType(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleValueChange = (e) => {
    setValue(Number(e.target.value));
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const isEdit = operation === 'edit';

  const title = isEdit ? 'Edição de lançamento' : 'Inclusão de lançamento';
  const isAllFieldsFulfilled = !(
    type &&
    description &&
    category &&
    value &&
    date
  );
  const disabledColor = isEdit ? styles.radio.disabled : {};
  return (
    <Modal isOpen={isOpen} style={customStyles}>
      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <h5 style={{ fontWeight: 'bold' }}>{title}</h5>
          <button
            style={{ marginLeft: '20px' }}
            className="waves-effect waves-lights btn red dark-4"
            onClick={handleModalClose}
          >
            X
          </button>
        </div>

        <div style={{ marginTop: '20px' }}>
          <div className="row">
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}
            >
              <p>
                <label>
                  <input
                    className="with-gap"
                    name="operation"
                    type="radio"
                    value="-"
                    checked={type === '-'}
                    disabled={isEdit}
                    onChange={hanldeOperationChange}
                  />
                  <span
                    style={{
                      ...styles.radio.base,
                      ...styles.radio.red,
                      ...disabledColor,
                    }}
                  >
                    Despesa
                  </span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    className="with-gap"
                    name="operation"
                    type="radio"
                    value="+"
                    checked={type === '+'}
                    disabled={isEdit}
                    onChange={hanldeOperationChange}
                  />
                  <span
                    style={{
                      ...styles.radio.base,
                      ...styles.radio.green,
                      ...disabledColor,
                    }}
                  >
                    Receita
                  </span>
                </label>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <label className="active">Descrição:</label>
              <input
                type="text"
                value={description}
                onChange={handleDescriptionChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <label className="active">Categoria:</label>
              <input
                type="text"
                value={category}
                onChange={handleCategoryChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <label className="active">Valor</label>
              <input
                type="number"
                value={value}
                onChange={handleValueChange}
                min="0"
                step="0.01"
              />
            </div>
            <div className="input-field col s6">
              <label className="active">Data:</label>
              <input type="date" value={date} onChange={handleDateChange} />
            </div>
            <div className="col 12">
              <a
                className="waves-effect waves-light btn"
                onClick={handleSave}
                disabled={isAllFieldsFulfilled}
              >
                <i className="material-icons left">save</i>SALVAR
              </a>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

const customStyles = {
  overlay: {
    zIndex: '1',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const styles = {
  radio: {
    base: { fontSize: '1.3rem', fontWeight: 'bold' },
    green: {
      color: 'rgb(39, 174, 96)',
    },
    red: {
      color: 'rgb(192, 57, 43)',
    },
    disabled: {
      color: '#949494',
    },
  },
};
