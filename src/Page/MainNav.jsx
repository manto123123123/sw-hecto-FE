import React from "react";
import { MainWrapper } from "../StyleFile/StyleFile";
import MainImage from "../Photo/Main.jpg";

function MainNav() {
  return (
    <MainWrapper>
      <h1>서비스 제목</h1>
      <img src={MainImage} alt="트레이너 찾기" />
    </MainWrapper>
  );
}

export default MainNav;
