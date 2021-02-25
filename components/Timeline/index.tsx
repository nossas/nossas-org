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

export const ImageText = ({ src, text, alt }: any) => (
  <Box textAlign="center">
    <Flex
      height="100px"
      alignItems="center"
      justifyContent="center"
      direction="column"
      marginBottom="10px"
    >
      <Image src={src} alt={alt} />
    </Flex>
    <Text size="xs" minH={["145px"]}>
      {text}
    </Text>
  </Box>
);

const Timeline = ({ title, children }: any) => (
  <Stack direction="column" spacing="20px">
    <Box
      borderBottomWidth="1px"
      borderBottomColor="nossas.lightgray"
      position="relative"
      paddingBottom="5px"
    >
      <Heading
        as="h3"
        size="sm"
        color="nossas.darkgray"
        fontWeight="700"
        textAlign="center"
      >
        {title}
      </Heading>
      <Box
        width="11px"
        height="11px"
        borderRadius="full"
        backgroundColor="nossas.lightgray"
        position="absolute"
        bottom="-5px"
        left="49%"
      />
    </Box>
    <Stack flex="1" px="30px">
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
}

export const TimelineController: React.FC<ControllerProps> = ({ items }) => {
  return (
    <SimpleGrid columns={Object.keys(items).length}>
      {Object.keys(items).map((year, index: number) => (
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
      ))}
    </SimpleGrid>
  );
};

export default Timeline;
