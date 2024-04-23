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

export const MainWrapper = styled.div`
  //MainNav div설정

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;

  height: 884px;

  background: #d5fafc;
  box-shadow: inset 0px -2px 0px #2d3648;

  /* Inside auto layout */
  flex: none;
  order: 3;
  align-self: stretch;
  flex-grow: 0;
`;

export const MainWrapper2 = styled.div`
  //MainNav2 div설정

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 104px;
  gap: 40px;

  width: auto;
  height: 1030px;
  border-bottom: 2px solid black; //밑에 검은색 줄 추가

  /* WF Base/White */
  background: #ffffff;

  /* Inside auto layout */
  flex: none;
  order: 4;
  align-self: stretch;
  flex-grow: 0;
`;

export const ButtonWrapper = styled.div`
  //탑네비게이션바 회원가입버튼과 로그인버튼을 묶는 div영역
  //회원가입버튼,로그인버튼을 묶음
  & > *:not(:last-child) {
    margin-right: 20px;
  }
`;
//---------------------------------------Trainer Component div-----------------------------
export const Trainer = styled.div`
  //메인페이지 트레이너 이미지 div설정
  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  width: 418.67px;
  height: 436px;

  /* WF Base/White */
  background: #ffffff;
  /* WF Base/800 ⦿ */
  border: 2px solid #2d3648;
  border-radius: 8px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const ImagePlaceholder = styled.div`
  //트레이너 이미지 부분
  box-sizing: border-box;
  width: 418.67px;
  height: 220px;
  flex: none;
  border-bottom: 2px solid #2d3648;
  border-radius: 8px;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  overflow: hidden; // 컨테이너를 벗어나는 부분을 숨깁니다.
  display: flex; // flex를 사용하여 이미지를 중앙에 위치시킵니다.
  justify-content: center;
  align-items: center;
`;

export const StyledImage = styled.img`
  // 이미지 제한
  max-width: 100%; // 이미지의 최대 너비를 컨테이너의 너비로 제한합니다.
  max-height: 100%; // 이미지의 최대 높이를 컨테이너의 높이로 제한합니다.
`;

export const ContentStack = styled.div`
  //트레이너 소개글 부분
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  gap: 24px;
  width: 418.67px;
  height: 216px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

//---------------------------------------트레이너 이미지 div-----------------------------
export const Trainerdiv = styled.div`
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 40px 0px 0px;
  gap: 24px;
  margin: auto;

  width: 1304px;
  height: 476px;
  border-bottom: 2px solid #2d3648;

  /* Inside auto layout */
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
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

  width: auto; //길이 내용에따라 조절
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
