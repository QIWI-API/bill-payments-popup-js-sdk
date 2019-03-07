import React from 'react';
import styled from 'styled-components';
import { Button, PrimaryButton } from './Button';

const Text = styled.div`
    font-family: 'Helvetica Neue', sans-serif;
    border: none;
    font-size: 18px;
    color: #fff;
    text-align: center;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;

    ${Button} {
        margin-left: 20px;
    }

    @media(max-width: 475px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;

        ${Button} {
            margin-left: 0;
            margin-top: 16px;
        }  
    }
`

const ConfirmModal = ({ isActive, onAccept, onReject, className, message }) => {
    return (
        <div className={className}>
            <Text>{message}</Text>
            <ButtonContainer>
                <PrimaryButton onClick={onAccept}>Закрыть</PrimaryButton>
                <Button onClick={onReject}>Отмена</Button>
            </ButtonContainer>
        </div>
    );
}

const StyledConfirmModal = styled(ConfirmModal)`
  position: fixed;
  z-index: 100001;
  display: ${props => (props.isActive ? 'flex' : 'none')};
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;

  background-color: rgba(0, 0, 0, 0.8);

  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${Text} {
      margin-bottom: 100px;
  }
`

export default StyledConfirmModal;