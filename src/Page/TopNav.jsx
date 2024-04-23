import React from "react";
import { LayoutWrapper, ButtonWrapper } from "../StyleFile/StyleFile";
import LoginButton from "../Component/LoginButton";
import MemberButton from "../Component/MemberButton";
import Logo from "../Component/Logo";

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
