import React from 'react';
import { css, withTheme } from '@emotion/react';

interface IFooBarProps {
  theme: INamesAppTheme;
}

const FooBar: React.FC<IFooBarProps> = ({ theme }) => (
  <div
    css={css`
      color: ${theme.color.text.primary};
    `}
  >
    Hello, Names App!
  </div>
);

export default withTheme(FooBar);