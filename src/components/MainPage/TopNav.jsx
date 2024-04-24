import React from "react";
import { LayoutWrapper, ButtonWrapper } from "../../styles/Style";
import LoginButton from "../MainpageComponent/LoginButton";
import MemberButton from "../MainpageComponent/MemberButton";
import Logo from "../MainpageComponent/Logo";

function TopNav() {
  return (
    <LayoutWrapper>
      <Logo />
      <ButtonWrapper>
        <MemberButton />
        <LoginButton />
      </ButtonWrapper>
    </LayoutWrapper>
  );
}

export default TopNav;
