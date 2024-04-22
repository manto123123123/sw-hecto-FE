import React from "react";
import styled from "styled-components";
import LoginButton from "../Component/LoginButton";
import MemberButton from "../Component/MemberButton";
import Logo from "../Component/Logo";

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 24px 104px;
  border-bottom: 2px solid black;

  @media (max-width: 768px) {
    padding: 24px;
    gap: 20px;
  }
`;

const ButtonWrapper = styled.div`
  //회원가입버튼,로그인버튼을 묶음
  & > *:not(:last-child) {
    margin-right: 20px;
  }
`;

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
