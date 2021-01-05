import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@emotion/react';

// TODO: settings context for theme
import { light } from './theme';
// TODO: remove this
import FooBar from './components/FooBar'

const App = (
  <ThemeProvider theme={light}>
    <FooBar />
  </ThemeProvider>
);

ReactDOM.render(App, document.getElementById('root'));