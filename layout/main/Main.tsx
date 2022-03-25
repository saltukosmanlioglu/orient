import React from "react";
import Head from "next/head";

import Header from "@/components/header";
import ScrollUp from "@/components/scroll-up";
import Space from "@/components/space";

import { MainProps } from "./types";

const Main: React.FunctionComponent<MainProps> = ({
  children,
  title,
}) => {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <section style={{ marginBottom: 40 }}>{children}</section>
      <ScrollUp />
      <Space height={200} />
    </React.Fragment>
  );
};

export default Main;
