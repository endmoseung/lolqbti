import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Capture from "../components/capture";
import HomeButton from "../components/homeButton";
import { QuizResults } from "../Constant/QuizResult";
import html2canvas from "html2canvas";
import Kakaotalk from "../components/kakaotalk";
import Facebook from "../components/facebook";

const QuizResult = (props) => {
  const { state } = useLocation();
  let tierIndex;
  const scoreAnalyst = () => {
    if (state < 7) {
      tierIndex = 0;
    } else if (state < 14) {
      tierIndex = 1;
    } else if (state < 21) {
      tierIndex = 2;
    } else if (state < 28) {
      tierIndex = 3;
    } else if (state < 33) {
      tierIndex = 4;
    } else if (state < 41) {
      tierIndex = 5;
    } else {
      tierIndex = 6;
    }
  };
  scoreAnalyst();
  const tier = "/images/tier/" + QuizResults[tierIndex].tier + ".jpeg";
  const rank = 0.7;

  const capture = () => {
    html2canvas(document.body).then((canvas) => {
      const link = document.createElement("a");
      link.download = "LOLQuiz";
      link.href = canvas.toDataURL();
      document.body.appendChild(link);
      link.click();
    });
  };

  console.log(state);
  return (
    <QuizWrapper>
      <QuizTitle>소환사님의 뇌지컬 티어는?</QuizTitle>
      <img src={tier} alt="" />
      <TierText>{QuizResults[tierIndex].tier}</TierText>
      <Info>
        당신은 상위 <span className="rank">{rank}</span>%의 뇌지컬을
        소유중입니다.
      </Info>
      <HomeButton></HomeButton>
      <Kakaotalk></Kakaotalk>
      <Facebook></Facebook>
      <Capture onClick={capture}></Capture>
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
  color: white;
  img {
    margin-top: 20px;
    width: 200px;
    height: 250px;
  }
  .rank {
    font-size: 30px;
  }
`;

const QuizTitle = styled.div``;

const TierText = styled.div`
  margin-top: 10px;
`;

const Info = styled.div`
  margin: 20px 0;
`;
