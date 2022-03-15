import React from "react";

import { ProductDetailProps } from "./types";
import * as Styled from "./ProductDetail.styled";

const ProductDetail: React.FunctionComponent<ProductDetailProps> = ({
  description,
  price,
  title,
}) => {
  const isVirgule = price?.split?.(",");

  console.log(isVirgule, 'sadas')

  return (
    <Styled.ProductDetail>
      <b>{title}</b>
      <Styled.Detail>
        {description && <p>{description}</p>}
        <p>
          {price}
          <span>.00</span>
          <span> TL</span>{" "}
        </p>
        <Styled.Bar />
      </Styled.Detail>
    </Styled.ProductDetail>
  );
};

export default ProductDetail;
