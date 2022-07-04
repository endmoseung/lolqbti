import React from "react";
import styled from "styled-components";
import HomeButton from "../components/homeButton";

const QuizResult = (props) => {
  return (
    <QuizWrapper>
      <div>퀴즈 결과에용</div>
      <HomeButton></HomeButton>
      <img src="/images/tier/diamond.jpeg" alt="" />
    </QuizWrapper>
  );
};

export default QuizResult;
const QuizWrapper = styled.div`
  background-color: black;
  width: 500px;
  text-align: center;
  div {
    color: white;
  }
`;
