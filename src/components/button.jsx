import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return (
    <ButtonWrapper>
      <button>{props.buttonName}</button>
      <div className="tri"></div>
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.div`
  box-sizing: border-box;
  border: 1px solid white;
  width: 150px;
  padding: 3px;
  margin: auto;
  display: flex;
  height: 56px;
  align-items: center;
  position: relative;
  button {
    background-color: ${({ theme }) => theme.colors.MAIN_BG};
    height: 100%;
    width: 100%;
    padding: 8px;
    cursor: pointer;
    margin: auto;
    border: none;
  }
  button:hover {
    background-color: ${({ theme }) => theme.colors.WHITE};
  }
`;
