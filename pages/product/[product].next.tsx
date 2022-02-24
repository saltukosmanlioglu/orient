import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import Main from '@/layout/main'

const Detail: React.FunctionComponent = () => {
  const router = useRouter()

  const { product } = router.query

  return (
    <Main title="Orient by G.K.">
      {product}
    </Main>
  )
}

export default Detail