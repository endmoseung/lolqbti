import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Answers from "../components/answers";
import Question from "../components/question";
import { MbtiQuestions } from "../Constant/MbtiQuestions";

let answer = "";
const MbtiSelect = (props) => {
  const [presentQuestion, setQuestion] = useState(0);

  useEffect(() => {
    answer = "";
  }, []); // 첫페이지로 이동했을때 다시 테스트보면 answer가 중첩되므로 mount됬을때 answer를 초기화해준다.
  //다음 페이지로 이동버튼 색깔 관리 state
  const [nextPage, setNextPage] = useState("gray");
  //다음 페이지로 이동버튼 클릭 상태 관리 state
  const [canClick, setCanClick] = useState("none");
  //MBTI 점수 계산 관리 state
  const [MBTI, setMBTI] = useState("");
  //마지막페이지에서 문항 클릭시 버튼 비활성화 관리 state
  const [pointerEvents, setPointerEvents] = useState("auto");

  const onClickAnswer = (event) => {
    MbtiQuestions[presentQuestion].options.filter((item) => {
      if (item.ans === event.target.innerText) {
        answer += item.value;
      }
      return answer;
    });

    if (presentQuestion < MbtiQuestions.length - 1) {
      setQuestion(presentQuestion + 1);
    }
    if (presentQuestion === MbtiQuestions.length - 1) {
      setNextPage("white");
      setCanClick("auto");
      setPointerEvents("none");
    }
    setMBTI(answer);
  };
  return (
    <SelectWrapper>
      <Question Questions={MbtiQuestions[presentQuestion]}></Question>
      {MbtiQuestions[presentQuestion].options.map((item) => (
        <Answers
          key={Math.random()}
          pointerEvents={pointerEvents}
          presentQuestion={presentQuestion}
          mainLength={MbtiQuestions.length}
          onClick={onClickAnswer}
          Questions={item.ans}
        ></Answers>
      ))}
      {presentQuestion === MbtiQuestions.length - 1 ? (
        <Link
          style={{ pointerEvents: canClick }}
          className="link"
          to="/loading"
          state={{ loadingText: "결과를 분석중입니다", preventPage: MBTI }}
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
            presentWidth={((presentQuestion + 1) / MbtiQuestions.length) * 100}
          />
        </Bar>
      </ProgressBar>
    </SelectWrapper>
  );
};

export default MbtiSelect;

const SelectWrapper = styled.div`
  padding-top: 20px;
  box-sizing: content-box;
  min-height: 100vh;
  width: 500px;
  background-color: black;
  color: ${({ theme }) => theme.colors.WHITE};
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 400px) {
    width: 100%;
  }

  .link {
    width: 100%;
    margin-top: 20px;
    pointer-events: none;
  }
  .nextPage {
    text-align: center;
    width: 80%;
    box-sizing: content-box;
    padding: 10px;
    font-size: ${({ theme }) => theme.fontSize.MIDDLE};
    font-weight: bold;
    color: black;
    margin: auto;
    transition: 300ms all ease-out;
    border-radius: 4px;
  }
`;

const ProgressBar = styled.div`
  width: 90%;
  position: relative;
  margin-top: 20px;
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
  clip-path: polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%);
`;

const ProgressedBar = styled.div`
  width: ${({ presentWidth }) => `${presentWidth}%`};
  height: 100%;
  background-color: ${({ theme }) => theme.colors.MAIN_BG};
  transition: 1s;
  clip-path: polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%);
`;
