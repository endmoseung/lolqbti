import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Answers from "../components/answers";
import Question from "../components/question";
import { MbtiQuestions } from "../Constant/MbtiQuestions";

const MbtiSelect = (props) => {
  const [presentQuestion, setQuestion] = useState(0);

  const [changeColor, setChange] = useState(
    `${({ theme }) => theme.colors.MAIN_BG}`
  );

  const handleColor = () => {};

  const link = useRef();
  const nextPage = useRef();
  const mbtiScore = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  };

  const handleClick = (event) => {
    setChange("blue");
    if (presentQuestion < 7) {
      setQuestion(presentQuestion + 1);
    }
    link.current.style.pointerEvents = "auto";
    nextPage.current.style.backgroundColor = "white";
    // for(let i=0;i<2;i++){
    //   if(MbtiQuestions[presentQuestion].options[i].ans===event.target.innerText){
    //     mbtiScore.{MbtiQuestions[presentQuestion].options[i].type.value}++
    //   }
    // }
  };
  return (
    <SelectWrapper>
      <h1 className="title">LOL MBTI</h1>
      <ProgressBar></ProgressBar>
      <Question mbtiQuestions={MbtiQuestions[presentQuestion]}></Question>
      <Answers
        currentColor={changeColor}
        answerColor={handleColor}
        onLink={link}
        onClick={handleClick}
        mbtiQuestions={MbtiQuestions[presentQuestion].options[0].ans}
      ></Answers>
      <Answers
        currentColor={changeColor}
        answerColor={handleColor}
        onLink={link}
        onClick={handleClick}
        mbtiQuestions={MbtiQuestions[presentQuestion].options[1].ans}
      ></Answers>
      {presentQuestion === MbtiQuestions.length - 1 ? (
        <Link ref={link} className="link" to={"/mbti/result"}>
          <div ref={nextPage} className="nextPage">
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
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
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
    background-color: gray;
    margin: auto;
    transition: 300ms all ease-out;
  }
`;

const ProgressBar = styled.div``;
