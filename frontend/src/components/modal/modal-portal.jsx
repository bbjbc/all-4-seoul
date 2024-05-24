import ReactDOM from 'react-dom';

import propTypes from 'prop-types';

function ModalPortal({ children }) {
  const modalLayout = document.getElementById('modal-layout');

  return ReactDOM.createPortal(children, modalLayout);
}

ModalPortal.propTypes = {
  children: propTypes.node.isRequired,
};

export default ModalPortal;
