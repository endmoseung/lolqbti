import React from "react";
import styled from "styled-components";

const Answers = (props) => {
  return (
    <AnswerWrapper>
      <div className="div" onClick={props.onClick}>
        {props.mbtiQuestions}
      </div>
    </AnswerWrapper>
  );
};

export default Answers;

const AnswerWrapper = styled.div`
  width: 100%;
  div {
    background-color: red;
    cursor: pointer;
    color: white;
    width: 100%;
    text-align: center;
    font-size: 20px;
    margin-top: 20px;
  }
  .div:hover {
    background-color: blue;
  }
`;
