import React from 'react';
import ReactDOM from 'react-dom';
import { extractInvoiceParams } from './helpers';
import App from './App';

export const createInvoice = (params = {}) => {
  const targetElement = document.createElement('div');
  document.body.appendChild(targetElement);

  const onUnmountPopup = () => ReactDOM.unmountComponentAtNode(targetElement);
  const invoiceParams = extractInvoiceParams(params);

  window.addEventListener('message', (event) => {
    if(event.data === 'paymentSucceeded') {
      setTimeout(onUnmountPopup, 2000)
    }
  });

  ReactDOM.render(
    <App invoiceParams={invoiceParams} onUnmountPopup={onUnmountPopup} />,
    targetElement
  );
};
