import React, { useEffect } from 'react';
import styled from 'styled-components';
import Support from './Support/Support';

const Container = styled.div`
  position: relative;
  width: 820px;
  height: 560px;

  @media (max-width: 820px) {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 475px) {
    background-color: #fff;
    padding-top: 60px;
  }
`;

const CloseButton = styled.button`
  appearance: none;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  position: absolute;
  right: 12px;
  top: 12px;
  color: #666;
  outline: none;
  z-index: 2;
  cursor: pointer;
  
  @media (max-width: 475px) {
    top: 40px;
  }
`;

const Popup = ({ children, isActive, onClickClose, className }) => {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        onClickClose();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <div className={className}>
      <Container>
        <CloseButton onClick={onClickClose}>✕</CloseButton>
        {children}
      </Container>
      <Support />
    </div>
  );
};

const StyledPopup = styled(Popup)`
  position: absolute;
  z-index: 1000;
  display: ${props => (props.isActive ? 'flex' : 'none')}
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  
  background-color: rgba(0, 0, 0, 0.7);
  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  ${Support} {
    margin-top: 18px;
  }
  
  @media (max-width: 820px) {
    ${Support} {
      display: none;
    }  
  }

`;

export default StyledPopup;
