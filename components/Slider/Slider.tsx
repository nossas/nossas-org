import React from "react";
import styled from "@emotion/styled";
import AwesomeSlider from "react-awesome-slider";
import { isMobile } from "react-device-detect";

import "react-awesome-slider/dist/styles.css";

const AwesomeSliderStyled = styled(AwesomeSlider)`
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
  }

  .awssld__next {
    right: -48px;
  }
  .awssld__prev {
    left: -48px;
  }

  @media screen and (min-width: 30em) {
    --slider-height-percentage: 40%;
    --control-button-height: 25%;
    --organic-arrow-color: #aaaaaa;

    .awssld__content > div {
      width: 90%;
    }
  }
`;

const Slider = ({ children }) => (
  <AwesomeSliderStyled bullets={isMobile}>{children}</AwesomeSliderStyled>
);

export default Slider;
