import React from 'react';
import { css, withTheme } from '@emotion/react';

const Mock: React.FC<INamesAppProps> = ({ theme }) => (
  <div
    css={css`
      color: ${theme.color.text.primary};
    `}
  >
    Mock screen goes here.
  </div>
);

export default withTheme(Mock);