import React from 'react'
import Link from 'next/link'
import { Carousel as Banner } from 'react-responsive-carousel'

import { CarouselProps } from './types'
import * as Styled from './Carousel.styled'

const Carousel: React.FunctionComponent<CarouselProps> = ({
  data
}) => {
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
          <Link key={index} href={`/product/${item.productId}`}>
            <img height="100%" width="100%" src={item.image} />
          </Link>
        ))}
      </Banner>
      <Styled.Bar />
    </Styled.Carousel>
  )
}

export default Carousel