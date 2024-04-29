import styled from "styled-components";

//---------------------------------------------사용된 버튼들을 모아둔 css파일 ------------------------------------

//-----------------------------------------메인페이지 트레이너 찾기 버튼 css ----------------------------------------------
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

//-----------------------------------------------메인페이지 로그인버튼 css-------------------------------
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

//------------------------------------------메인페이지 회원가입버튼 css -------------------------------------
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

//-----------------------------------------메인페이지 하단 BottomButton css------------------------------------
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

//--------------------------------------로그인페이지 인증안될시 클릭하는 버튼 ---------------------------------------------
export const HelpButton = styled.button`
  width: auto; // 버튼의 너비가 내용물에 따라 자동으로 조정되도록 설정합니다.
  height: auto; // 버튼의 높이가 내용물에 따라 자동으로 조정되도록 설정합니다.
  display: flex; // Flexbox 레이아웃을 사용하여 내부 아이템들을 배치합니다.
  align-items: flex-start; // 버튼 내부의 아이템들을 시작 지점(위쪽)으로 정렬합니다.
  font-family: "Inter"; // 버튼의 글꼴 스타일을 'Inter'로 설정합니다.
  font-style: normal; // 글꼴 스타일을 기본(보통)으로 설정합니다.
  font-weight: 400; // 글꼴 두께를 400으로 설정하여 일반적인 텍스트 두께를 지정합니다.
  font-size: 11px; // 글꼴 크기를 11픽셀로 설정합니다.
  line-height: 15px; // 줄 간격(높이)을 15픽셀로 설정합니다.
  background: none; // 배경을 투명하게 설정하여 기본 배경이 보이지 않도록 합니다.
  border: none; // 테두리를 없애 버튼의 테두리가 보이지 않도록 합니다.
  margin-top: 10px; // 버튼 상단의 외부 여백을 10픽셀로 설정합니다.
  color: #999; // 버튼의 글자 색상을 #999(회색조)로 설정합니다.
  cursor: pointer; // 마우스 오버 시 커서 모양을 포인터(손가락 모양)로 변경합니다.
`;

//---------------------------------------로그인페이지 인증번호 전송 버턴 ----------------------------------------------------
export const SendNumberButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px 24px;
  gap: 8px;
  width: 388px;
  height: 34px;
  background: #1db5be;
  border-radius: 6px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  border: none;
  margin-top: 25px;
  cursor: pointer; // 마우스 오버 시 커서 모양을 포인터(손가락 모양)로 변경합니다.
  opacity: ${(props) => (props.isFilled ? "1" : "0.5")}; // 투명도 조절
  transition: opacity 0.5s ease; // 투명도 변화에 애니메이션 효과 추가
  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 24px;
    letter-spacing: -0.01em;
    font-feature-settings: "calt" off;
    color: #ffffff;
    margin-top: 30px;
  }
`;
