import React from "react";
import styled from "styled-components";

// 회원가입 버튼을 위한 스타일 컴포넌트
const Member = styled.button`
  width: 99px;
  height: 48px;
  font-family: "Inter", sans-serif; // 'Inter' 폰트를 사용합니다. 해당 폰트가 로드되어 있어야 합니다.
  font-style: normal;
  font-weight: 700;
  font-size: 16px; //글자크기
  line-height: 24px;
  color: black; // 글자 색상을 흰색으로 설정합니다.
  background: #ffffff; // 배경을 투명하게 설정합니다.
  border-radius: 6px; // 둥글기 조정
  border: 2px solid #2d3648; //테두리 선 설정
  cursor: pointer; // 마우스 오버 시 커서를 포인터로 변경합니다.
`;

// 회원가입 버튼 컴포넌트
const MemberButton = () => {
  return <Member>회원가입</Member>;
};

export default MemberButton;
