import React from 'react';
import qs from 'qs';

const CHECKOUT_URL = process.env.CHECKOUT_URL;

const CheckoutIframe = ({page, queryParams}) => {
  const queryString = qs.stringify(queryParams);

  return (
    <iframe
      src={`${CHECKOUT_URL}/${page}?${queryString}&embedded=true`}
      frameBorder="0"
      width="100%"
      height="100%"
      scrolling="no"
    />
  );
};

export default CheckoutIframe;
