import { render } from 'preact';

import Name from './layouts/Name';

import './styles.css';

const App = (
  <div>
    <Name />
  </div>
);

render(App, document.getElementById('root'));