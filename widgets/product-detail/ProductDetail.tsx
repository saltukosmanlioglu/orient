import React from "react";

import { ProductDetailProps } from "./types";
import * as Styled from "./ProductDetail.styled";

const ProductDetail: React.FunctionComponent<ProductDetailProps> = ({
  color,
  description,
  price,
  title,
}) => {
  const isVirgule = price?.split?.(",");

  return (
    <Styled.ProductDetail color={color}>
      <b>{title}</b>
      <Styled.Detail color={color}>
        {description && <p>{description}</p>}
        <Styled.Price color={color}>
          {isVirgule?.[0]},<span>{isVirgule?.[1]}</span>
          <span> TL</span>{" "}
        </Styled.Price>
        <Styled.Bar />
      </Styled.Detail>
    </Styled.ProductDetail>
  );
};

export default ProductDetail;
