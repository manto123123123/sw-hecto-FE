import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 116px; //가로설정
  height: 48px; //높이설정
  font-family: "Inter", sans-serif; // 'Inter' 폰트를 사용합니다. 해당 폰트가 로드되어 있어야 합니다.
  font-style: normal;
  font-weight: 700;
  font-size: 16px; //글자크기
  line-height: 24px;
  color: white; // 글자 색상을 흰색으로 설정합니다.
  background: #ffffff; // 배경을 투명하게 설정합니다.
  border-radius: 4px; // 둥글기 조정
  border: none; //테두리 없앰
  cursor: pointer; // 마우스 오버 시 커서를 포인터로 변경합니다.

  position: absolute;
  left: 8.33%;
  right: 8.33%;
  top: 8.33%;
  bottom: 8.33%;

  /* WF Base/800 ⦿ */
  background: #2d3648;
`;

// 트레이너선택 버튼 컴포넌트
const TrainerButton = () => {
  return <Button>트레이너 찾기</Button>;
};

export default TrainerButton;
