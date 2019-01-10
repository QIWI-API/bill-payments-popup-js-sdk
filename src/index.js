import React from 'react';
import ReactDOM from 'react-dom';
import {
  extractCreateInvoiceParams,
  extractOpenInvoiceParams
} from './helpers';
import App from './App';

const showCheckoutPopup = invoiceParams =>
  new Promise((resolve, reject) => {
    const targetElement = document.createElement('div');
    document.body.appendChild(targetElement);

    const unmountPopup = () => {
      ReactDOM.unmountComponentAtNode(targetElement);
      document.body.removeChild(targetElement);
    };

    const onPaymentSucceeded = () => {
      unmountPopup();
      resolve({ ...invoiceParams.queryParams });
    };

    const onPopupClosed = () => {
      unmountPopup();
      reject({ status: 'POPUP_CLOSED' });
    };

    const onPaymentFailed = () => {
      unmountPopup();
      reject({ status: 'PAYMENT_FAILED' });
    };

    window.addEventListener('message', event => {
      if (event.data === 'PAYMENT_SUCCEEDED') {
        setTimeout(onPaymentSucceeded, 2000);
      } else if (event.data === 'PAYMENT_FAILED') {
        setTimeout(onPaymentFailed, 2000);
      }
    });

    ReactDOM.render(
      <App
        invoiceParams={invoiceParams}
        onPopupClosed={onPopupClosed}
      />,
      targetElement
    );
  });

export const createInvoice = (params = {}) => {
  const invoiceParams = extractCreateInvoiceParams(params);
  return showCheckoutPopup(invoiceParams);
};

export const openInvoice = (params = {}) => {
  const invoiceParams = extractOpenInvoiceParams(params);
  return showCheckoutPopup(invoiceParams);
};
