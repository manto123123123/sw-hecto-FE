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
      <ContentStack>
        마사딕 선생님
        <h1>예~마 샤딕입니다</h1>
      </ContentStack>
    </Trainer>
  );
};

export default StudentButton;
