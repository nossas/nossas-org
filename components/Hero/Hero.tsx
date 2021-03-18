import React from "react";
import { Box, Flex, Image, Heading, StyleProps } from "@chakra-ui/react";
import Video from "../Video";

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
  return (
    <section>
      <Flex
        justifyContent="center"
        minHeight={["600px", "670px"]}
        maxHeight={["600px", "670px"]}
        bgColor={bgColor}
        position="relative"
      >
        {bgImage && !videoUrl && (
          <Image
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
