import React from "react";
import { MainWrapper2, Trainerdiv } from "../StyleFile/StyleFile";
import Trainer from "../Component/Trainer";

function MainNav2() {
  return (
    <MainWrapper2>
      <Trainerdiv>
        <Trainer />
        <Trainer />
        <Trainer />
      </Trainerdiv>
    </MainWrapper2>
  );
}

export default MainNav2;
