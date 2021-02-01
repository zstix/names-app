import React from 'react';
import { css } from '@emotion/react';

import Icon from './Icon';

const Controls: React.FC = () => (
  <div css={css`
    stroke: white;
    display: flex;
    margin-top: 0.5em;
    width: 95vw;

    [role="button"] {
      width: calc(95vw / 2);
      margin: 0.5em;
      text-align: center;
      padding: 1.2em 0.5em 0.75em 0.5em;
      border-radius: 0.2em;
      box-shadow: inset 0 -0.2em rgba(0, 0, 0, 0.4);
      cursor: pointer;
    }
  `}>
    <div role="button" css={css`
      background-color: #cf1f1f;
    `}>
      <Icon name="x" />
    </div>
    <div role="button" css={css`
      background-color: #27a551;
    `}>
      <Icon name="check" />
    </div>
  </div>
);

export default Controls;