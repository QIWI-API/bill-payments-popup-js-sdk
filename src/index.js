import React from 'react';
import ReactDOM from 'react-dom';
import {
  extractCreateInvoiceParams,
  extractOpenInvoiceParams,
  extractPreorderParams
} from './helpers';
import App from './App';

const showCheckoutPopup = ({params, type}) =>
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
      reject({ reason: 'POPUP_CLOSED' });
    };

    const onPaymentFailed = () => {
      unmountPopup();
      reject({ reason: 'PAYMENT_FAILED' });
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
        type={type}
        params={params}
        onPopupClosed={onPopupClosed}
      />,
      targetElement
    );
  });

export const createInvoice = (params = {}) => {
  const invoiceParams = extractCreateInvoiceParams(params);
  return showCheckoutPopup({params: invoiceParams, type: "CHECKOUT"});
};

export const openInvoice = (params = {}) => {
  const invoiceParams = extractOpenInvoiceParams(params);
  return showCheckoutPopup({params: invoiceParams, type: "CHECKOUT"});
};

export const openPreorder = (params = {}) => {
  const preorderParams = extractPreorderParams(params)
  return showCheckoutPopup({params: preorderParams, type: "PREORDER"});
}