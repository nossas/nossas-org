import React from "react";
import styled from "@emotion/styled";

const VideoStyled = styled.video`
  object-fit: cover;
  object-position: center;
  width: 100%;
`;

const Video = ({ videoUrl }) => {
  return (
    <VideoStyled autoPlay loop muted>
      <source src={videoUrl} type="video/mp4" />
    </VideoStyled>
  );
};

export default Video;
