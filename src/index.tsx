import { render } from 'preact';
import NameCard from './components/NameCard';
import Controls from './components/Controls';
import './styles.css';

const App = (
  <div className="na-app">
    <NameCard name="alexander" />
    <Controls />
  </div>
);

render(App, document.getElementById('root'));