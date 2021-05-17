import React from "react";
import {
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Box,
  Stack,
  Image,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Carousel } from "../../components/Slider";

const BoxStyled = styled(Box)`
  position: relative;
  text-align: center;
  border-top-width: 1px;

  &:first-child {
    border: none;
  }
`;

export const ImageText = ({ src, text, alt }: any) => (
  <BoxStyled borderColor="gray.light" mb="10px">
    <Box
      width="2px"
      height="40px"
      backgroundColor="gray.light"
      // left={["45%", null, "48%"]}
      margin={["0 calc(45% + 5px)", null, "0 calc(48% + 3.5px)"]}
    />
    <Flex
      height={["130px", "100px"]}
      alignItems="center"
      justifyContent="center"
      direction="column"
      marginBottom="10px"
    >
      <Image width="auto !important" height="auto" src={src} alt={alt} />
    </Flex>
    <Text size="xs" minH={["145px"]}>
      {text}
    </Text>
  </BoxStyled>
);

export const Timeline = ({ title, titleVisibility, children }: any) => (
  <Stack direction="column" spacing="0">
    <Box
      borderBottomWidth="1px"
      borderBottomColor="gray.light"
      position="relative"
      paddingBottom="5px"
      margin={["0 30px", null, "0"]}
    >
      <Heading
        as="h3"
        size="sm"
        color="gray.main"
        fontWeight="700"
        textAlign="center"
        visibility={titleVisibility}
      >
        {title}
      </Heading>
      <Box
        width="11px"
        height="11px"
        borderRadius="full"
        backgroundColor="gray.light"
        position="absolute"
        bottom="-5px"
        left={["45%", null, "48%"]}
        visibility={titleVisibility}
      />
    </Box>
    <Stack flex="1" px="30px" spacing="0">
      {children}
    </Stack>
  </Stack>
);

interface Item {
  src: string;
  alt?: string;
  text: string;
}

interface TimelineItem {
  [key: string]: Item[];
}

interface ControllerProps {
  items: TimelineItem;
  isMobile?: boolean;
}

export const TimelineController: React.FC<ControllerProps> = ({
  items,
  isMobile,
}) => {
  let timelineItems: React.ReactNode[] = Object.keys(items).map(
    (year, index: number) => (
      <Timeline key={`timeline-${index}`} title={year}>
        {items[year].map((item, index) => (
          <ImageText
            key={`timeline-item-${index}`}
            src={item.src}
            alt={item.alt}
            text={item.text}
          />
        ))}
      </Timeline>
    )
  );

  if (isMobile) return <Carousel isMobile items={timelineItems} />;

  let timeline = [];
  // Fix lists not multiple
  let arrayLength = Number((Object.keys(items).length / 4).toFixed());
  // Mount new list with ideal columns
  Array.from(new Array(arrayLength)).forEach(() => {
    let items = timelineItems.splice(0, 4);
    const lastItemsCount = 4 - items.length;
    if (lastItemsCount > 0) {
      const part = timeline[timeline.length - 1];
      items.unshift(part.slice(4 - lastItemsCount, 4));
    }

    timeline.push(items);
  });

  return (
    <Carousel
      items={timeline.map((items) => (
        <SimpleGrid columns={items.length}>{items}</SimpleGrid>
      ))}
    />
  );
};

TimelineController.defaultProps = {
  isMobile: false,
};

export default Timeline;
