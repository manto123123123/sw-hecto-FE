import React from "react";
import styled from "styled-components";
import LoginButton from "../Component/LoginButton";
import MemberButton from "../Component/MemberButton";

const ButtonWrapper = styled.div`
  & > *:not(:last-child) {
    margin-right: 20px;
  }
`;

function Main() {
  return (
    <ButtonWrapper>
      <MemberButton />
      <LoginButton />
    </ButtonWrapper>
  );
}

export default Main;
