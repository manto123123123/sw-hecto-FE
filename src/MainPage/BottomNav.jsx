import React from "react";
import {
  BottomNav,
  BottomButton,
  BottomButtondiv,
  RightButtonsWrapper,
} from "../styles/Style";
import Logo from "../MainpageComponent/Logo";

function BottomNav1() {
  return (
    <BottomNav>
      <Logo />
      <BottomButtondiv>
        <BottomButton>Copyright 2024 FITNESS.UNIV</BottomButton>
        <RightButtonsWrapper>
          <BottomButton>Privacy Policy</BottomButton>
          <BottomButton>Terms & Conditions</BottomButton>
          <BottomButton>Cookie Policy</BottomButton>
          <BottomButton>Contact</BottomButton>
        </RightButtonsWrapper>
      </BottomButtondiv>
    </BottomNav>
  );
}

export default BottomNav1;
