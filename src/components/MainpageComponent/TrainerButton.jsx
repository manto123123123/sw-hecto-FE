import React from "react";
import { TrainerButton } from "../../styles/Buttonstyle";
import FindTrainer from "../../assets/FindTrainer.png";

// 트레이너선택 버튼 컴포넌트
const TrainerButton1 = ({ onClick, isSelected }) => {
  return (
    <TrainerButton onClick={onClick} isSelected={isSelected}>
      <img src={FindTrainer} alt="트레이너 찾기" />
      트레이너 찾기
    </TrainerButton>
  );
};

export default TrainerButton1;
