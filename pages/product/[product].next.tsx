import React from 'react'
import { useRouter } from 'next/router'

import Canvas from '@/components/canvas'
import Main from '@/layout/main'

const Detail: React.FunctionComponent = () => {
  const router = useRouter()

  const { product } = router.query

  return (
    <Main title="Orient by G.K.">
      <div style={{ padding: 12 }}>
        <Canvas />
      </div>
    </Main>
  )
}

export default Detail