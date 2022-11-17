import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from "styled-components";
import {themes} from "./themes/themes";
import App from './App';

export const showCheckoutPopup = ({params, type, theme = themes.v1}) =>
  new Promise((resolve, reject) => {
    const targetElement = document.createElement('div');
    document.body.appendChild(targetElement);

    const unmountPopup = () => {
      ReactDOM.unmountComponentAtNode(targetElement);
      document.body.removeChild(targetElement);
    };

    const onPaymentSucceeded = () => {
      unmountPopup();
      resolve({ ...params.queryParams });
    };

    const onPopupClosed = () => {
      unmountPopup();
      reject({ reason: 'POPUP_CLOSED' });
    };

    const onPaymentFailed = () => {
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
      <ThemeProvider theme={theme}>
          <App
              type={type}
              params={params}
              onPopupClosed={onPopupClosed}
          />
      </ThemeProvider>,
      targetElement
    );
  });
