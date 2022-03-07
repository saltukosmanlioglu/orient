import React from "react";
import Link from "next/link";
import ArrowRightIcon from "@atlaskit/icon/glyph/arrow-right";

import { ProductProps } from "./types";
import * as Styled from "./Product.styled";

const Product: React.FunctionComponent<ProductProps> = ({
  color,
  href,
  price,
  title,
}) => {
  return (
    <Link href={href} passHref>
      <Styled.Product color={color}>
        <Styled.Title style={{ width: "80%" }}>
          <p>{title}</p>
        </Styled.Title>
        <Styled.Price>
          <ArrowRightIcon
            label="arr§ow-right"
            primaryColor={"#0288d1"}
            size="medium"
          />
        </Styled.Price>
      </Styled.Product>
    </Link>
  );
};

export default Product;
