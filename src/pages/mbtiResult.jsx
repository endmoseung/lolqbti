import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Facebook from "../components/facebook";
import HomeButton from "../components/homeButton";
import Kakaotalk from "../components/kakaotalk";
import { MbtiResults } from "../Constant/mbtiResult";
import Capture from "../components/capture";
import html2canvas from "html2canvas";

const MbtiResult = (props) => {
  const { state } = useLocation();
  const sortMbti = state.split("").sort().join(""); //mbti 성향을 받아서 성향별로 sort

  const capture = () => {
    html2canvas(document.body).then((canvas) => {
      const link = document.createElement("a");
      link.download = "LOLMBTI";
      link.href = canvas.toDataURL();
      document.body.appendChild(link);
      link.click();
    });
  };

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
      <Summoner>소환사님의 mbti는?</Summoner>
      <MbtiText>{MbtiResults[soluted].mbti}</MbtiText>
      <MbtiChampion>
        <img src={imageUrl} alt="" />
        <ChampionName>{MbtiResults[soluted].championName}</ChampionName>
      </MbtiChampion>
      <MbtiTitle>{MbtiResults[soluted].title}</MbtiTitle>
      <MbtiMain>{MbtiResults[soluted].main} </MbtiMain>
      <HomeButton></HomeButton>
      <Kakaotalk></Kakaotalk>
      <Facebook></Facebook>
      <Capture fileName={"LOLMBTI"} onClick={capture}></Capture>
    </ResultWrapper>
  );
};

export default MbtiResult;
const ResultWrapper = styled.div`
  width: 500px;
  background-color: black;
  text-align: center;
  padding: 20px;
  div {
    color: white;
  }
  img {
    width: 240px;
    height: 250px;
  }
`;

const Summoner = styled.div`
  font-size: 25px;
  margin-bottom: 10px;
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
`;
const ChampionName = styled.div`
  background-color: ${({ theme }) => theme.colors.MAIN_BG};
  width: 200px;
  text-align: start;
  box-sizing: content-box;
  padding: 15px 20px;
  line-height: 20px;
`;

const MbtiTitle = styled.div`
  font-size: 25px;
  margin-bottom: 10px;
`;

const MbtiMain = styled.div`
  font-size: 16px;
  margin-bottom: 20px;
`;
