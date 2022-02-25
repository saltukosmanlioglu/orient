import React, { useEffect, useRef } from 'react'

const Canvas: React.FunctionComponent = ({
  children
}) => {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const ctx = ref?.current?.getContext('2d')
    
    const height = ref.current?.height
    const width = ref.current?.width

    if (ctx && width && height) {
      ctx.moveTo(0, height)
      ctx.lineTo(width, height)
      ctx.moveTo(width, height)
      ctx.lineTo(0, height * -1)
      ctx.stroke()
    }
  }, [])


  return (
    <canvas ref={ref} style={{ width: '100%', border: '1px solid red' }}>
      {children}
    </canvas>
  )
}

export default Canvas