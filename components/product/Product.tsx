import React from "react";
import Link from "next/link";
import HipchatChevronDownIcon from "@atlaskit/icon/glyph/hipchat/chevron-down";

import { ProductProps } from "./types";
import * as Styled from "./Product.styled";

const Product: React.FunctionComponent<ProductProps> = ({
  color,
  href,
  px,
  title,
}) => {
  return (
    <div style={{ width: "100%" }}>
      <Link href={href} passHref>
        <Styled.Product px={px} color={color}>
          <Styled.Title style={{ width: "80%" }}>
            <p>{title}</p>
          </Styled.Title>
          <Styled.Price>
            <HipchatChevronDownIcon
              label="chevron-down"
              primaryColor={color}
              size="medium"
            />
          </Styled.Price>
        </Styled.Product>
      </Link>
    </div>
  );
};

export default Product;
