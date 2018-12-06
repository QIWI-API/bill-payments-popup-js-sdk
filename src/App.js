import React, { useState } from 'react';
import Popup from './components/Popup';
import CheckoutIframe from './components/CheckoutIframe';

const App = ({ onUnmountPopup, invoiceParams }) => {
  const [isActive, setIsActive] = useState(true);

  const onClickClose = () => {
    setIsActive(false);
    onUnmountPopup();
  };

  return (
    <Popup isActive={isActive} onClickClose={onClickClose}>
      <CheckoutIframe {...invoiceParams} />
    </Popup>
  );
};

export default App;
