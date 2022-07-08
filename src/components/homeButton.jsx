import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeButton = (props) => {
  return (
    <Link to={"/"}>
      <ButtonWrapper>
        <Button>다시 테스트 하기</Button>
      </ButtonWrapper>
    </Link>
  );
};

export default HomeButton;
const ButtonWrapper = styled.div`
  box-sizing: border-box;
  border: 1px solid white;
  width: 80%;
  padding: 3px;
  margin: auto;
  display: flex;
  height: 56px;
  align-items: center;
`;

const Button = styled.button`
  background-color: #0bc6e3;
  height: 100%;
  width: 100%;
  cursor: pointer;
  margin: auto;
  color: ${({ theme }) => theme.colors.WHITE};
  font-size: 18px;
  font-weight: bold;
`;
