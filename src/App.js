import React, { useState, useContext, Fragment } from 'react';
import Popup from './components/Popup';
import CheckoutIframe from './components/CheckoutIframe';
import Button from './components/Button';
import InvoiceContext from './InvoiceContext';

const App = () => {
  const [isActive, setIsActive] = useState(true);
  const invoiceParams = useContext(InvoiceContext);

  return (
    <Fragment>
      <Button onClick={() => setIsActive(true)}>Hello</Button>
      <Popup isActive={isActive} onClickClose={() => setIsActive(false)}>
        <CheckoutIframe invoiceUid={invoiceParams.invoiceUid} />
      </Popup>
    </Fragment>
  );
};

export default App;
