import React from "react";
import { Box, Flex, Img, Heading } from "@chakra-ui/react";
import Video from "../Video";
import DownArrow from "./DownArrow";
interface HeroProps {
  bgImage?: string;
  bgColor?: string;
  title?: string;
  titleColor?: string;
  titleAlign?: "left" | "center" | "right";
  left?: string;
  Title?: React.ReactElement;
  Subtitle?: React.ReactElement;
  imageDesc?: string;
  videoUrl?: string;
  maxWidth?: string;
}

const Hero: React.FC<HeroProps> = ({
  bgImage,
  bgColor,
  Title,
  title,
  titleColor,
  titleAlign,
  left,
  Subtitle,
  imageDesc,
  videoUrl,
  maxWidth,
}) => {
  const boxProps = {
    background:
      "linear-gradient(0deg, rgba(45, 0, 161, 0.22), rgba(45, 0, 161, 0.1)),linear-gradient(180deg, #3a3737 0%, rgb(58 58 58 / 26%) 100%),linear-gradient(180deg, rgba(14, 14, 14, 0.2) 0%, rgba(0, 0, 0, 0.77) 100%)",
    mixBlendMode: "multiply",
    opacity: 0.7,
  };

  return (
    <section>
      <Flex
        justifyContent="center"
        minHeight={["600px", "670px"]}
        maxHeight={["600px", "670px"]}
        bgColor={bgColor}
        position="relative"
      >
        {(bgImage || videoUrl) && (
          <Box
            {...boxProps}
            position="absolute"
            width="100%"
            height="100%"
            display="flex"
            alignItems="flex-end"
            justifyContent="center"
            paddingBottom={["40px", "80px"]}
          >
            <DownArrow />
          </Box>
        )}

        {bgImage && !videoUrl && (
          <Img
            src={bgImage}
            alt={imageDesc}
            objectPosition="center"
            objectFit="cover"
            width="100%"
          />
        )}

        {videoUrl && !bgImage && <Video videoUrl={videoUrl} />}

        <Box
          maxWidth={maxWidth}
          text-align={"center"}
          position={"absolute"}
          top={"50%"}
          left={left || "50%"}
          transform={"translate(-50%, -50%)"}
          display="grid"
          gridTemplateRows={Title && Subtitle ? "auto auto" : "auto"}
          gridRowGap={5}
        >
          {title && (
            <Heading
              as="h1"
              fontWeight="bold"
              textColor={titleColor}
              textAlign={titleAlign}
              size="lg"
            >
              {title}
            </Heading>
          )}

          {Title && Title}

          {Subtitle && Subtitle}
        </Box>
      </Flex>
    </section>
  );
};

Hero.defaultProps = {
  titleColor: "white",
  titleAlign: "center",
  maxWidth: "800px",
};

export default Hero;
