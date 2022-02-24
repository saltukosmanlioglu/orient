import React from 'react'
import { useRouter } from 'next/router'

import Main from '@/layout/main'

const Detail: React.FunctionComponent = () => {
  const router = useRouter()
  
  const { food } = router.query

  return (
    <Main title="Orient by G.K.">
      {food}
    </Main>
  )
}

export default Detail