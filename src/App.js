import React, { useState, useContext, Fragment } from 'react';
import Popup from './components/Popup';
import CheckoutIframe from './components/CheckoutIframe';
import InvoiceContext from './InvoiceContext';

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const invoiceParams = useContext(InvoiceContext);

  return (
    <Fragment>
      <button onClick={() => setIsActive(true)}>Hello</button>
      <Popup isActive={isActive} onClickClose={() => setIsActive(false)}>
        <CheckoutIframe {...invoiceParams} />
      </Popup>
    </Fragment>
  );
};

export default App;
