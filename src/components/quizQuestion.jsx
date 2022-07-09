import React from "react";
import styled from "styled-components";

const QuizQuestion = ({ Questions }) => {
  return (
    <Wrapper>
      <MainQuestion>{Questions}</MainQuestion>
    </Wrapper>
  );
};

export default QuizQuestion;

const Wrapper = styled.div`
  text-align: center;
`;
const MainQuestion = styled.div`
  color: ${({ theme }) => theme.colors.WHITE};
  font-size: 25px;
`;
