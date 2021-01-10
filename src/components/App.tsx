import React from 'react';
import { css, withTheme } from '@emotion/react';

import Button from './Button';
import Info from './Info';

const App: React.FC<{ theme: INamesAppTheme }> = ({ theme }) => (
  <div css={css`
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    position: relative;
  `}>
    <div css={css`align-self: flex-end;`}>
      <Button icon="settings" noBorder />
    </div>
    <div>
      <h1 css={css`
        font-size: 3em;
        margin-bottom: 0.4em;
      `}>
        Alexander
      </h1>
      <div css={css`
        display: flex;
        align-items: center;
        justify-content: space-around;
      `}>
        <Button icon="heart" color="green">like</Button>
        <Button icon="thumbs-down" color="red">dislike</Button>
      </div>
    </div>
    <Button icon="help-circle" noBorder />
    <Info />
  </div>
);

export default withTheme(App);