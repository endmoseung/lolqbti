import React from "react";
import styled from "styled-components";

const Question = (props) => {
  const imageUrl = "/images/quiz/" + props.Questions.background + ".jpeg";
  return (
    <Wrapper>
      <MainQuestion>{props.Questions.q}</MainQuestion>
      <QuestionWrapper>
        <div className="outBorder"></div>
        <img src={imageUrl} alt="" />
      </QuestionWrapper>
    </Wrapper>
  );
};

export default Question;

const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const MainQuestion = styled.div`
  font-size: 22px;
  padding: 20px;
  padding-bottom: 0;
`;

const QuestionWrapper = styled.div`
  width: 400px;
  height: 300px;
  position: relative;
  padding: 20px;
  padding-left: 0;
  font-size: 25px;
  margin: auto;
  .mainTitle {
    color: ${({ theme }) => theme.colors.WHITE};
    position: absolute;
    top: 40px;
    left: 20px;
    z-index: 0;
  }
  img {
    width: 400px;
    height: 300px;
  }
  .outBorder {
    width: 420px;
    border: 1.5px solid ${({ theme }) => theme.colors.WHITE};
    position: absolute;
    height: 280px;
    top: 30px;
    left: -10px;
  }
`;
