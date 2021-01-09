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
    {Object.entries(theme.color).map(([color, variants]) => (
      <div key={color}>
        <h2>{color}</h2>
        {Array.isArray(variants) && variants.map((variant) => (
          <div
            key={variant}
            css={css`
              width: 4em;
              display: inline-block;
              margin-right: 1em;
          `}>
            <div>{variant}</div>
            <div
              css={css`
                height: 4em;
                background-color: ${variant};
              `}
            />
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default withTheme(Mock);