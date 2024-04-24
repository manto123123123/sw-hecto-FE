import React from "react";
import { TrainerButton } from "../../styles/Style";
import FindTrainer from "../../assets/FindTrainer.png";

// 트레이너선택 버튼 컴포넌트
const StudentButton = ({ onClick, isSelected }) => {
  return (
    <TrainerButton onClick={onClick} isSelected={isSelected}>
      <img src={FindTrainer} alt="트레이너 찾기" />
      수강생 찾기
    </TrainerButton>
  );
};

export default StudentButton;
