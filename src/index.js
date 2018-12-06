import React from 'react';
import ReactDOM from 'react-dom';
import { extractInvoiceParams } from './helpers';
import App from './App';

export const createInvoice = (params = {}) =>
  new Promise((resolve) => {
    const targetElement = document.createElement('div');
    document.body.appendChild(targetElement);

    const invoiceParams = extractInvoiceParams(params);

    const onUnmountPopup = () => {
      ReactDOM.unmountComponentAtNode(targetElement);
      document.body.removeChild(targetElement);
    };

    const onPaymentSucceeded = () => {
      onUnmountPopup();
      resolve({ status: 'PAYMENT_SUCCEEDED', ...params });
    };

    const onPopupClosed = () => {
      onUnmountPopup();
      resolve({ status: 'POPUP_CLOSED' });
    };

    const onPaymentFailed = () => {
      onUnmountPopup();
      resolve({ status: 'PAYMENT_FAILED' });
    };

    window.addEventListener('message', event => {
      if (event.data === 'paymentSucceeded') {
        setTimeout(onPaymentSucceeded, 2000);
      } else if (event.data === 'paymentFailed') {
        setTimeout(onPaymentFailed, 2000);
      }
    });

    ReactDOM.render(
      <App
        invoiceParams={invoiceParams}
        onPaymentSucceeded={onPaymentSucceeded}
        onPopupClosed={onPopupClosed}
      />,
      targetElement
    );
  });
