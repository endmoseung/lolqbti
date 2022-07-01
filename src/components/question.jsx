import React from "react";
import styled from "styled-components";

const Question = (props) => {
  return (
    <QuestionWrapper>
      {props.mbtiQuestions.q}
      <div className="outBorder"></div>
    </QuestionWrapper>
  );
};

export default Question;

const QuestionWrapper = styled.div`
  width: 300px;
  height: 300px;
  background-color: red;
  position: relative;
  padding: 20px;
  .outBorder {
    width: 320px;
    border: 2px solid white;
    position: absolute;
    height: 280px;
    top: 10px;
    left: -10px;
  }
`;
