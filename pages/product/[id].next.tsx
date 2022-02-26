import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import Main from '@/layout/main'
import Allergens from '@/widgets/allergens'
import ProductDetail from '@/widgets/product-detail'

import { ProductDetailProps } from './types'

const Detail: React.FunctionComponent = () => {
  const [data, setData] = useState<ProductDetailProps>()

  const router = useRouter()

  const { id } = router.query

  const getProduct = useCallback(() => {
    fetch(`localhost:3000?lang=${localStorage.getItem('lang')}&id=${id}`, { method: 'GET' })
      .then(response => response.json())
      .then(data => {
        setData({
          allergens: "Fındık, Nohut, Çilek",
          description: "Haşlanmış yumurta, Taze Baharatlı Renkli Salata (Sarı-kırmızı cherry domates, Izgara yeşil zeytin, Maydanoz, Nane, Reyhan, Limon vinegret, Taze Baharatlı Yeşil Salata)",
          image: "https://www.klasiksanatlar.com/img/sayfalar/b/1_1598452306_resim.png",
          name: "Avokado ve Lor Peynirli Ekmek Üstü",
          price: "85"
        })
      })
      .catch((error) => {
        setData({
          allergens: "Fındık, Nohut, Çilek",
          description: "Haşlanmış yumurta, Taze Baharatlı Renkli Salata (Sarı-kırmızı cherry domates, Izgara yeşil zeytin, Maydanoz, Nane, Reyhan, Limon vinegret, Taze Baharatlı Yeşil Salata)",
          image: "https://www.klasiksanatlar.com/img/sayfalar/b/1_1598452306_resim.png",
          name: "Avokado ve Lor Peynirli Ekmek Üstü",
          price: "85"
        })
        console.log(error)
      })
  }, [id])

  useEffect(() => getProduct(), [])

  return data ? (
    <Main title={`${data.name} | Orient by G.K.`}>
      <img width="100%" src={data.image} />
      <div style={{ padding: '0 20px' }}>
        <ProductDetail
          description={data.description}
          price={data.price}
          title={data.name}
        />
        <Allergens allerjens={data.allergens} />
      </div>
    </Main>
  ) : null
}

export default Detail