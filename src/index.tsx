import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@emotion/react';

// TODO: settings context for theme
import { light } from './theme';
import GlobalStyles from './components/GlobalStyles';
// TODO: remove this
import App from './components/App'

const Root = (
  <ThemeProvider theme={light}>
    <GlobalStyles />
    <App />
  </ThemeProvider>
);

ReactDOM.render(Root, document.getElementById('root'));