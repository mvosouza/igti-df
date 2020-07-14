import React from 'react';
import Modal from 'react-modal';

export default function TransactionModal(props) {
  const { isOpen, onModalClose, operation } = props;

  const handleModalClose = () => onModalClose();

  const title =
    operation === '+' ? 'Inclusão de lançamento' : 'Edição de lançamento';
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
                    class="with-gap"
                    name="operation"
                    type="radio"
                    value="-"
                  />
                  <span
                    style={{
                      fontSize: '1.3rem',
                      fontWeight: 'bold',
                      color: 'rgb(192, 57, 43)',
                    }}
                  >
                    Despesa
                  </span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    class="with-gap"
                    name="operation"
                    type="radio"
                    value="+"
                    checked
                  />
                  <span
                    style={{
                      fontSize: '1.3rem',
                      fontWeight: 'bold',
                      color: 'rgb(39, 174, 96)',
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
              <input value="Alvin" type="text" />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <label className="active">Categoria:</label>
              <input value="Alvin" type="text" />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <label className="active">Valor</label>
              <input type="number" value={0} />
            </div>
            <div className="input-field col s6">
              <label className="active">Data:</label>
              <input type="date" />
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
