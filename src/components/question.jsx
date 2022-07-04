import React from "react";
import styled from "styled-components";

const Question = (props) => {
  const imageUrl = "/images/quiz/" + props.mbtiQuestions.background + ".jpeg";

  console.log(imageUrl);
  return (
    <QuestionWrapper>
      <div className="mainTitle">{props.mbtiQuestions.q}</div>
      <div className="outBorder"></div>
      <img src={imageUrl} alt="" />
    </QuestionWrapper>
  );
};

export default Question;

const QuestionWrapper = styled.div`
  width: 400px;
  height: 300px;
  position: relative;
  padding: 20px;
  padding-left: 0;
  font-size: 25px;
  .mainTitle {
    color: red;
    position: absolute;
    top: 40px;
    left: 20px;
    z-index: 0;
  }
  img {
    width: 400px;
    height: 280px;
  }
  .outBorder {
    width: 420px;
    border: 1.5px solid white;
    position: absolute;
    height: 280px;
    top: 20px;
    left: -10px;
  }
`;
