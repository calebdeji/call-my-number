import React, { FC } from 'react';

import { TextStyle, TextProps } from './styles';

const Text: FC<TextProps> = ({ children, ...rest }) => {
  return <TextStyle {...rest}>{children}</TextStyle>;
};

export default Text;
