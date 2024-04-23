import React from "react";
import {
  Trainer,
  ImagePlaceholder,
  ContentStack,
  StyledImage,
} from "../StyleFile/StyleFile";
import sadick from "../Photo/sadick.jpg";

const StudentButton = () => {
  return (
    <Trainer>
      <ImagePlaceholder>
        <StyledImage src={sadick} alt="트레이너 찾기" />
      </ImagePlaceholder>
      <ContentStack>트레이너 소개란 </ContentStack>
    </Trainer>
  );
};

export default StudentButton;
