import React from "react";
import styled from "styled-components";
import HomeButton from "../components/homeButton";
import { QuizResults } from "../Constant/QuizResult";

const QuizResult = (props) => {
  const tier = "/images/tier/" + QuizResults[6].tier + ".jpeg";
  const rank = 0.7;
  return (
    <QuizWrapper>
      <div className="title">당신의 뇌지컬 티어는?</div>
      <img src={tier} alt="" />
      <div className="tierText">{QuizResults[6].tier}</div>
      <div className="info">
        당신은 상위 <span className="rank">{rank}</span>%의 뇌지컬을
        소유중입니다.
      </div>
      <HomeButton></HomeButton>
    </QuizWrapper>
  );
};

export default QuizResult;
const QuizWrapper = styled.div`
  background-color: black;
  width: 500px;
  text-align: center;
  padding: 20px;
  font-size: 25px;
  div {
    color: white;
  }
  img {
    margin-top: 20px;
    width: 200px;
    height: 250px;
  }
  .rank {
    font-size: 30px;
  }
  .tierText {
    margin-top: 10px;
  }
  .info {
    margin: 20px 0;
  }
`;
