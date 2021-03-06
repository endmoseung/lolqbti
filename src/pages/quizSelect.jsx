import { Link } from "react-router-dom";
import styled from "styled-components";
import Answers from "../components/answers";
import QuizQuestion from "../components/quizQuestion";
import { QuizQuestions } from "../Constant/QuizQuestions";
import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

let score = 0;

const QuizSelect = (props) => {
  const [presentQuestion, setQuestion] = useState(0);

  useEffect(() => {
    score = 0;
  }, []); // 첫페이지로 이동했을때 다시 테스트보면 answer가 중첩되므로 mount됬을때 answer를 초기화해준다.

  //다음 페이지로 이동버튼 색깔 관리 state
  const [nextPage, setNextPage] = useState("gray");
  //다음 페이지로 이동버튼 클릭 상태 관리 state
  const [canClick, setCanClick] = useState("none");
  //마지막페이지에서 문항 클릭시 버튼 비활성화 관리 state
  const [pointerEvents, setPointerEvents] = useState("auto");
  //MBTI 점수 계산 관리 state
  const [Score, setScore] = useState("");

  const handleAnswer = (event) => {
    QuizQuestions[presentQuestion].options.filter((item) => {
      if (item.ans === event.target.innerText) {
        score += item.score;
      }
      return score;
    });

    if (presentQuestion < QuizQuestions.length - 1) {
      setQuestion(presentQuestion + 1);
    }
    if (presentQuestion === QuizQuestions.length - 1) {
      setNextPage("white");
      setCanClick("auto");
      setPointerEvents("none");
    }
    setScore(score);
  };

  // const list = {
  //   visible: { opacity: 1 },
  //   hidden: { opacity: 0 },
  // };

  return (
    <Wrapper
    // as={motion.div}
    // initial="hidden"
    // animate="visible"
    // variants={list}
    // transition={{ ease: "easeOut", duration: 1 }}
    >
      <Quiz>
        <div>LOL QUIZ</div>
      </Quiz>
      <QuizQuestion Questions={QuizQuestions[presentQuestion].q}></QuizQuestion>
      {QuizQuestions[presentQuestion].options.map((item) => (
        <Answers
          key={Math.random()}
          pointerEvents={pointerEvents}
          presentQuestion={presentQuestion}
          mainLength={QuizQuestions.length}
          onClick={handleAnswer}
          Questions={item.ans}
        ></Answers>
      ))}
      {presentQuestion === QuizQuestions.length - 1 ? (
        <Link
          style={{ pointerEvents: canClick }}
          className="link"
          to={"/loading"}
          state={{
            loadingText: "소환사님의 티어를 비교하고있습니다.",
            preventPage: Score,
          }}
        >
          <div style={{ backgroundColor: nextPage }} className="nextPage">
            결과보기
          </div>
        </Link>
      ) : (
        ""
      )}
      <ProgressBar>
        <BarText>{(presentQuestion + 1) * 10}%</BarText>
        <Bar>
          <ProgressedBar
            presentWidth={((presentQuestion + 1) / QuizQuestions.length) * 100}
          />
        </Bar>
      </ProgressBar>
      <QuizInfo></QuizInfo>
    </Wrapper>
  );
};
export default QuizSelect;

const Wrapper = styled.div`
  width: 500px;
  background-color: black;
  color: ${({ theme }) => theme.colors.WHITE};
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  justify-content: center;
  position: relative;
  white-space: pre-line;

  .link {
    width: 100%;
    margin-top: 30px;
    pointer-events: none;
  }
  .nextPage {
    text-align: center;
    width: 80%;
    box-sizing: content-box;
    padding: 10px;
    color: black;
    font-size: ${({ theme }) => theme.fontSize.MIDDLE};
    font-weight: bold;
    margin: auto;
    transition: 700ms all ease-out;
  }
`;

const Quiz = styled.div`
  margin-bottom: 20px;
  position: absolute;
  top: 20px;
`;

const ProgressBar = styled.div`
  width: 100%;
  position: relative;
  margin-top: 25px;
`;

const BarText = styled.div`
  top: -3px;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  position: absolute;
  font-size: ${({ theme }) => theme.fontSize.PROGRESSBAR};
  text-align: center;
  background-color: black;
  color: ${({ theme }) => theme.colors.MAIN_BG};
  clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
  border: 1px solid gold;
  box-sizing: content-box;
  padding: 0px 15px;
  z-index: 100;
`;

const Bar = styled.div`
  width: 100%;
  height: 7px;
  border: 1px solid gold;
  clip-path: polygon(2% 0%, 98% 0%, 100% 100%, 0% 100%);
`;

const ProgressedBar = styled.div`
  width: ${({ presentWidth }) => `${presentWidth}%`};
  height: 100%;
  background-color: ${({ theme }) => theme.colors.MAIN_BG};
  transition: 1s;
  clip-path: polygon(2% 0%, 98% 0%, 100% 100%, 0% 100%);
`;

const QuizInfo = styled.div``;
