import React from 'react';
import { css, withTheme } from '@emotion/react';

import Button from './Button';

const Mock: React.FC<{ theme: INamesAppTheme }> = ({ theme }) => (
  <div css={css`padding: 20px;`}>
    <p>
      Mock screen goes here.
    </p>
    <p>
      <Button icon="heart">yay!</Button>
      <Button icon="thumbs-down">nope</Button>
    </p>
  </div>
);

export default withTheme(Mock);