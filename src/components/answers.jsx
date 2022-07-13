import { useState } from "react";
import styled from "styled-components";
import theme from "../theme/theme";

const Answers = ({
  onClick,
  pointerEvents,
  Questions,
  presentQuestion,
  mainLength,
}) => {
  const [backgroundColor, setBackgroundColor] = useState(theme.colors.MAIN_BG);
  const handleClick = (e) => {
    onClick(e);
    if (presentQuestion === mainLength - 1) {
      setBackgroundColor("blue");
    }
  };
  return (
    <AnswerWrapper
      onClick={handleClick}
      style={{ pointerEvents: pointerEvents }}
    >
      <Answer backgroundColor={backgroundColor}>{Questions}</Answer>
    </AnswerWrapper>
  );
};

export default Answers;

const AnswerWrapper = styled.div`
  width: 100%;
`;
const Answer = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 4px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.WHITE};
  width: 80%;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.DEFAULT};
  margin: auto;
  margin-top: 20px;
  box-sizing: content-box;
  padding: 20px;
  transition: all 300ms ease-in-out;
  border: 1px solid white;
  &:hover {
    background-color: #5555e9;
    transform: scale(1.02);
  }
  &:active {
    transform: scale(0.95);
  }
`;
