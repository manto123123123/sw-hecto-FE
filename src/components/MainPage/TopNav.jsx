import React from "react";
import { LayoutWrapper, ButtonWrapper } from "../../styles/Style";
import LoginButton from "../MainpageComponent/LoginButton";
import MemberButton from "../MainpageComponent/MemberButton";
import Logo from "../MainpageComponent/Logo";
import { Link } from "react-router-dom";

function TopNav() {
  return (
    <LayoutWrapper>
      <Logo />
      <ButtonWrapper>
        <MemberButton />
        <Link to="/sign-in">
          <LoginButton />
        </Link>
      </ButtonWrapper>
    </LayoutWrapper>
  );
}

export default TopNav;
