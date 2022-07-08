import { useEffect } from "react";
import styled from "styled-components";
import ShareButton from "./shareButton";

const Kakaotalk = () => {
  const url = "https://www.youtube.com"; //현재 url가져오기
  useEffect(() => {
    initKakao(); //
  }, []);

  //자바스크립트키로 카카오 init
  const initKakao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init("a3a9461dc1698830366d7c634ca18e01");
      }
    }
  };

  //버튼을 누르면 실행되는 함수
  const shareKakao = () => {
    //이부분이 매우 헷갈림 여러 사이트를 참고했는데 이 sendDefault부분을 잘 봐야한다.
    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "LOLQbti",
        description: "#mbti #리그오브레전드 #퀴즈 #뇌지컬 #롤 #티어",
        imageUrl:
          "http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
      social: {
        likeCount: 286,
        commentCount: 45,
        sharedCount: 845,
      },
      buttons: [
        {
          title: "웹으로 보기",
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
        {
          title: "앱으로 보기",
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };

  return (
    <KakaoShare onClick={shareKakao}>
      <ShareButton
        buttonText={"카카오톡 공유하기"}
        backgroundColor={"#f0d900"}
      ></ShareButton>
    </KakaoShare>
  );
};

export default Kakaotalk;

const KakaoShare = styled.div`
  margin-top: 20px;
`;
