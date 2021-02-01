import React from "react";
import Slider, { SliderProps } from "./Slider";
import { Group, Panel } from "./Panel";

type Item = {
  src: string;
  alt: string;
  title: string;
  description: string;
  href: string;
  link: string;
};

export interface Props extends SliderProps {
  items: Item[];
  isMobile: boolean;
}

const renderItems = (items: any[], Content: React.ElementType) =>
  items.map((values: any, index: number) => (
    <div key={index}>
      <Content items={values} />
    </div>
  ));
const SliderPanel: React.FC<Props> = ({ items, isMobile, ...props }) => {
  const Content = isMobile ? Panel : Group;
  let newItems = isMobile
    ? items
    : Array.from(new Array(items.length / 2)).map((_v: any, index: number) => {
        const keys = { 0: [0, 2], 1: [2, 4], 2: [4, 6] };
        return items.splice(keys[index][0], keys[index][1]);
      });

  return <Slider {...props}>{renderItems(newItems, Content)}</Slider>;
};

export default SliderPanel;
