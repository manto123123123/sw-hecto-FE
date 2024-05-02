// import React from "react";
import styled from "styled-components";
import Logo from "../CommonComponent/Logo";
import SocialLoginButtons from "./SocialLoginButton";

//소셜로그인 화면 최상위 div
export const SocialLoginPagediv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  height: 100vh;
`;

//소셜로그인 로고밑 Title
export const SocialLoginTitle = styled.div`
  font-family: "Sans Serif Collection", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
`;

//SocialLogin 버튼 컨테이너
export const SocialLoginBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  text-align: center;
  //flex: none; // flex 항목의 크기가 유연하게 변하지 않도록 설정합니다
  //order: 2; // flex 항목의 순서를 2로 설정합니다
  //flex-grow: 0; // flex 항목이 컨테이너 내에서 추가적인 공간을 차지하지 않도록 설정합니다
  //여백 margin
  padding: 25px;
  //크기
  width: 50%;
  height: auto;
  border-radius: 5px; // 테두리 모서리를 5px의 반지름으로 둥글게 만듭니다
  border: 1px solid #c2c2c2;
`;

export const SocialLoginFillBox = styled.div`
  width: 100%;
`;

export const SocialLoginBoxTitle = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  color: #2d3648;
  width: 100%;
  height: auto;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function SocialLoginComponent() {
  return (
    <SocialLoginPagediv>
      <Logo />
      <SocialLoginTitle>로그인/회원가입</SocialLoginTitle>
      <SocialLoginBox>
        <SocialLoginFillBox>
          <SocialLoginBoxTitle>
            SNS계정으로 간편하게 시작하기
          </SocialLoginBoxTitle>
          <ButtonContainer>
            <SocialLoginButtons />
          </ButtonContainer>
        </SocialLoginFillBox>
      </SocialLoginBox>
    </SocialLoginPagediv>
  );
}

export default SocialLoginComponent;
