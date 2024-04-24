import { HelpButton } from "../StyleFile/StyleFile";
import HelpIcon from "../Photo/HelpIcon.png";

function HelpButton1() {
  return (
    <div>
      <img src={HelpIcon} alt="도움말 아이콘" />
      <HelpButton>인증이 안되시나요?</HelpButton>
    </div>
  );
}

export default HelpButton1;
