import React from 'react';
import { css, withTheme } from '@emotion/react';

const FooBar: React.FC<{ theme: INamesAppTheme }> = ({ theme }) => (
  <div
    css={css`
      color: ${theme.color.text.primary};
    `}
  >
    Hello, Names App!
  </div>
);

export default withTheme(FooBar);