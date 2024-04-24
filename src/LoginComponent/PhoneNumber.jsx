import React, { useState } from "react";
import { PhoneNumber } from "../StyleFile/StyleFile";

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

  return (
    <PhoneNumber
      type="text"
      placeholder="'-'를 제외한 휴대폰 번호"
      value={phone} // 입력값을 phone 상태로 설정
      onChange={handleChange} // 입력값 변경 시 handleChange 함수 호출
    />
  );
}

export default PhoneNumber1;
