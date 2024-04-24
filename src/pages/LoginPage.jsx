import { LoginPagediv, LoginBox } from "../styles/Style";
import PhoneNumber from "../LoginComponent/PhoneNumber";
import HelpButton from "../LoginComponent/HelpButton";

function LoginPage() {
  return (
    <LoginPagediv>
      <h1>로그인/회원가입</h1>
      <LoginBox>
        <blackbold>휴대폰 번호를 인증해주세요</blackbold>
        <whitebold>처음 오신 분, 기존 이용자 모두 진행해주세요 !</whitebold>
        <PhoneNumber />
        <HelpButton />
      </LoginBox>
    </LoginPagediv>
  );
}

export default LoginPage;
