import React from "react";
import ShareButton from "./shareButton";
import styled from "styled-components";

const Capture = ({ onClick }) => {
  return (
    <CaptureShare onClick={onClick}>
      <ShareButton
        buttonText={"파일로 저장하기"}
        backgroundColor={"lightGray"}
      ></ShareButton>
    </CaptureShare>
  );
};

export default Capture;

const CaptureShare = styled.div`
  margin-top: 20px;
`;
