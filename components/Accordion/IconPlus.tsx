import React from "react";
import styled from "@emotion/styled";

const Svg = styled.svg`
  margin-top: 50px !important;

  ${(props: any) =>
    props.transform &&
    `
    transform: rotate(-45deg);
  `}
`;

function Icon({ transform }: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="53"
      height="53"
      fill="none"
      viewBox="0 0 53 53"
      transform={transform}
    >
      <path
        fill="#BCBEC0"
        fillRule="evenodd"
        d="M12.192 15.39l3.303-3.303 10.818 10.819 11.003-11.003 3.26 3.26-11.003 11.003 11.212 11.212-3.302 3.303L26.27 29.469 15.285 40.454l-3.26-3.26L23.01 26.207 12.192 15.39z"
        clipRule="evenodd"
      ></path>
    </Svg>
  );
}

export default Icon;
