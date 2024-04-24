import React, { useState } from "react";
import { LayoutWrapper } from "../StyleFile/StyleFile";
import TrainerButton from "../MainpageComponent/TrainerButton";
import StudentButton from "../MainpageComponent/StudentButton";
import EtcButton from "../MainpageComponent/EtcButton";

function TopNav2() {
  // 선택된 버튼을 추적하는 상태 (null, 'trainer', 'student')
  const [selected, setSelected] = useState(null);

  return (
    <LayoutWrapper justifyContent="flex-start" gap="50px">
      <TrainerButton
        onClick={() => setSelected("trainer")}
        isSelected={selected === "trainer"}
      />
      <StudentButton
        onClick={() => setSelected("student")}
        isSelected={selected === "student"}
      />
      <EtcButton
        onClick={() => setSelected("Etc")}
        isSelected={selected === "Etc"}
      />
    </LayoutWrapper>
  );
}

export default TopNav2;
