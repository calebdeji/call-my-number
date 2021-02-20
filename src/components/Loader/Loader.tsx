import React, { FC } from "react";

import { LoaderLine, Props } from "./styles";

const Loader: FC<Props> = ({ ...props }) => {
  return <LoaderLine {...props} />;
};

export type { Props as LoaderProps } from "./styles";

export default Loader;
