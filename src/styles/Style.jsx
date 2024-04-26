import styled from "styled-components";

//----------------------------------TopNav div-----------------------------------------
export const LayoutWrapper = styled.div`
  //탑네비게이션바 Logo버튼과 회원가입 로그인버튼 div영역
  display: flex; //flexbox 레이아웃을 사용, 요소들을 행(row) 방향으로 배치
  flex-direction: row; //요소들을 수평 방향으로 배치 (기본값)
  justify-content: ${(props) =>
    props.justifyContent ||
    "space-between"}; //props로 받은 값이 있으면 그 값을 사용하고, 없으면 'space-between'을 기본값으로 사용 (요소들 사이에 균등한 간격)
  align-items: flex-start; //수직 축을 기준으로 요소들을 시작점(flex-start)에서 정렬
  padding: 24px 104px; //요소 내부의 상하좌우 여백을 지정. 상하로는 24px, 좌우로는 104px
  border-bottom: 2px solid black; // flex 아이템 간의 간격을 지정. props로 받은 값이 있으면 그 값을 사용하고, 없으면 '0px'을 기본값으로 사용
  gap: ${(props) =>
    props.gap || "0px"}; //버튼사이 간격 조절 기본값 선택 안할시 0px

  @media (max-width: 768px) {
    padding: 24px; //뷰포트의 너비가 768px 이하일 때, 요소 내부의 상하좌우 여백을 모두 24px로 조절
    gap: 20px; //뷰포트의 너비가 768px 이하일 때, flex 아이템 간의 간격을 20px로 조절
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

  display: flex; // Flexbox 레이아웃을 사용합니다.
  flex-direction: column; // 아이템들을 수직 방향(열)으로 정렬합니다.
  justify-content: center; // 컨테이너 내부에서 아이템들을 중앙에 위치시킵니다.
  align-items: center; // 아이템들을 가로 방향의 중앙에 정렬합니다.
  padding: 50px; // 모든 방향에서 50px의 안쪽 여백을 설정합니다.
  height: 884px; // 컨테이너의 높이를 884px로 설정합니다.
  background: #d5fafc; // 배경색을 하늘색 계열(#d5fafc)로 설정합니다.
  box-shadow: inset 0px -2px 0px #2d3648; // 안쪽 그림자를 추가하여 안으로 들어간 듯한 효과를 줍니다. 그림자 색상은 #2d3648입니다.
  flex: none; // flex 항목의 크기가 유연하게 변하지 않도록 설정합니다.
  order: 3; // Flexbox 컨테이너 내에서 이 아이템의 순서를 세 번째로 설정합니다.
  align-self: stretch; // 해당 아이템을 부모 요소의 교차 축(cross axis)에 따라 늘립니다.
  flex-grow: 0; // flex 아이템이 컨테이너 내에서 추가 공간을 차지하지 않도록 설정합니다.
`;

//-------------------------------------------MainNav2 div------------------------------------
export const MainWrapper2 = styled.div`
  //MainNav2 div설정

  display: flex; // flexbox 디스플레이 설정을 사용
  flex-direction: column; // 항목을 세로(열) 방향으로 정렬
  align-items: center; // 크로스 축(center)을 기준으로 항목들을 중앙 정렬
  padding: 120px 104px; // 상하 120px, 좌우 104px의 패딩을 추가
  gap: 40px; // flex 항목들 사이의 간격을 40px로 설정
  width: auto; // 너비를 자동으로 설정
  height: 1030px; // 높이를 1030px로 설정
  border-bottom: 2px solid black; // 하단에 2px 두께의 검은색 실선 테두리 추가
  background: #ffffff; // 배경색을 흰색으로 설정
  flex: none; // flex 항목의 확장 또는 축소 비율을 설정하지 않음
  order: 4; // flex 항목의 순서를 4로 설정
  align-self: stretch; // 항목 스스로를 부모 컨테이너의 교차 축에 따라 늘림
  flex-grow: 0; // flex 항목이 컨테이너 내의 여분의 공간을 차지하지 않도록 설정
`;

//---------------------------------------Trainer Component div-----------------------------
export const Trainer = styled.div`
  //메인페이지 트레이너 이미지 div설정

  box-sizing: border-box; // div의 크기 계산 방식을 경계 상자 기준으로 설정
  display: flex; // Flexbox 레이아웃 사용
  flex-direction: column; // 항목을 세로 방향으로 정렬
  align-items: flex-start; // 세로 방향의 시작 지점(flex-start)에서 항목들을 정렬
  padding: 0px; // 내부 여백 없음
  width: 418.67px; // 너비 설정
  height: 436px; // 높이 설정
  background: #ffffff; // 배경색 흰색
  border: 2px solid #2d3648; // 테두리는 2픽셀 굵기의 짙은 회색
  border-radius: 8px; // 테두리 모서리 둥글게
  flex: none; // flex 항목 크기 조정 비활성화
  order: 0; // flex 항목의 순서 기본값
  flex-grow: 0; // flex 항목의 확장 비율 기본값(0은 확장되지 않음)
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
  display: flex; // flexbox 디스플레이 타입 설정
  flex-direction: row; // 항목들을 가로 방향으로 정렬
  align-items: flex-start; // 항목들을 컨테이너의 시작 부분으로 정렬
  padding: 40px 0px 0px; // 상단에 40px, 좌우는 0px, 하단은 0px의 패딩 설정
  gap: 24px; // 항목들 사이의 간격을 24px로 설정
  margin: auto; // 마진을 자동으로 설정하여 중앙 정렬
  width: 1304px; // 너비를 1304px로 설정
  height: 476px; // 높이를 476px로 설정
  border-bottom: 2px solid #2d3648; // 하단에 2px 두께의 #2d3648 색상의 실선 테두리 추가
  flex: none; // flex 항목의 크기 조정을 비활성화
  order: 1; // flex 항목의 순서를 1로 설정
  align-self: stretch; // 컨테이너를 꽉 채우도록 스스로를 늘림
  flex-grow: 0; // flex 항목의 확장 비율을 0으로 설정하여 추가 공간을 차지하지 않음
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

//---------------------------------LoginPage 화면 최상위 div ----------------------------------------------
export const LoginPagediv = styled.div`
  display: flex; // Flexbox 레이아웃을 사용합니다.
  flex-direction: column; // 자식 요소들을 세로 방향(열)으로 정렬합니다.
  justify-content: center; // 세로 방향에서 자식 요소들을 중앙에 위치시킵니다.
  align-items: center; // 가로 방향에서 자식 요소들을 중앙에 위치시킵니다.
  height: 100vh; // 높이를 뷰포트의 100%로 설정합니다.
  h1 {
    // 로그인/회원가입 제목 글꼴 스타일을 정의합니다.
    font-family: "Sans Serif Collection", sans-serif; // 글꼴 패밀리를 지정합니다.
    font-style: normal; // 글꼴 스타일을 일반으로 설정합니다.
    font-weight: 400; // 글꼴 두께를 400으로 설정합니다.
    font-size: 20px; // 글꼴 크기를 20px로 설정합니다.
    line-height: 16px; // 줄 간격을 16px로 설정합니다.
    margin-bottom: 30px; // 하단 여백을 30px로 설정합니다.
  }
`;

//--------------------------------LoginPage 기능박스 div ------------------------------------------
export const LoginBox = styled.div`
  box-sizing: border-box; // 박스 크기 계산 기준을 변경합니다(border와 padding을 포함한 크기로)
  display: flex; // flexbox 레이아웃을 사용합니다
  flex-direction: column; // 자식 요소들을 세로로 배치합니다
  align-items: flex-start; // 자식 요소들을 컨테이너의 시작 지점(왼쪽)으로 정렬합니다
  padding: 25px 15px; // 상하 25px, 좌우 15px의 내부 여백을 설정합니다
  width: 418px; // 너비를 418px로 설정합니다
  height: auto; // 높이를 자동으로 설정합니다(컨텐츠에 따라 달라짐)
  border: 1px solid #c2c2c2; // 1px 두께의 #c2c2c2 색깔의 테두리를 설정합니다
  border-radius: 5px; // 테두리 모서리를 5px의 반지름으로 둥글게 만듭니다
  flex: none; // flex 항목의 크기가 유연하게 변하지 않도록 설정합니다
  order: 2; // flex 항목의 순서를 2로 설정합니다
  flex-grow: 0; // flex 항목이 컨테이너 내에서 추가적인 공간을 차지하지 않도록 설정합니다

  blackbold {
    // 휴대폰번호 인증에 사용될 글꼴 스타일을 정의합니다.
    font-family: "Inter"; // 사용할 글꼴 지정
    font-style: normal; // 글꼴 스타일을 일반으로 설정
    font-weight: 600; // 글꼴 두께를 중간보다 조금 더 두껍게 설정
    font-size: 20px; // 글꼴 크기를 20픽셀로 설정
    line-height: 16px; // 줄 간격을 16픽셀로 설정
    color: #2d3648; // 글꼴 색상을 어두운 회색으로 설정
  }

  whitebold {
    //처음오신분 모두 인증해주세요 글꼴
    font-family: "Inter"; // "Inter" 폰트 패밀리 사용
    font-style: normal; // 폰트 스타일을 일반으로 설정
    font-weight: 400; // 폰트 무게를 400으로 설정 (보통의 두께)
    font-size: 14px; // 폰트 크기를 14px로 설정
    line-height: 16px; // 줄 높이를 16px로 설정
    color: #717d96; // 폰트 색상을 #717d96로 설정
    letter-spacing: -0.01em; // 글자 간격을 -0.01em으로 조정
    font-feature-settings: "calt" off; // 'calt' 폰트 기능을 끔
    margin-top: 6px; // 상단 마진을 6px로 설정
  }
`;

//-----------------------------------휴대폰 인증번호받는 box div ----------------------------------------------
export const PhoneNumber = styled.input`
box-sizing: border-box; // 요소의 너비와 높이 계산 방법을 설정합니다. padding과 border가 너비와 높이에 포함됩니다.
width: 388px; // 입력창의 너비를 설정합니다.
height: 43px; // 입력창의 높이를 설정합니다.
border: 1px solid #CBD2E0; // 입력창의 테두리를 설정합니다. 1px 두께, solid 타입, #CBD2E0 색상
border-radius: 6px; // 입력창의 모서리를 둥글게 처리합니다. 모서리의 반경을 6px로 설정
margin-top: 10px; // 입력창 위쪽의 외부 여백을 설정합니다.
::placeholder { // 입력창 내의 플레이스홀더 스타일을 지정합니다.
    font-size: 16px; // 플레이스홀더의 글씨 크기를 설정합니다.
    color: #999; // 플레이스홀더의 글씨 색상을 설정합니다.
    margin-left: 10px; // 플레이스홀더 내용의 왼쪽 여백을 설정합니다.
}
 }
`;
