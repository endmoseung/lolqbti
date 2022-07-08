import React from "react";
import styled from "styled-components";

const ShareButton = ({ buttonText, backgroundColor }) => {
  return (
    <ButtonWrapper>
      <Buttons backgroundColor={backgroundColor}>{buttonText}</Buttons>
    </ButtonWrapper>
  );
};

export default ShareButton;

const ButtonWrapper = styled.div`
  box-sizing: border-box;
  border: 1px solid white;
  width: 80%;
  padding: 3px;
  margin: auto;
  display: flex;
  height: 56px;
  align-items: center;
  margin-top: 20px;
`;
const Buttons = styled.button`
  background-color: ${({ backgroundColor }) => `${backgroundColor}`};
  color: ${({ theme }) => theme.colors.WHITE};
  height: 100%;
  width: 100%;
  padding: 8px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  margin: auto;
  border: none;
`;
