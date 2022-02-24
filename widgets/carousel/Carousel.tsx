import React from 'react'
import Image from 'next/image'
import { Carousel as Banner } from 'react-responsive-carousel'

import { CarouselProps } from './types'

const Carousel: React.FunctionComponent<CarouselProps> = () => {
  return (
    <div className="carousel-wrapper">
      <Banner
        autoPlay
        infiniteLoop
        interval={3000}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        swipeable
      >
        <div>
          <img height="100%" width="100%" src="https://www.klasiksanatlar.com/img/sayfalar/b/1_1598452306_resim.png" />
        </div> 
        <div>
          <img height="100%" width="100%" src="https://www.klasiksanatlar.com/img/sayfalar/b/1_1598452306_resim.png" />
        </div>
        <div>
          <img height="100%" width="100%" src="https://www.klasiksanatlar.com/img/sayfalar/b/1_1598452306_resim.png" />
        </div>
      </Banner>
    </div >
  )
}

export default Carousel