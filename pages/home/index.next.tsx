import React, { useCallback, useEffect, useState } from 'react'
import { NextPage } from 'next'

import Accordion from '@/components/accordion'
import Product from '@/components/product'
import Main from '@/layout/main'
import Carousel, {
  CarouselDataProps
} from '@/widgets/carousel'
import Lang from '@/widgets/lang'

import * as Styled from './Home.styled'
import { MenuResponse } from './types'
import ScrollUp from '@/components/scroll-up'

const Home: NextPage = () => {
  const [menu, setMenu] = useState<MenuResponse>([])

  const getMenu = useCallback(() => {
    fetch('http://example.com/movies.json', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        setMenu([
          {
            "category": "Sabah",
            "color": "#465956",
            "products": [
              {
                "id": "1",
                "name": "Kahvaltı tabağı"
              },
              {
                "id": "2",
                "name": "Fit brunch"
              },
              {
                "id": "3",
                "name": "Coldpress juice collection"
              }
            ],
          },
          {
            "category": "Salata",
            "color": "#465956",
            "products": [
              {
                "id": "1",
                "name": "Kahvaltı tabağı"
              },
              {
                "id": "2",
                "name": "Fit brunch"
              },
              {
                "id": "3",
                "name": "Coldpress juice collection"
              }
            ],
          },
          {
            "category": "Sushi",
            "color": "#465956",
            "products": [
              {
                "id": "1",
                "name": "Kahvaltı tabağı"
              },
              {
                "id": "2",
                "name": "Fit brunch"
              },
              {
                "id": "3",
                "name": "Coldpress juice collection"
              }
            ],
          },
          {
            "category": "Soft İçecekler",
            "color": "#a29d2f",
            "subCategories": [
              {
                "category": "Bahçeden tazeler",
                "products": [
                  {
                    "id": "1",
                    "name": "Kahvaltı tabağı"
                  },
                  {
                    "id": "2",
                    "name": "Fit brunch"
                  },
                  {
                    "id": "3",
                    "name": "Coldpress juice collection"
                  }
                ]
              },
              {
                "category": "Coldpress juice collection",
                "products": [
                  {
                    "id": "1",
                    "name": "Kahvaltı tabağı"
                  },
                  {
                    "id": "2",
                    "name": "Fit brunch"
                  },
                  {
                    "id": "3",
                    "name": "Coldpress juice collection"
                  }
                ]
              },
              {
                "category": "Ev yapımı taze limonatalar",
                "products": [
                  {
                    "id": "1",
                    "name": "Kahvaltı tabağı"
                  },
                  {
                    "id": "2",
                    "name": "Fit brunch"
                  },
                  {
                    "id": "3",
                    "name": "Coldpress juice collection"
                  }
                ]
              },
              {
                "category": "Buzlu çay",
                "products": [
                  {
                    "id": "1",
                    "name": "Kahvaltı tabağı"
                  },
                  {
                    "id": "2",
                    "name": "Fit brunch"
                  },
                  {
                    "id": "3",
                    "name": "Coldpress juice collection"
                  }
                ]
              },
            ]
          },
          {
            "category": "Taze İçecekler",
            "color": "#a29d2f",
            "products": [
              {
                "id": "1",
                "name": "Kahvaltı tabağı"
              },
              {
                "id": "2",
                "name": "Fit brunch"
              },
              {
                "id": "3",
                "name": "Coldpress juice collection"
              }
            ],
          },
          {
            "category": "Kokteyller",
            "color": "#d15335",
            "products": [
              {
                "id": "1",
                "name": "Kahvaltı tabağı"
              },
              {
                "id": "2",
                "name": "Fit brunch"
              },
              {
                "id": "3",
                "name": "Coldpress juice collection"
              }
            ],
          },
          {
            "category": "Vermut",
            "color": "#d15335",
            "products": [
              {
                "id": "1",
                "name": "Kahvaltı tabağı"
              },
              {
                "id": "2",
                "name": "Fit brunch"
              },
              {
                "id": "3",
                "name": "Coldpress juice collection"
              }
            ],
          },
          {
            "category": "Nargile",
            "color": "#998575",
            "products": [
              {
                "id": "1",
                "name": "Kahvaltı tabağı"
              },
              {
                "id": "2",
                "name": "Fit brunch"
              },
              {
                "id": "3",
                "name": "Coldpress juice collection"
              }
            ],
          },
        ])
      })
      .catch((error) => {
        console.log(error)
        setMenu([
          {
            "category": "Sabah",
            "color": "#465956",
            "products": [
              {
                "id": "1",
                "name": "Kahvaltı tabağı"
              },
              {
                "id": "2",
                "name": "Fit brunch"
              },
              {
                "id": "3",
                "name": "Coldpress juice collection"
              }
            ],
          },
          {
            "category": "Salata",
            "color": "#465956",
            "products": [
              {
                "id": "1",
                "name": "Kahvaltı tabağı"
              },
              {
                "id": "2",
                "name": "Fit brunch"
              },
              {
                "id": "3",
                "name": "Coldpress juice collection"
              }
            ],
          },
          {
            "category": "Sushi",
            "color": "#465956",
            "products": [
              {
                "id": "1",
                "name": "Kahvaltı tabağı"
              },
              {
                "id": "2",
                "name": "Fit brunch"
              },
              {
                "id": "3",
                "name": "Coldpress juice collection"
              }
            ],
          },
          {
            "category": "Soft İçecekler",
            "color": "#a29d2f",
            "subCategories": [
              {
                "category": "Bahçeden tazeler",
                "products": [
                  {
                    "id": "1",
                    "name": "Kahvaltı tabağı"
                  },
                  {
                    "id": "2",
                    "name": "Fit brunch"
                  },
                  {
                    "id": "3",
                    "name": "Coldpress juice collection"
                  }
                ]
              },
              {
                "category": "Coldpress juice collection",
                "products": [
                  {
                    "id": "1",
                    "name": "Kahvaltı tabağı"
                  },
                  {
                    "id": "2",
                    "name": "Fit brunch"
                  },
                  {
                    "id": "3",
                    "name": "Coldpress juice collection"
                  }
                ]
              },
              {
                "category": "Ev yapımı taze limonatalar",
                "products": [
                  {
                    "id": "1",
                    "name": "Kahvaltı tabağı"
                  },
                  {
                    "id": "2",
                    "name": "Fit brunch"
                  },
                  {
                    "id": "3",
                    "name": "Coldpress juice collection"
                  }
                ]
              },
              {
                "category": "Buzlu çay",
                "products": [
                  {
                    "id": "1",
                    "name": "Kahvaltı tabağı"
                  },
                  {
                    "id": "2",
                    "name": "Fit brunch"
                  },
                  {
                    "id": "3",
                    "name": "Coldpress juice collection"
                  }
                ]
              },
            ]
          },
          {
            "category": "Taze İçecekler",
            "color": "#a29d2f",
            "products": [
              {
                "id": "1",
                "name": "Kahvaltı tabağı"
              },
              {
                "id": "2",
                "name": "Fit brunch"
              },
              {
                "id": "3",
                "name": "Coldpress juice collection"
              }
            ],
          },
          {
            "category": "Kokteyller",
            "color": "#d15335",
            "products": [
              {
                "id": "1",
                "name": "Kahvaltı tabağı"
              },
              {
                "id": "2",
                "name": "Fit brunch"
              },
              {
                "id": "3",
                "name": "Coldpress juice collection"
              }
            ],
          },
          {
            "category": "Vermut",
            "color": "#d15335",
            "products": [
              {
                "id": "1",
                "name": "Kahvaltı tabağı"
              },
              {
                "id": "2",
                "name": "Fit brunch"
              },
              {
                "id": "3",
                "name": "Coldpress juice collection"
              }
            ],
          },
          {
            "category": "Nargile",
            "color": "#998575",
            "products": [
              {
                "id": "1",
                "name": "Kahvaltı tabağı"
              },
              {
                "id": "2",
                "name": "Fit brunch"
              },
              {
                "id": "3",
                "name": "Coldpress juice collection"
              }
            ],
          },
        ])
      })
  }, [])

  useEffect(() => getMenu(), [getMenu])


  const carouselData: Array<CarouselDataProps> = [
    { href: '/product/1', image: 'https://www.klasiksanatlar.com/img/sayfalar/b/1_1598452306_resim.png' },
    { href: '/product/2', image: 'https://www.klasiksanatlar.com/img/sayfalar/b/1_1598452306_resim.png' },
    { href: '/product/3', image: 'https://www.klasiksanatlar.com/img/sayfalar/b/1_1598452306_resim.png' },
  ]

  return (
    <Main title="Orient by G.K.">
      <Carousel data={carouselData} />
      <Lang />
      <Styled.Gutter>
        {menu.map((item, index) => (
          <Accordion key={index} color={item.color} title={item.category}>
            <Styled.Gutter>
              {item.products
                ? item.products.map((product, productIndex) => (
                  <Product
                    key={productIndex}
                    color={item.color}
                    href={`/product/${product.id}`}
                    price="85"
                    productName={product.name}
                  />
                ))
                : item.subCategories?.map((subCategory, subCategoryIndex) => (
                  <Accordion key={subCategoryIndex} color={item.color} title={subCategory.category}>
                    <Styled.Gutter>
                      {subCategory.products.map((product, productIndex) => (
                        <Product
                          key={productIndex}
                          color={item.color}
                          href={`/product/${product.id}`}
                          price="85"
                          productName={product.name}
                        />
                      ))}
                    </Styled.Gutter>
                  </Accordion>
                ))
              }
            </Styled.Gutter>
          </Accordion>
        ))}
      </Styled.Gutter>
      <ScrollUp color="#2f5143" />
    </Main>
  )
}

export default Home