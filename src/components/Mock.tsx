import React from 'react';
import { css, withTheme } from '@emotion/react';

import Button from './Button';

const Mock: React.FC<{ theme: INamesAppTheme }> = ({ theme }) => (
  <div
    css={css`
      color: ${theme.color.text.primary};
      padding: 20px;
    `}
  >
    Mock screen goes here.
    <Button icon="settings">settings</Button>
    <br />
    And also perhaps it goes here, I'm not really too sure.
    <Button icon="settings" />
    <p>
      <Button noBorder>what?</Button>
    </p>
  </div>
);

export default withTheme(Mock);