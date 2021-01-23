import React from "react";
import styled from "@emotion/styled";

type Props = {
  rotate?: "-90deg" | "90deg";
};

const IconSVG = styled.svg<Props>`
  transform: rotate(${(props) => props.rotate});
`;

const Arrow: React.FC<Props> = ({ rotate }) => (
  <IconSVG
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="26"
    fill="none"
    viewBox="0 0 15 26"
    rotate={rotate}
  >
    <path
      fill="#AAA"
      fillRule="evenodd"
      d="M12.03 13.143L.74 2.398 0 1.694 1.48.286l.74.704 11.29 10.745.01-.01L15 13.131l-.011.01.011.012-1.48 1.408-.01-.011L2.22 25.296 1.48 26 0 24.592l.74-.704 11.29-10.745z"
      clipRule="evenodd"
    ></path>
  </IconSVG>
);

export default Arrow;
