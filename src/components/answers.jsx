import styled from "styled-components";
// import theme from "../theme/theme";

const Answers = ({ onClick, pointerEvents, Questions }) => {
  const handleClick = (e) => {
    onClick(e);
  };
  // let backgroundColor = theme.colors.MAIN_BG;
  return (
    <AnswerWrapper style={{ pointerEvents: pointerEvents }}>
      <Answer
        // style={{ backgroundColor: backgroundColor }}
        onClick={handleClick}
      >
        {Questions}
      </Answer>
    </AnswerWrapper>
  );
};

export default Answers;

const AnswerWrapper = styled.div`
  width: 100%;
`;
const Answer = styled.div`
  background-color: ${({ theme }) => theme.colors.MAIN_BG};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.WHITE};
  width: 80%;
  text-align: center;
  font-size: 16px;
  margin: auto;
  margin-top: 20px;
  box-sizing: content-box;
  padding: 20px;
  transition: all 300ms ease-in-out;

  &:hover {
    background-color: #5555e9;
    transform: scale(1.02);
  }
  &:active {
    transform: scale(0.95);
  }
`;
