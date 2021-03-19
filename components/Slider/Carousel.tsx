import React from "react";
import styled from "@emotion/styled";
import { Button, Image } from "@chakra-ui/react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

interface CarouselProps {
  items: React.ReactNode[];
  infiniteLoop?: boolean;
  isMobile?: boolean;
}

interface ArrowProps {
  direction: "previous" | "next";
  disabled: boolean;
  label?: string;
  onClick?: any;
}

const ARROW_MARGIN: string = "10px";

const Arrow: React.FC<ArrowProps> = ({
  direction,
  disabled,
  label,
  onClick,
}) => {
  let ownProps: { mr?: string; ml?: string } = {};
  if (direction === "previous") ownProps.mr = ARROW_MARGIN;
  else ownProps.ml = ARROW_MARGIN;

  return (
    <Button
      variant="ghost"
      onClick={onClick}
      title={label}
      visibility={disabled ? "hidden" : "visible"}
      disabled={disabled}
      {...ownProps}
    >
      <Image
        src={`/static/media/arrow-${
          direction === "previous" ? "left" : "right"
        }-carousel.png`}
      />
    </Button>
  );
};

const CarouselStyled: React.FC<CarouselProps> = styled(
  ({ className, items, infiniteLoop }) => (
    <Carousel
      className={className}
      showThumbs={false}
      showIndicators={false}
      dynamicHeight={true}
      showStatus={false}
      infiniteLoop={infiniteLoop}
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <Arrow
          direction="previous"
          disabled={!hasPrev}
          label={label}
          onClick={onClickHandler}
        />
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <Arrow
          direction="next"
          disabled={!hasNext}
          label={label}
          onClick={onClickHandler}
        />
      )}
    >
      {items.map((content: React.ReactNode, index: number) => (
        <div key={index} style={{ padding: "10px 0" }}>
          {content}
        </div>
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

CarouselStyled.defaultProps = {
  infiniteLoop: false,
};

export default CarouselStyled;
