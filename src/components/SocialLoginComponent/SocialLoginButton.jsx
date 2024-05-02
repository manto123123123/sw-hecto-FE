import React from "react";
import styled from "styled-components";

// 소셜 로그인 버튼 스타일링
const SocialLoginButton = styled.a`
  display: inline-block;
  width: 200px;
  height: 50px;
  margin: 10px;
  border-radius: 5px;
  overflow: hidden;
`;

// 소셜 로그인 버튼 이미지
const SocialLoginButtonImg = styled.img`
  width: 100%;
  height: 100%;
`;

// 소셜 로그인 버튼 컴포넌트
function SocialLogin(props) {
  const { imageUrl, url } = props;

  return (
    <SocialLoginButton href={url}>
      <SocialLoginButtonImg src={imageUrl} alt="Social Login Button" />
    </SocialLoginButton>
  );
}

// const KAKAO_REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
// const KAKAO_REDIRECT_URL = process.env.REACT_APP_KAKAO_REDIRECT_URL;
// const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URL}&response_type=code`;

const KAKAO_REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
const KAKAO_REDIRECT_URL = process.env.REACT_APP_VERCEL_KAKAO_REDIRECT_URL;
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URL}&response_type=code`;

// const NAVER_REST_API_KEY = process.env.REACT_APP_NAVER_CLIENT_ID;
// const NAVER_REDIRECT_URL = process.env.REACT_APP_NAVER_REDIRECT_URI;
// const NAVER_AUTH_URL = "";
// const state = process.env.REACT_APP_NAVER_STATE;
// const url = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${client_id}&state=${state}&redirect_uri=${redirect_uri}`;

// 소셜 로그인 버튼을 사용하는 예시
function SocialLoginButtons() {
  return (
    <div>
      <SocialLogin
        imageUrl="./SocialLoginLogo/Google/web_light_sq_ctn@3x.png"
        url={KAKAO_AUTH_URL}
      />
      <SocialLogin
        imageUrl="./SocialLoginLogo/Kakao/kakao_login_large_wide.png"
        url={KAKAO_AUTH_URL}
      />
      <SocialLogin
        imageUrl="./SocialLoginLogo/Naver/btnG_완성형.png"
        url={KAKAO_AUTH_URL}
      />
    </div>
  );
}

export default SocialLoginButtons;
