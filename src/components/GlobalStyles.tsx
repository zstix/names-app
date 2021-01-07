import React from 'react';
import { css, Global, withTheme } from '@emotion/react';

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

const GlobalStyles: React.FC<{ theme: INamesAppTheme }> = ({ theme }) => (
  <Global
    styles={css`
      ${reset}

      body {
        font: ${theme.fonts.primary};
        color: ${theme.color.text.primary};
        background-color: ${theme.color.background.primary};
      }
    `}
  />
);

export default withTheme(GlobalStyles);