import React from "react";
import styled from "styled-components";

const Button = ({ buttonText }) => {
  return (
    <ButtonWrapper>
      <Buttons>{buttonText}</Buttons>
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.div`
  box-sizing: border-box;
  border: 1px solid white;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  width: 150px;
  padding: 3px;
  margin: auto;
  display: flex;
  height: 56px;
  align-items: center;
  position: relative;
  transition: all 150ms ease-out;
  &:hover {
    border-radius: 0;
  }
`;
const Buttons = styled.button`
  background-color: ${({ theme }) => theme.colors.MAIN_BG};
  height: 100%;
  width: 100%;
  padding: 8px;
  cursor: pointer;
  margin: auto;
  border: none;
`;
