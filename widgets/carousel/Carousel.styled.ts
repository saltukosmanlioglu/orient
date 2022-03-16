import styled from 'styled-components'

export const Carousel = styled.section`
  position: relative;

  .dot {
    width: 12px !important;
    height: 12px !important;
    border-radius: 50% !important;
    border: 2px solid #1a2930 !important;
    margin-left: 0px !important;
    background-color: transparent !important;
    opacity: 1 !important;
  }

  .selected {
    background-color: #1a2930 !important;
  }
  
  .control-dots {
    margin: 4px 0 !important;
  }
`

export const Bar = styled.div`
  position: absolute; 
  bottom: 0; 
  left: 0;
  right: 0; 
  z-index: 10; 
  height: 2px; 
  background-color: #3d5955;
`

export const ProductImage = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
`