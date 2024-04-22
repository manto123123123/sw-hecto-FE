import React from "react";
import styled from "styled-components";
import LoginButton from "../Component/LoginButton";
import MemberButton from "../Component/MemberButton";
import Logo from "../Component/Logo";

const LayoutWrapper = styled.div`
  // Logo를 따로 빼서 왼쪽으로
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 24px 104px;
  border-bottom: 2px solid black; // 검은색 줄  추가

  @media (max-width: 768px) {
    padding: 24px; // 패딩 줄임
    gap: 20px; // 간격 조정
  }
`;

const ButtonWrapper = styled.div`
  //회원가입버튼,로그인버튼을 묶음
  & > *:not(:last-child) {
    margin-right: 20px;
  }
`;

function Main() {
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

export default Main;
