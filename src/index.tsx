import React from 'react';
import ReactDOM from 'react-dom';
import { css } from '@emotion/react';

import GlobalStyles from './components/GlobalStyles';
import NameCard from './components/NameCard';

const App = (
  <div css={css`
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}>
    <GlobalStyles />
    <NameCard name="alexander" />
  </div>
);

ReactDOM.render(App, document.getElementById('root'));