import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Capture from "../components/capture";
import HomeButton from "../components/homeButton";
import html2canvas from "html2canvas";
import Kakaotalk from "../components/kakaotalk";
import Facebook from "../components/facebook";

const QuizResult = (props) => {
  const { state } = useLocation();
  let rank;
  let percent;
  const scoreAnalyst = () => {
    if (state < 7) {
      rank = "Bronze";
      percent = 100;
    } else if (state < 14) {
      rank = "Silver";
      percent = 80;
    } else if (state < 21) {
      rank = "Gold";
      percent = 50;
    } else if (state < 28) {
      rank = "Platinum";
      percent = 20;
    } else if (state < 33) {
      rank = "Diamond";
      percent = 3;
    } else if (state < 41) {
      rank = "Master";
      percent = 1;
    } else {
      rank = "Challenger";
      percent = 0.3;
    }
  };
  scoreAnalyst();
  const tier = "/images/tier/" + rank + ".jpeg";

  const capture = () => {
    html2canvas(document.body).then((canvas) => {
      const link = document.createElement("a");
      link.download = "LOLQuiz";
      link.href = canvas.toDataURL();
      document.body.appendChild(link);
      link.click();
    });
  };

  return (
    <QuizWrapper>
      <QuizTitle>소환사님의 뇌지컬 티어는?</QuizTitle>
      <img src={tier} alt="" />
      <TierText>{rank}</TierText>
      <Info>
        당신은 상위 <span className="rank">{percent}</span>%의 뇌지컬을
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
  font-size: ${({ theme }) => theme.fontSize.BIG};
  color: white;
  img {
    margin-top: 20px;
    width: 200px;
    height: 250px;
  }
  .rank {
    font-size: ${({ theme }) => theme.fontSize.VERYBIG};
  }
`;

const QuizTitle = styled.div``;

const TierText = styled.div`
  margin-top: 10px;
`;

const Info = styled.div`
  margin: 20px 0;
`;
