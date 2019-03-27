import React from 'react';
import IframeWrapper from './IframeWrapper';

const PREORDER_URL = process.env.PREORDER_URL;

const PreorderIframe = ({widgetAlias}) => {
  return (
    <IframeWrapper>
      <iframe
        src={`${PREORDER_URL}/${widgetAlias}?embedded=true&billref=popup`}
        frameBorder="0"
        width="100%"
        height="100%"
        scrolling="no"
      />
    </IframeWrapper>
  );
};

export default PreorderIframe;
