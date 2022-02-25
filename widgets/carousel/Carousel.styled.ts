import styled from 'styled-components'

export const Carousel = styled.section`
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
  zIndex: 10; 
  height: 2px; 
  backgroundColor: #3d5955;
`