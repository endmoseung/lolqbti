import React from "react";
import styled from "styled-components";

const Question = ({ Questions }) => {
  const imageUrl = "/images/quiz/" + Questions.background + ".jpeg";
  return (
    <Wrapper>
      <MainQuestion>{Questions.q}</MainQuestion>
      <QuestionWrapper>
        <OutBorder></OutBorder>
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
  font-size: 20px;
  box-sizing: content-box;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  height: 70px;
  max-width: 80%;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.MAIN_BG};
  border: 1px solid white;
`;

const QuestionWrapper = styled.div`
  width: 400px;
  height: 300px;
  position: relative;
  padding: 20px;
  padding-left: 0;
  font-size: 25px;
  margin: auto;
  img {
    width: 400px;
    height: 300px;
  }
`;
const OutBorder = styled.div`
  width: 420px;
  border: 1.5px solid ${({ theme }) => theme.colors.WHITE};
  position: absolute;
  height: 280px;
  top: 30px;
  left: -10px;
`;
