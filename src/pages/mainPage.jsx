import React from "react";
import styled from "styled-components";
import Button from "../components/button";
import { Link } from "react-router-dom";
import CircleInfo from "../components/circleInfo";

const MainPage = (props) => {
  return (
    <PageWrapper>
      <Header>
        <HeaderTitle>LOLQBTI</HeaderTitle>
        <HeaderText>
          리그오브레전드 게임 속 상황으로 당신의 뇌지컬Tier 또는 MBTI를
          알아보세요!
        </HeaderText>
      </Header>
      <Main>
        <Mbti>
          <MbtiTitle>LOL MBTI</MbtiTitle>
          <CircleInfo></CircleInfo>
          <MbtiText>
            당신의 게임성향을 통해 MBTI와 그에 맞는 챔피언을 확인해보세요
          </MbtiText>
          <Link to="/mbti/select">
            <Button buttonName={"무료로 MBTI 검사하기"}></Button>
          </Link>
        </Mbti>
        <Quiz>
          <QuizTitle>LOL Quiz</QuizTitle>
          <CircleInfo></CircleInfo>
          <QuizText>
            게임속 구체화된 상황으로 당신의 뇌지컬을 Tier로 확인해보세요
          </QuizText>
          <Link to="/quiz/select">
            <Button buttonName={"무료로 Quiz 풀기"}></Button>
          </Link>
        </Quiz>
      </Main>
    </PageWrapper>
  );
};

export default MainPage;

const PageWrapper = styled.div`
  width: 500px;
  background-color: black;
  height: 100%;
  color: white;
`;

const Header = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 8px;
  border-bottom: 1px solid white;
`;
const HeaderTitle = styled.div`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
`;
const HeaderText = styled.div`
  font-size: 20px;
`;
const Main = styled.div`
  display: flex;
  height: 70%;
`;
const Mbti = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  border-right: 1px solid white;
  text-align: center;
  padding: 8px;
  align-items: center;
`;
const MbtiText = styled.div`
  font-size: 18px;
  line-height: 30px;
  margin: 40px 0;
`;
const MbtiTitle = styled.div`
  font-size: 25px;
  font-family: "FrizQuadrataBold";
  margin-bottom: 10px;
`;
const Quiz = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 8px;
  align-items: center;
`;

const QuizText = styled.div`
  font-size: 18px;
  line-height: 30px;
  margin: 40px 0;
`;
const QuizTitle = styled.div`
  font-size: 25px;
  font-family: "FrizQuadrataBold";
  margin-bottom: 10px;
`;
