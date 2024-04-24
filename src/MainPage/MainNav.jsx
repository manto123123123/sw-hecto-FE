import React from "react";
import { MainWrapper } from "../StyleFile/StyleFile";
import MainImage from "../Photo/Main.jpg";

function MainNav() {
  return (
    <MainWrapper>
      <h1>FITNESS.UNIV</h1>
      <img src={MainImage} alt="트레이너 찾기" />
    </MainWrapper>
  );
}

export default MainNav;
