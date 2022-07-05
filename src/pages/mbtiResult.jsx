import { useLocation } from "react-router-dom";
import styled from "styled-components";
import HomeButton from "../components/homeButton";
import { MbtiResults } from "../Constant/mbtiResult";

const MbtiResult = (props) => {
  const location = useLocation();
  const mbti = location.state.mbti;
  const sortMbti = mbti.split("").sort().join(""); //mbti 성향을 받아서 성향별로 sort
  const solution = (sortMbti) => {
    //sortMbti를 문자갯수로 재정의 한다음 2개이상인값만 뽑아서 Mbti를 추출하는 함수
    let answer = "";
    let sorted = "";
    let final;
    let cnt = 1;
    for (let i = 0; i < sortMbti.length; i++) {
      if (i === sortMbti.indexOf(sortMbti[i])) {
        answer += sortMbti[i];
      }
      if (sortMbti[i] === sortMbti[i + 1 < sortMbti.length && i + 1]) {
        cnt++;
      } else {
        if (cnt > 1) {
          answer += String(cnt);
        }
        cnt = 1;
      }
    }
    for (let i = 0; i < answer.length; i++) {
      if (isNaN(answer[i + 1]) === false && answer[i + 1] > 1) {
        sorted += answer[i];
      }
    }
    for (let i = 0; i < MbtiResults.length; i++) {
      if (
        MbtiResults[i].mbti.split("").sort().join("") ===
        sorted.split("").sort().join("")
      ) {
        final = i;
        break;
      }
    }
    console.log(answer, sorted, final);
    return final;
  };
  const soluted = solution(sortMbti);
  const imageUrl =
    "/images/mbtichampion/" + MbtiResults[soluted].mbti + ".jpeg";
  return (
    <ResultWrapper>
      <div className="summoner">소환사님의 mbti는?</div>
      <MbtiText>{MbtiResults[soluted].mbti}</MbtiText>
      <MbtiChampion>
        <img src={imageUrl} alt="" />
        <div className="championName">{MbtiResults[soluted].championName}</div>
      </MbtiChampion>
      <MbtiTitle>{MbtiResults[soluted].title}</MbtiTitle>
      <MbtiMain>{MbtiResults[soluted].main} </MbtiMain>
      <HomeButton></HomeButton>
    </ResultWrapper>
  );
};

export default MbtiResult;
const ResultWrapper = styled.div`
  width: 500px;
  background-color: black;
  text-align: center;
  padding: 20px;
  .summoner {
    font-size: 25px;
    margin-bottom: 10px;
  }
  div {
    color: white;
  }
  img {
    width: 240px;
    height: 250px;
    background: linear-gradient(-45deg, transparent 15px, palevioletred 0);
  }
`;

const MbtiText = styled.div`
  color: ${({ theme }) => theme.colors.WHITE};
  font-size: 40px;
  font-weight: bold;
`;

const MbtiChampion = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;

  .championName {
    background-color: ${({ theme }) => theme.colors.MAIN_BG};
    width: 200px;
    text-align: start;
    box-sizing: content-box;
    padding: 15px 20px;
    line-height: 20px;
  }
`;

const MbtiTitle = styled.div`
  font-size: 25px;
  margin-bottom: 10px;
`;

const MbtiMain = styled.div`
  font-size: 16px;
  margin-bottom: 20px;
`;
