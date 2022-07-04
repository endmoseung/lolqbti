import React from "react";
import styled from "styled-components";
import HomeButton from "../components/homeButton";
import { MbtiResults } from "../Constant/mbtiResult";

const MbtiResult = (props) => {
  return (
    <ResultWrapper>
      <div>mbti결과에용</div>
      <MbtiText>{MbtiResults[0].mbti}</MbtiText>
      <MbtiTitle>{MbtiResults[0].title}</MbtiTitle>
      <MbtiMain>{MbtiResults[0].main}</MbtiMain>
      <HomeButton></HomeButton>
    </ResultWrapper>
  );
};

export default MbtiResult;
const ResultWrapper = styled.div`
  width: 500px;
  background-color: black;
  text-align: center;
  div {
    color: white;
  }
`;

const MbtiText = styled.div`
  color: white;
`;

const MbtiTitle = styled.div`
  color: white;
`;

const MbtiMain = styled.div`
  color: white;
`;
