import React from 'react';

const CHECKOUT_URL = process.env.CHECKOUT_URL;

const CheckoutIframe = ({ invoiceUid }) => {
  return (
    <iframe
      src={`${CHECKOUT_URL}/form?invoiceUid=${invoiceUid}`}
      frameBorder="0"
      width="100%"
      height="100%"
    />
  );
};

export default CheckoutIframe;
