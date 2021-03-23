import React from "react";
import styled from "@emotion/styled";
import { Button, Image } from "@chakra-ui/react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

interface CarouselProps {
  items: React.ReactNode[];
  infiniteLoop?: boolean;
  isMobile?: boolean;
  showStatus?: boolean;
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
  ({ className, items, infiniteLoop, showStatus }) => (
    <Carousel
      className={className}
      showThumbs={false}
      showIndicators={false}
      dynamicHeight={true}
      showStatus={showStatus}
      infiniteLoop={infiniteLoop}
      statusFormatter={(currentItem: number, total: number) =>
        `${currentItem} / ${total}`
      }
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <Arrow
          direction="previous"
          disabled={!infiniteLoop && !hasPrev}
          label={label}
          onClick={onClickHandler}
        />
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <Arrow
          direction="next"
          disabled={!infiniteLoop && !hasNext}
          label={label}
          onClick={onClickHandler}
        />
      )}
    >
      {items.map((content: React.ReactNode, index: number) => (
        <div key={index} style={{ padding: "10px 5px" }}>
          {content}
        </div>
      ))}
    </Carousel>
  )
)`
  .slide {
    background: none;
  }

  .carousel-status {
    font-family: Bebas Neue;
    font-size: 30px;
    font-weight: 700;
    color: #bcbec0;
    text-shadow: none;
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
  showStatus: false,
};

export default CarouselStyled;
