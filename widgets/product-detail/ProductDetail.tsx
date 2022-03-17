import React from "react";

import { ProductDetailProps } from "./types";
import * as Styled from "./ProductDetail.styled";

const ProductDetail: React.FunctionComponent<ProductDetailProps> = ({
  description,
  price,
  title,
}) => {
  const isVirgule = price?.split?.(",");

  return (
    <Styled.ProductDetail>
      <b>{title}</b>
      <Styled.Detail>
        {description && <p>{description}</p>}
        <p>
          {isVirgule?.[0]},
          <span>{isVirgule?.[1]}</span>
          <span> TL</span>{" "}
        </p>
        <Styled.Bar />
      </Styled.Detail>
    </Styled.ProductDetail>
  );
};

export default ProductDetail;
