import React, { useState } from "react";
import { PhoneNumber } from "../../styles/Style";
import { SendNumberButton, HelpButton } from "../../styles/Buttonstyle";
import HelpIcon from "../../assets/HelpIcon.svg";

function PhoneNumber1() {
  // 전화번호 상태 관리
  const [phone, setPhone] = useState("");

  // 전화번호 입력 시 하이픈 자동 추가
  const handleChange = (e) => {
    const { value } = e.target;
    let formattedValue = value.replace(/\D/g, ""); // 숫자가 아닌 모든 문자 제거
    if (formattedValue.length > 3) {
      formattedValue =
        formattedValue.slice(0, 3) + "-" + formattedValue.slice(3);
    }
    if (formattedValue.length > 8) {
      formattedValue =
        formattedValue.slice(0, 8) + "-" + formattedValue.slice(8, 12);
    }
    setPhone(formattedValue); // 상태 업데이트
  };

  //전화번호가 다 찾는지 확인하는 변수
  const isPhoneFilled = phone.length === 13;

  return (
    <div>
      <PhoneNumber
        type="text"
        placeholder="'-'를 제외한 휴대폰 번호"
        value={phone}
        onChange={handleChange}
      />
      <HelpButton>
        <img
          src={HelpIcon}
          alt="도움말 아이콘"
          style={{ width: "16px", height: "16px", marginRight: "5px" }} //이미지크기조정
        />
        인증이 안되시나요?
      </HelpButton>
      <SendNumberButton isFilled={isPhoneFilled}>
        <h1>인증번호 전송</h1>
      </SendNumberButton>
    </div>
  );
}

export default PhoneNumber1;
