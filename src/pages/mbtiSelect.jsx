import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Answers from "../components/answers";
import Question from "../components/question";
import { MbtiQuestions } from "../Constant/MbtiQuestions";

let answer = "";

const MbtiSelect = (props) => {
  const [presentQuestion, setQuestion] = useState(0);

  const [changeColor, setChange] = useState(
    `${({ theme }) => theme.colors.MAIN_BG}`
  );
  useEffect(() => {
    answer = "";
  }, []);
  //다음 페이지로 이동버튼 색깔 관리 state
  const [nextPage, setNextPage] = useState("gray");
  //다음 페이지로 이동버튼 클릭 상태 관리 state
  const [canClick, setCanClick] = useState("none");
  //MBTI 점수 계산 관리 state
  const [MBTI, setMBTI] = useState("");

  const link = useRef();

  const handleNextPage = () => {};

  const handleClick = (event) => {
    setChange("blue");
    for (let i = 0; i < 2; i++) {
      if (
        MbtiQuestions[presentQuestion].options[i].ans === event.target.innerText
      ) {
        answer += MbtiQuestions[presentQuestion].options[i].type.value;
      }
    }
    if (presentQuestion < MbtiQuestions.length - 1) {
      setQuestion(presentQuestion + 1);
    }
    if (presentQuestion === MbtiQuestions.length - 1) {
      setNextPage("white");
      setCanClick("auto");
    }
    setMBTI(answer);
  };
  return (
    <SelectWrapper>
      <ProgressBar></ProgressBar>
      <Question Questions={MbtiQuestions[presentQuestion]}></Question>
      <Answers
        currentColor={changeColor}
        onLink={link}
        onClick={handleClick}
        Questions={MbtiQuestions[presentQuestion].options[0].ans}
      ></Answers>
      <Answers
        currentColor={changeColor}
        onLink={link}
        onClick={handleClick}
        Questions={MbtiQuestions[presentQuestion].options[1].ans}
      ></Answers>
      {presentQuestion === MbtiQuestions.length - 1 ? (
        <Link
          style={{ pointerEvents: canClick }}
          ref={link}
          className="link"
          to="/mbti/result"
          state={{ mbti: MBTI }}
          onClick={handleNextPage}
        >
          <div style={{ backgroundColor: nextPage }} className="nextPage">
            결과보기
          </div>
        </Link>
      ) : (
        ""
      )}
    </SelectWrapper>
  );
};

export default MbtiSelect;

const SelectWrapper = styled.div`
  .title {
    font-size: 30px;
  }
  width: 500px;
  background-color: black;
  color: ${({ theme }) => theme.colors.WHITE};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

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
    font-size: 20px;
    font-weight: bold;
    color: black;
    margin: auto;
    transition: 300ms all ease-out;
  }
`;

const ProgressBar = styled.div``;
