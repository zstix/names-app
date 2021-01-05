import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@emotion/react';

// TODO: settings context for theme
import { light } from './theme';
// TODO: remove this
import GlobalStyles from './components/GlobalStyles';
import Mock from './components/Mock'

const App = (
  <ThemeProvider theme={light}>
    <GlobalStyles />
    <Mock />
  </ThemeProvider>
);

ReactDOM.render(App, document.getElementById('root'));