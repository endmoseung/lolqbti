import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Answers from "../components/answers";
import Question from "../components/question";
import { MbtiQuestions } from "../Constant/MbtiQuestions";

const MbtiSelect = (props) => {
  const [presentQuestion, setQuestion] = useState(0);

  const handleCilck = () => {
    if (presentQuestion < 7) {
      setQuestion(presentQuestion + 1);
    }
  };
  return (
    <SelectWrapper>
      <h1>LOL MBTI</h1>
      <Question mbtiQuestions={MbtiQuestions[presentQuestion]}></Question>
      <Answers
        onClick={handleCilck}
        mbtiQuestions={MbtiQuestions[presentQuestion].options[0].ans}
      ></Answers>
      <Answers
        onClick={handleCilck}
        mbtiQuestions={MbtiQuestions[presentQuestion].options[1].ans}
      ></Answers>
      {presentQuestion === MbtiQuestions.length - 1 ? (
        <Link className="link" to={"/mbti/result"}>
          <div className="nextPage">결과보기</div>
        </Link>
      ) : (
        ""
      )}
    </SelectWrapper>
  );
};

export default MbtiSelect;

const SelectWrapper = styled.div`
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
  }
  .nextPage {
    text-align: center;
    width: 80%;
    box-sizing: content-box;
    padding: 10px;
    color: black;
    background-color: gray;
    margin: auto;
  }
`;
