import React from 'react';
import { css, Global } from '@emotion/react';

const reset = css`
  * {
    box-sizing: border-box;
  }

  body,
  html {
    margin: 0;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  h1, h2, h3, h4 {
    margin: 0;
    padding: 0;
  }
`;

const imports = css`
  @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
`;

const vars = css`
  :root {
    --color-bg: #2f3d4f;
    --color-text: #333;

    --font-primary: Helvetica, Arial, sans-serif;
    --font-marker: 'Permanent Marker', cursive;
  }
`;

const GlobalStyles: React.FC = () => (
  <Global
    styles={css`
      ${imports}
      ${reset}
      ${vars}

      body {
        font: 18px/1.6 var(--font-primary);
        color: var(--color-text);
        background-color: var(--color-bg);
      }
    `}
  />
);

export default GlobalStyles;