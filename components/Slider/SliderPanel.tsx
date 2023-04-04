import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { useWindowSize } from "../../components/Page";
import Carousel from "./Carousel";
import { Panel } from "./Panel";

type Item = {
  src: string;
  alt: string;
  title: string;
  description: string;
  href: string;
  link?: string;
};

export interface Props {
  items: Item[];
  isMobile?: boolean;
  infiniteLoop?: boolean;
  columns?: number;
}

const SliderPanel: React.FC<Props> = ({ items, infiniteLoop, columns = 2 }) => {
  const { isMobile, isSSR } = useWindowSize();

  if (isSSR) {
    return <p>Loading...</p>;
  }

  // const Content = isMobile ? Panel : Group;
  let renderItems: React.ReactNode[] = items.map((item: any, index: number) => (
    <Panel key={`panel-${index}`} items={item} />
  ));

  if (isMobile) {
    return (
      <Carousel
        isMobile={isMobile}
        infiniteLoop={infiniteLoop}
        items={renderItems}
      />
    );
  }

  let renderGroupItems = [];
  // Fix lists not multiple
  let arrayLength = Number((Object.keys(items).length / columns).toFixed());
  // Mount new list with ideal columns
  Array.from(new Array(arrayLength)).forEach(() => {
    let items = renderItems.splice(0, columns);
    const lastItemsCount = columns - items.length;
    if (lastItemsCount > 0) {
      const part = renderGroupItems[renderGroupItems.length - 1];
      items.unshift(part.slice(columns - lastItemsCount, columns));
    }

    renderGroupItems.push(items);
  });

  return (
    <Carousel
      infiniteLoop={infiniteLoop}
      isMobile={isMobile}
      items={renderGroupItems.map((items: any) => (
        <SimpleGrid
          columns={items.length}
          columnGap="20px"
          textTransform="uppercase"
        >
          {items}
        </SimpleGrid>
      ))}
    />
  );
};

export default SliderPanel;
