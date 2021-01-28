import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import Video from "../Video";

type HeroProps = {
  bgImage?: string;
  bgColor?: string;
  Title: React.ReactElement;
  Subtitle?: React.ReactElement;
  imageDesc?: string;
  videoUrl?: string;
};

const Hero = ({
  bgImage,
  bgColor,
  Title,
  Subtitle,
  imageDesc,
  videoUrl,
}: HeroProps) => {
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
          maxWidth={"800px"}
          text-align={"center"}
          position={"absolute"}
          top={"50%"}
          left={"50%"}
          transform={"translate(-50%, -50%)"}
          display="grid"
          gridTemplateRows={Title && Subtitle ? "auto auto" : "auto"}
          gridRowGap={5}
        >
          {Title}
          {Subtitle && Subtitle}
        </Box>
      </Flex>
    </section>
  );
};

export default Hero;
