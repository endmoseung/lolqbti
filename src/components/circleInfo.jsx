import React from "react";
import styled, { keyframes } from "styled-components";

const CircleInfo = ({ imageURL }) => {
  return (
    <InfoWrapper>
      <Info>
        <img src={imageURL} alt="" />
      </Info>
      <Border></Border>
    </InfoWrapper>
  );
};

export default CircleInfo;
const rotate = keyframes`
  
    from{
      transform: translate(-50%,-50%) rotate(360deg);
    }
    to{
      transform: translate(-50%,-50%) rotate(-360deg);
    }
  
`;

const InfoWrapper = styled.div`
  border-radius: 50%;
  width: 220px;
  height: 220px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Border = styled.div`
  width: 220px;
  height: 220px;
  content: "";
  z-index: 100;
  position: absolute;
  border: 3px dotted white;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${rotate} 120s linear infinite;
`;

const Info = styled.div`
  position: relative;
  width: 90%;
  height: 90%;
  border-radius: 50%;
  border: 3px solid rgb(193, 143, 41);
  background-color: white;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
