import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Carousel as Banner } from "react-responsive-carousel";

import { CarouselProps } from "./types";
import * as Styled from "./Carousel.styled";

const Carousel: React.FunctionComponent<CarouselProps> = ({ data }) => {
  return (
    <Styled.Carousel>
      <Banner
        autoPlay
        infiniteLoop
        interval={3000}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        stopOnHover
        swipeable
      >
        {data.map((item, index) => (
          <Link key={index} href={`/product/${item.product.id}`}>
            <Styled.ProductImage>
              <Image
                objectFit="cover"
                src={`${process.env.NEXT_APP_FILE_SERVE}${item.image}`}
                layout="fill"
                priority
              />
            </Styled.ProductImage>
          </Link>
        ))}
      </Banner>
      <Styled.Bar />
    </Styled.Carousel>
  );
};

export default Carousel;
