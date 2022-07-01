import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const QuizSelect = (props) => {
  return (
    <Link to={"/quiz/result"}>
      <Quiz>
        <div>mbti 고르세용</div>
      </Quiz>
    </Link>
  );
};

export default QuizSelect;
const Quiz = styled.div``;
