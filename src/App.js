import React, { useState } from 'react';
import Popup from './components/Popup';
import CheckoutIframe from './components/CheckoutIframe';

const App = ({ onPopupClosed, invoiceParams }) => {
  const [isActive, setIsActive] = useState(true);

  const onClickClose = () => {
    setIsActive(false);
    onPopupClosed();
  };

  return (
    <Popup isActive={isActive} onClose={onClickClose}>
      <CheckoutIframe {...invoiceParams} />
    </Popup>
  );
};

export default App;
