import { HelpButton } from "../StyleFile/StyleFile";
import HelpIcon from "../Photo/HelpIcon.svg";

function HelpButton1() {
  return (
    <div>
      <HelpButton>
        <img
          src={HelpIcon}
          alt="도움말 아이콘"
          style={{ width: "16px", height: "16px", marginRight: "5px" }} //이미지크기조정
        />
        인증이 안되시나요?
      </HelpButton>
    </div>
  );
}

export default HelpButton1;
