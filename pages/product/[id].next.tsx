import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import Loader from '@/components/loader'
import Main from '@/layout/main'
import Allergens from '@/widgets/allergens'
import ProductDetail from '@/widgets/product-detail'

import { ProductDetailProps } from './types'

const Detail: React.FunctionComponent = () => {
  const [data, setData] = useState<ProductDetailProps>()

  const router = useRouter()
  const { id } = router.query

  const getProduct = useCallback(() => {
    fetch(`${process.env.NEXT_APP_API}product/${id}?language=${localStorage.getItem('language')}`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        setData(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [id])

  useEffect(() => getProduct(), [getProduct])

  return data ? (
    <Main title={`${data.title} | Orient by G.K.`}>
      <img width="100%" src={data.image} alt="Product image" />
      <div style={{ padding: '0 20px' }}>
        <ProductDetail
          description={data.description}
          price={data.price}
          title={data.title}
        />
        <Allergens allergens={data.allergens} />
      </div>
    </Main>
  ) : <Loader />
}

export default Detail