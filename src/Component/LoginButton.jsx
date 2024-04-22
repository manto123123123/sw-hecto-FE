import React from "react";
import styled from "styled-components";

// 로그인 버튼을 위한 스타일 컴포넌트
const LoginButton = styled.button`
  width: 99px;
  height: 48px;
  font-family: "Inter", sans-serif; // 'Inter' 폰트를 사용합니다. 해당 폰트가 로드되어 있어야 합니다.
  font-style: normal;
  font-weight: 700;
  font-size: 16px; //글자크기
  line-height: 24px;
  color: white; // 글자 색상을 흰색으로 설정합니다.
  background: #1db5be; // 배경을 투명하게 설정합니다.
  border-radius: 4px; // 둥글기 조정
  border: none; //테두리 없앰
  cursor: pointer; // 마우스 오버 시 커서를 포인터로 변경합니다.
`;

// 로그인 버튼 컴포넌트를 사용하는 예제
const LoginButtons = () => {
  return <LoginButton>로그인</LoginButton>;
};

export default LoginButtons;
