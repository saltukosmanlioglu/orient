import React from 'react'
import { useRouter } from 'next/router'

import Main from '@/layout/main'
import Allergens from '@/widgets/allergens'
import ProductDetail from '@/widgets/product-detail'

const Detail: React.FunctionComponent = () => {
  const router = useRouter()

  const { product } = router.query

  return (
    <Main title="Orient by G.K.">
      <img width="100%" src="https://www.klasiksanatlar.com/img/sayfalar/b/1_1598452306_resim.png" alt="" />
      <div style={{ padding: '0 20px' }}>
        <ProductDetail
          description="Haşlanmış yumurta, Taze Baharatlı Renkli Salata (Sarı-kırmızı cherry domates, Izgara yeşil zeytin, Maydanoz, Nane, Reyhan, Limon vinegret, Taze Baharatlı Yeşil Salata)"
          price="85"
          title="Avokado ve Lor Peyniri Ekmek Üstü"
        />
        <Allergens allerjens="Fındık, Nohut, Çilek" />
      </div>
    </Main>
  )
}

export default Detail