import styled from "styled-components";

//----------------------------------TopNav div-----------------------------------------
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

//-----------------------로그인 회완가입버튼 묶는 div------------------------------

export const ButtonWrapper = styled.div`
  //탑네비게이션바 회원가입버튼과 로그인버튼을 묶는 div영역
  //회원가입버튼,로그인버튼을 묶음
  & > *:not(:last-child) {
    margin-right: 20px;
  }
`;

//----------------------------------MainNav1 div --------------------------------------------
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

//-------------------------------------------MainNav2 div------------------------------------
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

//--------------------------------------BottomNav div----------------------------------
export const BottomNav = styled.div`
  /* WF Footer */

  /* Auto layout */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 64px 104px;
  gap: 32px;
  flex-wrap: wrap; // 여러 줄로 나누어질 수 있게 함

  width: 1512px;
  height: 229px;

  background: #ffffff;
`;

//-----------------------------------------메인페이지 BottomButton ------------------------------------
export const BottomButton = styled.button`
  width: auto; // 버튼의 너비를 auto로 지정합니다.
  height: 21px; // 버튼의 높이를 21픽셀로 지정합니다.
  background: none; // 버튼의 배경을 없애기 위해 'none' 값을 지정합니다.
  border: none; // 버튼의 테두리를 없애기 위해 'none' 값을 지정합니다.
  cursor: pointer; // 마우스가 버튼 위에 올라갔을 때 커서 모양을 포인터(손가락 모양)로 변경합니다.

  // WF Body/Body Small
  // 이 주석은 아마 디자인 시스템에서 사용되는 특정 스타일 가이드나 컨벤션을 참조하는 것으로 보입니다.

  font-family: "Inter"; // 버튼의 글꼴 가족을 'Inter'로 지정합니다.
  fonst-weight: Bold;
  font-style: normal; // 글꼴 스타일을 'normal'(기본값)으로 지정합니다.
  font-weight: 400; // 글꼴 굵기를 400으로 지정합니다. 이는 일반적인 굵기(보통)에 해당합니다.
  font-size: 14px; // 글꼴 크기를 14픽셀로 지정합니다.
  line-height: 150%; // 줄 간격을 글꼴 크기의 150%로 설정합니다. 이는 박스 높이와 같거나 21픽셀에 해당합니다.
  text-align: center; // 텍스트를 가운데 정렬합니다.
  letter-spacing: -0.01em; // 글자 간격을 -0.01em으로 조정합니다. 이는 글자 간격을 조금 좁게 만듭니다.
  font-feature-settings: "calt" off; // 'Contextual Alternates' 폰트 기능을 끕니다.
  color: #000000; // 글꼴 색상을 검정색으로 지정합니다.
  flex: none; // flex 아이템이 컨테이너 안에서 자동으로 커지거나 줄어들지 않도록 설정합니다.
  order: 0; // flex 아이템의 순서를 지정합니다. 여기서는 0(기본값)으로 설정되어 있습니다.
  flex-grow: 0; // flex 아이템이 컨테이너의 여분 공간을 차지하지 않도록 설정합니다.
`;

//------------------------------------메인페이지 BottomButton div---------------------------
export const BottomButtondiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start; // 시작점에서 정렬
  align-items: flex-start;
  padding: 0px;
  gap: 20px; // 간격을 적절하게 조정

  width: auto;
  height: auto; // 높이를 auto로 조정하여 내용물에 맞게 조정되도록 함

  @media (max-width: 768px) {
    // 뷰포트 폭이 768px 이하일 경우
    flex-direction: column; // 세로로 나열
    align-items: left; // 센터 정렬로 변경하여 버튼들이 가운데에 위치하도록 함
  }
`;

//------------------------------------메인페이지 BottomNav 오른쪽4개 버튼 래핑 -------------------------------
export const RightButtonsWrapper = styled.div`
  display: flex;
  margin-left: auto; // 왼쪽의 모든 여백을 차지하여 오른쪽 정렬
  gap: 10px; // 버튼 사이의 간격
`;
