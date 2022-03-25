import React from "react";
import Link from "next/link";
import HipchatChevronDownIcon from "@atlaskit/icon/glyph/hipchat/chevron-down";

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
      <Styled.Header>
        <Styled.GoBack>
          <Link href="/home">
            <a>
              <HipchatChevronDownIcon
                label="chevron-down"
                primaryColor="#000"
                size="large"
              />
            </a>
          </Link>
        </Styled.GoBack>
        <b>{title}</b>
      </Styled.Header>
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
