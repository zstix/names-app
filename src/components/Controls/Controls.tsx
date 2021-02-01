import { FunctionComponent } from 'preact';
import Icon from '../Icon';
import './controls.css';

const Controls: FunctionComponent = () => (
  <div className="na-controls">
    <div role="button">
      <Icon name="x" />
    </div>
    <div role="button">
      <Icon name="check" />
    </div>
  </div>
);

export default Controls;