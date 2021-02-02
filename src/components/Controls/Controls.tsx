import { FunctionComponent as FC } from 'preact';

import Icon from '../Icon';

import './controls.css';

const Controls: FC = () => (
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