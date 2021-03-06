import React from "react";
import styled from "styled-components";
import Button from "../components/button";
import { Link } from "react-router-dom";
import CircleInfo from "../components/circleInfo";
import theme from "../theme/theme";

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
          <CircleInfo imageURL={"/images/mainpage/left.png"}></CircleInfo>
          <MbtiText>
            당신의 게임성향을 통해 MBTI와 그에 맞는 챔피언을 확인해보세요
          </MbtiText>
          <Link to="/mbti/select">
            <Button buttonText={"무료로 MBTI 검사하기"}></Button>
          </Link>
        </Mbti>
        <Quiz>
          <QuizTitle>LOL Quiz</QuizTitle>
          <CircleInfo imageURL={"/images/mainpage/right.png"}></CircleInfo>
          <QuizText>
            게임속 구체화된 상황으로 당신의 뇌지컬을 Tier로 확인해보세요
          </QuizText>
          <Link to="/quiz/select">
            <Button buttonText={"무료로 Quiz 풀기"}></Button>
          </Link>
        </Quiz>
      </Main>
    </PageWrapper>
  );
};

export default MainPage;

const PageWrapper = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  background-color: black;
  min-height: 100vh;
  color: ${({ theme }) => theme.colors.WHITE};
  @media screen and (max-width: ${theme.mediaScreen.PHONE}) {
    width: 100%;
  }
`;

const Header = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 8px;
  border-bottom: 1px solid white;
  @media screen and (max-width: ${theme.mediaScreen.PHONE}) {
    height: 15%;
  }
`;
const HeaderTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.MAINTEXT};
  font-weight: bold;
  margin-bottom: 20px;
`;
const HeaderText = styled.div`
  font-size: ${({ theme }) => theme.fontSize.MIDDLE};
  line-height: 30px;
`;
const Main = styled.div`
  display: flex;
  height: 70%;
  @media screen and (max-width: ${theme.mediaScreen.PHONE}) {
    flex-direction: column;
    height: 100%;
  }
`;
const Mbti = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid white;
  text-align: center;
  padding: 8px;
  align-items: center;
  @media screen and (max-width: ${theme.mediaScreen.PHONE}) {
    width: 100%;
    border-bottom: 1px solid white;
    border-right: none;
  }
`;
const MbtiText = styled.div`
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  line-height: 30px;
  margin: 40px 0;
`;
const MbtiTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.BIG};
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
  @media screen and (max-width: ${theme.mediaScreen.PHONE}) {
    width: 100%;
  }
`;

const QuizText = styled.div`
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  line-height: 30px;
  margin: 40px 0;
`;
const QuizTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.BIG};
  font-family: "FrizQuadrataBold";
  margin-bottom: 10px;
`;
