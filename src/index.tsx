import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@emotion/react';

// TODO: settings context for theme
import { light } from './theme';
import GlobalStyles from './components/GlobalStyles';
// TODO: remove this
import Mock from './components/Mock'

const App = (
  <ThemeProvider theme={light}>
    <GlobalStyles />
    <Mock />
  </ThemeProvider>
);

ReactDOM.render(App, document.getElementById('root'));