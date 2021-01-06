import React from 'react';
import { css, withTheme } from '@emotion/react';

import Button from './Button';
import Icon from './Icon';

const Mock: React.FC<{ theme: INamesAppTheme }> = ({ theme }) => (
  <div
    css={css`
      color: ${theme.color.text.primary};
    `}
  >
    Mock screen goes here.
    <Button icon="settings" />
    <p>
      Icon: <br />
      <Icon name="settings" />
    </p>
  </div>
);

export default withTheme(Mock);