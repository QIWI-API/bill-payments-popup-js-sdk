import React, { useEffect } from 'react';
import styled from 'styled-components';
import Support from './Support';
import ConfirmModal from './ConfirmModal';
import { useState } from 'react';

const Container = styled.div`
  position: relative;
  width: 820px;
  height: 624px;
  border-radius: 10px;
  box-shadow: ${props => props.theme.popupShadow};
  background-color: #fff;

  @media (max-width: 900px) {
    width: 100%;
    height: 100%;
    border-radius: 0px;
  }

  @media (max-width: 475px) {
    background-color: #fff;
  }
`;

const CloseButton = styled.button`
  appearance: none;
  background: transparent;
  border: none;
  font-size: 1rem;
  position: ${props => props.theme.closeButtonInsidePopup ? 'absolute' : 'fixed'};;
  right: 1rem;
  top: 1rem;
  color: ${props => props.theme.closeButtonInsidePopup ? '#000' : '#AAA'};
  outline: none;
  z-index: 2;
  cursor: pointer;
  
  @media (max-width: 475px) {
    right: 5px;
    top: 5px;
  }

  &:hover,
  &:focus,
  &:active {
    color: #CCC;
  }
`;

const Popup = ({ children, isActive, onClose, className }) => {
  const [isConfirmModalActive, setIsConfirmModalActive] = useState(false);
  const showConfirmModal = () => setIsConfirmModalActive(true)
  const closeConfirmModal = () => setIsConfirmModalActive(false)

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        closeConfirmModal()
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <React.Fragment>
      <div className={className} onClick={showConfirmModal} id="qiwi-checkout-popup">
        <Container onClick={e => e.stopPropagation()}>
          <CloseButton onClick={showConfirmModal}>✕</CloseButton>
          {children}
        </Container>
        <Support />
      </div>
      <ConfirmModal
        isActive={isConfirmModalActive}
        onAccept={onClose}
        onReject={closeConfirmModal}
        message="Вы уверены, что хотите закрыть окно?"
      />
    </React.Fragment>
  );
};

const StyledPopup = styled(Popup)`
  position: fixed;
  z-index: 100000;
  display: ${props => (props.isActive ? 'flex' : 'none')};
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  
  background-color: ${props => props.theme.overlayBackground};
  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  ${Support} {
    display: ${props => props.showSupportBlock ? 'block' : 'none'};
    margin-top: 18px;
  }
  
  @media (max-width: 820px) {
    ${Support} {
      display: none;
    }  
  }
`;

export default StyledPopup;
