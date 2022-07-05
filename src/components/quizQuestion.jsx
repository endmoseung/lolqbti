import React from "react";
import styled from "styled-components";

const QuizQuestion = (props) => {
  return (
    <Wrapper>
      <MainQuestion>{props.Questions}</MainQuestion>
    </Wrapper>
  );
};

export default QuizQuestion;

const Wrapper = styled.div`
  text-align: center;
`;
const MainQuestion = styled.div`
  color: ${({ theme }) => theme.colors.WHITE};
  font-size: 30px;
`;
