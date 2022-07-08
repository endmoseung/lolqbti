import React from "react";
import styled from "styled-components";
import ShareButton from "./shareButton";

const Facebook = (props) => {
  function shareFacebook() {
    window.open(
      "http://www.facebook.com/sharer.php?u=https://lolqbti.netlify.app/"
    );
  }

  return (
    <FacebookShare onClick={shareFacebook}>
      <ShareButton
        buttonText={"페이스북 공유하기"}
        backgroundColor={"#3b5997"}
      ></ShareButton>
    </FacebookShare>
  );
};

export default Facebook;

const FacebookShare = styled.div`
  margin-top: 20px;
`;
