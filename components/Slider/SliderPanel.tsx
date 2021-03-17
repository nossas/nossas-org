import React from "react";
import styled from "@emotion/styled";
import Carousel from "./Carousel";
import { Group, Panel } from "./Panel";

type Item = {
  src: string;
  alt: string;
  title: string;
  description: string;
  href: string;
  link: string;
};

export interface Props {
  items: Item[];
  isMobile: boolean;
  minH?: string;
}

const CustomStyles = styled.div<Pick<Props, "minH">>`
  ${(props) =>
    props.minH &&
    `
    .carousel .slider-wrapper {
      min-height: ${props.minH} !important;
    }
  `}
`;

const SliderPanel: React.FC<Props> = ({ items, isMobile, minH }) => {
  const Content = isMobile ? Panel : Group;
  let newItems: any[] = isMobile
    ? items
    : Array.from(new Array(items.length / 2)).map((_v: any, index: number) => {
        const keys = { 0: [0, 2], 1: [2, 4], 2: [4, 6] };
        return items.splice(keys[index][0], keys[index][1]);
      });

  return (
    <Carousel
      infiniteLoop
      isMobile={isMobile}
      items={newItems.map((values: any) => (
        <Content items={values} />
      ))}
    />
  );
};

export default SliderPanel;
