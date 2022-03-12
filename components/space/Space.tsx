import React from "react";

import { SpaceProps } from "./types";

const Space: React.FunctionComponent<SpaceProps> = ({ height }) => {
  return <div style={{ height: height, width: "100%" }} />;
};

export default Space;
