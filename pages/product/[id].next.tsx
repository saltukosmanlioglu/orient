import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import Loader from "@/components/loader";
import Main from "@/layout/main";
import Allergens from "@/widgets/allergens";
import ProductDetail from "@/widgets/product-detail";

import { ProductDetailProps } from "./types";
import * as Styled from './Product.styled'

const Detail: React.FunctionComponent = () => {
  const [data, setData] = useState<ProductDetailProps>();

  const router = useRouter();
  const { id } = router.query;

  const getProduct = useCallback(() => {
    fetch(
      `${process.env.NEXT_APP_API}product/${id}?language=${localStorage.getItem(
        "language"
      )}`,
      { method: "GET" }
    )
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, [id]);

  useEffect(() => getProduct(), [getProduct]);

  return data ? (
    <Main header={{ goBack: true }} title={`${data.title} | Orient QR Menü`}>
      {data.image && (
        <Styled.ProductImage>
          <Image
            src={`${process.env.NEXT_APP_FILE_SERVE}${data.image}`}
            alt="Product image"
            objectFit="cover"
            layout="fill"
          />
        </Styled.ProductImage>
      )}
      <div style={{ padding: "0 20px" }}>
        <ProductDetail
          description={data.description}
          price={data.price}
          title={data.title}
        />
        {data.allergens && <Allergens allergens={data.allergens} />}
      </div>
    </Main>
  ) : (
    <Loader />
  );
};

export default Detail;
