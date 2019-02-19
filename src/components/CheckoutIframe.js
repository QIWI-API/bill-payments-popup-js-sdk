import React from 'react';
import qs from 'qs';
import IframeWrapper from './IframeWrapper';

const CHECKOUT_URL = process.env.CHECKOUT_URL;

const CheckoutIframe = ({page, queryParams}) => {
  const queryString = qs.stringify(queryParams);

  return (
    <IframeWrapper>
      <iframe
        src={`${CHECKOUT_URL}/${page}?${queryString}&embedded=true&billref=popup`}
        frameBorder="0"
        width="100%"
        height="100%"
        scrolling="no"
      />
    </IframeWrapper>
  );
};

export default CheckoutIframe;
