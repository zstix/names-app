import { render } from 'preact';

// import Name from './layouts/Name';
import List from './layouts/List';

import './styles.css';

const App = (
  <div>
    <List />
  </div>
);

render(App, document.getElementById('root'));