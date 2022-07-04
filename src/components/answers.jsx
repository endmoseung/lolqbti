import React, { useRef } from "react";
import styled from "styled-components";

const Answers = (props) => {
  const answerDiv = useRef();
  const handleClick = (e) => {
    // answerDiv.current.style.backgroundColor = "blue";
    props.onClick(e);
    props.answerColor();
  };

  return (
    <AnswerWrapper>
      <div ref={answerDiv} className="div" onClick={handleClick}>
        {props.mbtiQuestions}
      </div>
    </AnswerWrapper>
  );
};

export default Answers;

const AnswerWrapper = styled.div`
  width: 100%;
  div {
    cursor: pointer;
    color: white;
    width: 80%;
    text-align: center;
    font-size: 20px;
    margin: auto;
    margin-top: 20px;
    box-sizing: content-box;
    padding: 20px;
  }
  .div:hover {
    background-color: blue;
  }
`;
