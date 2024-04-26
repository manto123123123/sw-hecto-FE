import React from "react";
import { MainWrapper2, Trainerdiv } from "../../styles/Style";
import Trainer from "../MainpageComponent/Trainer";

function MainNav2() {
  return (
    <MainWrapper2>
      <h1>최고의 트레이너로 모십니다</h1>
      <Trainerdiv>
        <Trainer />
        <Trainer />
        <Trainer />
      </Trainerdiv>
    </MainWrapper2>
  );
}

export default MainNav2;
