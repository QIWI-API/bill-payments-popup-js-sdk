import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import InvoiceContext from './InvoiceContext';

const scriptElement = document.currentScript;
const parentElement = scriptElement.parentElement;
const targetDiv = document.createElement('div');
const targetElement = parentElement.appendChild(targetDiv);

const invoiceParams = {
  invoiceUid: scriptElement.getAttribute('invoiceUid')
};

ReactDOM.render(
  <InvoiceContext.Provider value={invoiceParams}>
    <App />
  </InvoiceContext.Provider>,
  targetElement
);
