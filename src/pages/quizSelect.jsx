import { Link } from "react-router-dom";
import styled from "styled-components";
import Answers from "../components/answers";
import QuizQuestion from "../components/quizQuestion";
import { QuizQuestions } from "../Constant/QuizQuestions";
import React, { useState } from "react";

const QuizSelect = (props) => {
  const [presentQuestion, setQuestion] = useState(0);

  const handleClick = (event) => {
    if (presentQuestion < QuizQuestions.length - 1) {
      setQuestion(presentQuestion + 1);
    }
    if (presentQuestion === QuizQuestions.length - 1) {
      setNextPage("white");
      setCanClick("auto");
    }
  };

  //다음 페이지로 이동버튼 색깔 관리 state
  const [nextPage, setNextPage] = useState("gray");
  //다음 페이지로 이동버튼 클릭 상태 관리 state
  const [canClick, setCanClick] = useState("none");

  return (
    <Wrapper>
      <Quiz>
        <div>LOL QUIZ</div>
      </Quiz>
      <QuizQuestion Questions={QuizQuestions[presentQuestion].q}></QuizQuestion>
      <Answers
        Questions={QuizQuestions[presentQuestion].options[0].ans}
        onClick={handleClick}
      ></Answers>
      <Answers
        Questions={QuizQuestions[presentQuestion].options[1].ans}
        onClick={handleClick}
      ></Answers>
      <Answers
        Questions={QuizQuestions[presentQuestion].options[2].ans}
        onClick={handleClick}
      ></Answers>
      {presentQuestion === QuizQuestions.length - 1 ? (
        <Link
          style={{ pointerEvents: canClick }}
          className="link"
          to={"/quiz/result"}
        >
          <div style={{ backgroundColor: nextPage }} className="nextPage">
            결과보기
          </div>
        </Link>
      ) : (
        ""
      )}
    </Wrapper>
  );
};

export default QuizSelect;

const Wrapper = styled.div`
  width: 500px;
  background-color: black;
  color: ${({ theme }) => theme.colors.WHITE};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  justify-content: center;
  position: relative;

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
    font-size: 20px;
    font-weight: bold;
    margin: auto;
    transition: 300ms all ease-out;
  }
`;

const Quiz = styled.div`
  margin-bottom: 20px;
  position: absolute;
  top: 20px;
`;
