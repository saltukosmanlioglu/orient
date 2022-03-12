export interface CarouselDataProps {
  product: {
    id: number
  }
  image: string
}

export interface CarouselProps { 
  data: Array<CarouselDataProps>
}