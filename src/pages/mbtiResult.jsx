import React from "react";
import styled from "styled-components";
import HomeButton from "../components/homeButton";

const MbtiResult = (props) => {
  return (
    <ResultWrapper>
      <div>mbti결과에용</div>
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
