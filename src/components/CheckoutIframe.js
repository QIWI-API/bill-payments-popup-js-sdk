import React from 'react';
import styled from 'styled-components';
import qs from 'qs';


const IframeWrapper = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

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
