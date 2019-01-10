import styled from 'styled-components'



export const PrimaryButton = styled.button`
    font-family: 'Helvetica Neue', sans-serif;
    border: 1px solid rgba(0, 0, 0, 0.28);
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    height: 48px;
    min-width: 205px;
    padding: 0 30px;
    cursor: pointer;
    border-radius: 24px;
    color: #000;
    transition: all 300ms;
    background-color: #fff;
    outline: none

    &:hover {
        background-color: #f1f1f1;
    }

    &:active {
        color: #333;
        background-color: #e8e8e8;
    }
`
