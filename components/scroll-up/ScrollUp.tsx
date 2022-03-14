import React, { useEffect, useState } from "react";
import HipchatChevronUpIcon from "@atlaskit/icon/glyph/hipchat/chevron-up";

import { ScrollUpProps } from "./types";
import * as Styled from "./ScrollUp.styled";

const ScrollUp: React.FunctionComponent<ScrollUpProps> = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleClick = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window && window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  return visible ? (
    <Styled.ScrollUp onClick={handleClick}>
      <HipchatChevronUpIcon
        label="chevron-down"
        primaryColor="#465956"
        size="large"
      />
    </Styled.ScrollUp>
  ) : null;
};

export default ScrollUp;
