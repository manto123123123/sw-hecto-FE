import styled from "styled-components";

export const LayoutWrapper = styled.div`
  //탑네비게이션바 Logo버튼과 회원가입 로그인버튼 div영역
  display: flex;
  flex-direction: row;
  justify-content: ${(props) =>
    props.justifyContent ||
    "space-between"}; // 기본값 선택 안할시 space between
  align-items: flex-start;
  padding: 24px 104px;
  border-bottom: 2px solid black;
  gap: ${(props) =>
    props.gap || "0px"}; //버튼사이 간격 조절 기본값 선택 안할시 0px

  @media (max-width: 768px) {
    padding: 24px;
    gap: 20px;
  }
`;

export const ButtonWrapper = styled.div`
  //탑네비게이션바 회원가입버튼과 로그인버튼을 묶는 div영역
  //회원가입버튼,로그인버튼을 묶음
  & > *:not(:last-child) {
    margin-right: 20px;
  }
`;

export const TrainerButton = styled.button`
  //트레이너 찾기 버튼css
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 0px;
  gap: 8px;
  background: none; //배경 없음
  border: none; //테두리 없음

  width: auto;
  height: 48px;

  /* Inside auto layout */
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;

  //폰트 css
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.01em;
  font-feature-settings: "calt" off;
  // 텍스트 줄바꿈 방지
  cursor: pointer; // 마우스 오버 시 커서를 포인터로 변경합니다.

  /* WF Base/600 ⦿ */
  color: #717d96;
  filter: drop-shadow(
    0px 4px 4px rgba(0, 0, 0, 0.4)
  ); //텍스트 뒤편에 그림자 추가 투명도 40%센트
  border-bottom: ${(props) =>
    props.isSelected
      ? "2px solid #2D3648"
      : "none"}; //클릭시에 밑줄과 텍스트 색깔 변경
  color: ${(props) => (props.isSelected ? "#2D3648" : "#717d96")};
  cursor: pointer;
`;

export const LoginButton = styled.button`
  //로그인버튼 css
  width: ${(props) =>
    props.width ||
    "99px"}; // props에서 width를 받아오고, 없으면 기본값으로 '99px'을 사용합니다.
  height: 48px; //높이설정
  font-family: "Inter", sans-serif; // 'Inter' 폰트를 사용합니다. 해당 폰트가 로드되어 있어야 합니다.
  font-style: normal;
  font-weight: 700;
  font-size: 16px; //글자크기
  line-height: 24px;
  color: white; // 글자 색상을 흰색으로 설정합니다.
  background: #1db5be; // 배경색 에메랄드
  border-radius: 4px; // 둥글기 조정
  border: none; //테두리 없앰
  cursor: pointer; // 마우스 오버 시 커서를 포인터로 변경합니다.
`;

export const MemberButton = styled.button`
  //회원가입버튼 css
  width: 99px;
  height: 48px;
  font-family: "Inter", sans-serif; // 'Inter' 폰트를 사용합니다. 해당 폰트가 로드되어 있어야 합니다.
  font-style: normal;
  font-weight: 700;
  font-size: 16px; //글자크기
  line-height: 24px;
  color: black; // 글자 색상을 흰색으로 설정합니다.
  background: #ffffff; // 배경 흰색
  border-radius: 6px; // 둥글기 조정
  border: 2px solid #2d3648; //테두리 선 설정
  cursor: pointer; // 마우스 오버 시 커서를 포인터로 변경합니다.
`;
