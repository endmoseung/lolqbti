import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Loading = (props) => {
  const location = useLocation();
  const loadingText = location.state.loadingText;
  const preventValue = location.state.preventPage;
  const navigator = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigator(
        isNaN(preventValue) === true ? "/mbti/result" : "/quiz/result",
        {
          state: preventValue,
        }
      );
    }, 3000);
  }, [navigator, preventValue]);

  return (
    <LoadingWrapper>
      <LoadingText>
        귀여운 유미가<br></br> {loadingText}
      </LoadingText>
      <ImageWrapper>
        <ImageBorder></ImageBorder>
        <Image src="/images/loading/yummi.gif" alt=""></Image>
      </ImageWrapper>
    </LoadingWrapper>
  );
};

export default Loading;
const LoadingWrapper = styled.div`
  width: 500px;
  background-color: black;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  @media screen and (max-width: 400px) {
    font-size: ${({ theme }) => theme.fontSize.BIG};
  }
`;
const LoadingText = styled.div`
  color: ${({ theme }) => theme.colors.WHITE};
  font-family: "CookieRun-Regular";
  margin-bottom: 30px;
`;
const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 400px;
  height: 300px;
  @media screen and (max-width: 400px) {
    width: 300px;
    height: 200px;
  }
`;

const ImageBorder = styled.div`
  position: absolute;
  top: -10px;
  left: 10px;
  width: 380px;
  height: 320px;
  border: solid white 2px;
  @media screen and (max-width: 400px) {
    width: 280px;
    height: 220px;
  }
`;
