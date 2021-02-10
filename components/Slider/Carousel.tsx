import React from "react";
import styled from "@emotion/styled";
import { Button, Image } from "@chakra-ui/react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

interface CarouselProps {
  items: React.ReactNode[];
  isMobile?: boolean;
}

const CarouselStyled: React.FC<CarouselProps> = styled(
  ({ className, items }) => (
    <Carousel
      className={className}
      showThumbs={false}
      showIndicators={false}
      dynamicHeight={true}
      showStatus={false}
      infiniteLoop={true}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <Button
            variant="ghost"
            onClick={onClickHandler}
            title={label}
            mr="10px"
          >
            <Image src="/static/media/arrow-left-carousel.png" />
          </Button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <Button
            variant="ghost"
            onClick={onClickHandler}
            title={label}
            ml="10px"
          >
            <Image src="/static/media/arrow-right-carousel.png" />
          </Button>
        )
      }
    >
      {items.map((content: React.ReactNode) => (
        <div>{content}</div>
      ))}
    </Carousel>
  )
)`
  .slide {
    background: none;
  }
  .carousel-slider {
    display: flex;
    flex-direction: row;
    align-items: center;

    ${(props: any) =>
      props.isMobile &&
      `
      width: calc(100% + 60px) !important;
      margin-left: -30px;
    `}
  }
`;

export default CarouselStyled;
