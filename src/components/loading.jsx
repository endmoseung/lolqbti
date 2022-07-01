import React from "react";
import styled from "styled-components";

const Loading = (props) => {
  return (
    <LoadingWrapper>
      <div>귀여운 유미가 결과를 분석중입니다.</div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG18s4wUVegrq_cZvYdtiJtA23APH_tI8piA&usqp=CAU"
        alt=""
      />
    </LoadingWrapper>
  );
};

export default Loading;
const LoadingWrapper = styled.div``;
