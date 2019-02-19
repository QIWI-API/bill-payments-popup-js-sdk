import React, { useState } from 'react';
import Popup from './components/Popup';
import CheckoutIframe from './components/CheckoutIframe';
import PreorderIframe from './components/PreorderIframe';

const App = ({ onPopupClosed, params, type }) => {
  const [isActive, setIsActive] = useState(true);

  const onClickClose = () => {
    setIsActive(false);
    onPopupClosed();
  };

  const renderIframe = () => {
    switch (type) {
      case 'CHECKOUT':
        return <CheckoutIframe {...params} />;
      case 'PREORDER':
        return <PreorderIframe {...params} />;
    }
  }

  return (
    <Popup isActive={isActive} onClose={onClickClose}>
      {renderIframe()}
    </Popup>
  );
};

export default App;
