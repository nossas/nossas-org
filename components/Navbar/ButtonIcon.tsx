import React from "react";
import styled from "@emotion/styled";

const Styles = styled.span<{ isOpen?: boolean }>`
  svg {
    transform: scale(1.8);
  }

  ${(props) =>
    props.isOpen &&
    `
    transform: rotate(45deg);
  `}
`;

const ButtonIcon: React.FC<{ isOpen?: boolean }> = ({ isOpen }) => {
  return (
    <Styles isOpen={isOpen}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          fill="#BCBEC0"
          fillRule="evenodd"
          d="M10.477.4h3.03v9.924H23.6v2.99H13.506V23.6h-3.03V13.315H.4v-2.991h10.077V.4z"
          clipRule="evenodd"
        ></path>
      </svg>
    </Styles>
  );
};

export default ButtonIcon;
