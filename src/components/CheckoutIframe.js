import React from 'react';
import qs from 'qs';

const CHECKOUT_URL = process.env.CHECKOUT_URL;

const CheckoutIframe = props => {
  const queryString = qs.stringify(props);

  return (
    <iframe
      src={`${CHECKOUT_URL}/form?${queryString}&embedded=true`}
      frameBorder="0"
      width="100%"
      height="100%"
      scrolling="no"
    />
  );
};

export default CheckoutIframe;
