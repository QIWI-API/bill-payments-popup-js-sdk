import React from 'react';
import styled from 'styled-components';

import KassaBanner from './assets/kassa-banner.svg';
import McBanner from './assets/mc-banner.svg';
import MirBanner from './assets/mir-banner.svg';
import PciBanner from './assets/pci-banner.svg';
import VisaBanner from './assets/visa-banner.svg';

const Partners = styled.div`
  & > * + * {
    margin-left: 9px;
  }

  margin-right: 27px;
`;

const HelpLink = styled.a`
  color: #999;
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  
  &:hover, &:active, &:focus {
    color: #ff8c00;
  }
`;

const Support = ({ className }) => (
  <div className={className}>
    <Partners>
      <KassaBanner />
      <McBanner />
      <MirBanner />
      <PciBanner />
      <VisaBanner />
    </Partners>
    <HelpLink target='_blank' href="https://qiwi.com/support.action">Помощь</HelpLink>
  </div>
);

const StyledSupport = styled(Support)`
  display: flex;
  flex-direction: row;
`;

export default StyledSupport;
