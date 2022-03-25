import React from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "../../public/images/logo.png";

import { HeaderProps } from "./types";
import * as Styled from "./Header.styled";

const Header: React.FunctionComponent<HeaderProps> = () => {
  return (
    <Styled.Header>
      <Link href="/home" passHref>
        <a>
          <Image
            height="600"
            src={logo}
            alt="Orient by G.K."
            objectFit="contain"
          />
        </a>
      </Link>
      <Styled.SocialMedia>
        <Link href="https://www.facebook.com/orientbygk">
          <a target="_blank">
            <Image
              height={20}
              width={10}
              src="/images/facebook.png"
              alt="Facebook logo"
            />
          </a>
        </Link>
        <Link href="https://www.instagram.com/orientbygk">
          <a target="_blank">
            <Image
              height={20}
              width={20}
              src="/images/instagram.png"
              alt="Instagram logo"
            />
          </a>
        </Link>
      </Styled.SocialMedia>
    </Styled.Header>
  );
};

export default Header;
