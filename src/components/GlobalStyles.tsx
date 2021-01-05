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
`;

const GlobalStyles: React.FC<INamesAppProps> = ({ theme }) => (
  <Global
    styles={css`
      ${reset}

      body {
        font: ${theme.fonts.primary};
      }
    `}
  />
);

export default withTheme(GlobalStyles);