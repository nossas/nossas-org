import React from "react";
import styled from "@emotion/styled";
import AwesomeSlider from "react-awesome-slider";

import "react-awesome-slider/dist/styles.css";

const AwesomeSliderStyled = styled(AwesomeSlider)<SliderProps>`
  --slider-height-percentage: 170%;
  --slider-transition-duration: 575ms;
  --organic-arrow-thickness: 4px;
  --organic-arrow-border-radius: 0px;
  --organic-arrow-height: 42px;
  --organic-arrow-color: #000;
  --control-button-background: transparent;
  --control-bullet-color: #6a6a6a;
  --control-bullet-active-color: #6a6a6a;
  --loader-bar-color: #2d00a1;
  --loader-bar-height: 4px;

  --content-background-color: none;
  --organic-arrow-height: 15px;
  --organic-arrow-thickness: 2px;

  --control-button-height: 100%;

  .awssld__content > div {
    width: 100%;
    ${({ px }) =>
      px &&
      `
      padding-left: ${px}px;
      padding-right: ${px}px;
    `}
  }

  .awssld__next {
    ${({ px }) =>
      px
        ? `
      right: -15px;
    `
        : `
      right: -48px;
    `}
  }
  .awssld__prev {
    ${({ px }) =>
      px
        ? `
      left: -15px;
    `
        : `
      left: -48px;
    `}
  }

  @media screen and (min-width: 30em) {
    --slider-height-percentage: ${({ height }) =>
      height ? `${height}%` : "40%"};
    --control-button-height: 25%;
    --organic-arrow-color: #aaaaaa;

    .awssld__content > div {
      width: 90%;
    }
  }
`;

export interface SliderProps {
  height?: number;
  px?: number;
  isMobile: boolean;
}

const Slider: React.FC<SliderProps> = ({ children, height, px, isMobile }) => (
  <AwesomeSliderStyled bullets={isMobile} px={px} height={height}>
    {children}
  </AwesomeSliderStyled>
);

export default Slider;
