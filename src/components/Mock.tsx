import React from 'react';
import { css, withTheme } from '@emotion/react';

import Button from './Button';

const Mock: React.FC<{ theme: INamesAppTheme }> = ({ theme }) => (
  <div
    css={css`
      color: ${theme.color.text.primary};
    `}
  >
    Mock screen goes here.
    <Button icon="Settings" />
  </div>
);

export default withTheme(Mock);